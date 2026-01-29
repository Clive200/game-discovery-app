import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "24b212f092344faea807d6438ce9b56b",
  },
});
