# RouterGuide — Phase 1

Static, SEO-first router login help site for GitHub Pages.

## Local build

```bash
npm run build
python3 -m http.server 4173 --directory dist
```

The build generates eight core public pages, `robots.txt`, `sitemap.xml`, `manus-routes.json`, `search-index.json`, optimized local SVG assets, and a static 404 page.

## Deployment

Push to `main` and the connected Cloudflare Pages project builds `dist` automatically at `https://router-portal.pages.dev/`. The Cloudflare production build uses an empty base path and sets `SITE_URL` to the Pages domain. GitHub remains the source repository; GitHub Pages is not required.

The repository also contains a GitHub Pages workflow as a fallback. It is not the primary deployment route.

This site does not collect router passwords or Wi-Fi keys. Local admin links open addresses such as `http://192.168.1.1/` only from the visitor's own network.
