import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://marumaritime.com",
  // Pages removed in the content rebuild; keep old links working.
  redirects: {
    "/services": "/#what-we-do",
    "/investors": "/contact/",
  },
});
