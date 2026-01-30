import { useEffect, useRef, useState } from "react";
import apiClient from "../services/api-clients";
import { CanceledError } from "axios";
import type { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  // Make requestConfig stable even if caller creates new objects every render.
  const paramsKey = JSON.stringify(requestConfig?.params ?? null);
  const requestConfigRef = useRef<AxiosRequestConfig | undefined>(
    requestConfig,
  );

  useEffect(() => {
    requestConfigRef.current = requestConfig;
  }, [paramsKey, requestConfig]);

  useEffect(() => {
    const controller = new AbortController();

    // Avoid synchronous setState in effect body (per lint rule).
    queueMicrotask(() => setLoading(true));
    apiClient
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfigRef.current,
      })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [endpoint, paramsKey]);

  return { data, error, isLoading };
};

export default useData;
