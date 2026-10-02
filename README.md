# RouterGuide — Router Login Help

Static, SEO-first router login help site for Cloudflare Pages.

## Local build

```bash
npm run build
python3 -m http.server 4173 --directory dist
```

The build generates the public router-login, trust, policy, and IP guide pages, `robots.txt`, `sitemap.xml`, `manus-routes.json`, `search-index.json`, optimized local SVG assets, and a static 404 page.

## Deployment

Push to `main` and the connected Cloudflare Pages project builds `dist` automatically at `https://router-portal.pages.dev/`. The Cloudflare production build uses an empty base path and sets `SITE_URL` to the Pages domain. GitHub remains the source repository; GitHub Pages is not required.

The repository also contains a GitHub Pages workflow as a fallback. It is not the primary deployment route.

This site does not collect router passwords or Wi-Fi keys. Local admin links open addresses such as `http://192.168.1.1/` only from the visitor's own network.

## Live guides

- [RouterGuide home](https://router-portal.pages.dev/)
- [Router admin login](https://router-portal.pages.dev/router-login/)
- [192.168.1.1 login guide](https://router-portal.pages.dev/ip/192-168-1-1/)
- [192.168.0.1 login guide](https://router-portal.pages.dev/ip/192-168-0-1/)
- [10.0.0.1 login guide](https://router-portal.pages.dev/ip/10-0-0-1/)
- [Router IP directory sitemap](https://router-portal.pages.dev/sitemap.xml)

These are genuine project references for visitors and contributors, not automated backlink placements.
