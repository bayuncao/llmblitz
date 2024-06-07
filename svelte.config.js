import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import path from "path";

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  kit: {
    vite: {
      resolve: {
        alias: {
          "@src": path.resolve("./src"),
          "@nodes": path.resolve("./src/nodes"),
          "@edges": path.resolve("./src/edges"),

        }
      }
    }
  }
};
