// @ts-check
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://opdeckguide.com",
	vite: {
		resolve: {
			preserveSymlinks: true,
			alias: {
				"astro/entrypoints/prerender": fileURLToPath(
					new URL("./node_modules/astro/dist/entrypoints/prerender.js", import.meta.url),
				),
			},
		},
	},
});
