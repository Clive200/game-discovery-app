import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// Chakra UI v3 uses a "system" instead of extendTheme().
// Keep this file as the single place to customize theming later.
export const system = createSystem(
  defaultConfig,
  defineConfig({
    // Add tokens/theme config overrides here.
  }),
);
