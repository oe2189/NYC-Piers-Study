// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://oe2189.github.io",
  base: "NYC-Piers-Study",
  integrations: [mdx(), sitemap(), tailwind()],
});
