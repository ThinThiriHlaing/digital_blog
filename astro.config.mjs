import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    NetlifyCMS({
      config: {
        backend: {
          name: "git-gateway",
          branch: "main",
        },
        collections: [
          // Content collections
        ],
      },
    }),
  ],
});
// import { defineConfig } from "astro/config";
// import tailwind from "@astrojs/tailwind";

// export default defineConfig({
//   // ...
//   integrations: [tailwind()],
// });
