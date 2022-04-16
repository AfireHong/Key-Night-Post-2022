import { defineConfig, ConfigEnv } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { visualizer } from "rollup-plugin-visualizer";

const getPlugins = (mode: string) => {
  const plugins = [react()];
  if (mode === "analyze") {
    plugins.push(
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
      }) as any
    );
  }
  return plugins;
};
// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => ({
  root: "./",
  plugins: getPlugins(mode),
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
  },
}));
