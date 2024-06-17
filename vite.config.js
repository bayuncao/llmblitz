import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@nodes": path.resolve(__dirname, "./src/data/nodes"),
      "@edges": path.resolve(__dirname, "./src/data/edges"),
    },
  },
});
