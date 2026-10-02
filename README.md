# RouterGuide — Phase 1

Static, SEO-first router login help site for GitHub Pages.

## Local build

```bash
npm run build
python3 -m http.server 4173 --directory dist
```

The build generates eight core public pages, `robots.txt`, `sitemap.xml`, `manus-routes.json`, `search-index.json`, optimized local SVG assets, and a static 404 page.

## Deployment

Push to `main` and the GitHub Actions workflow publishes `dist` to GitHub Pages. The initial project-site base is `/Router-portal`; set `SITE_BASE` and `SITE_URL` for another deployment target.

This site does not collect router passwords or Wi-Fi keys. Local admin links open addresses such as `http://192.168.1.1/` only from the visitor's own network.
