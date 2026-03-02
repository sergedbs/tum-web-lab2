import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://sergedbs.github.io",
  base: "/tum-web-lab2",
  integrations: [sitemap()],
  output: "static",
});
