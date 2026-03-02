import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Update site to your Netlify URL after first deploy (e.g. https://moments-cafe.netlify.app)
  site: "https://moments-cafe.netlify.app",
  integrations: [sitemap()],
  output: "static",
});
