# dcbto.com.br

My personal site: a single page with a short bio, a few open source projects and links to find me.

**Live at [dcbto.com.br](https://dcbto.com.br)**

## How it's built

- **One HTML file.** No framework, no build step, no client-side JavaScript. Styles live inline in `public/index.html`.
- **Karla**, self-hosted as a single variable `woff2`.
- **Monokai-inspired** dark palette with an orange accent, tuned so every text color passes WCAG AA contrast.
- **Cloudflare Workers** with static assets. A tiny Worker in `src/index.js` redirects `www` and plain HTTP to `https://dcbto.com.br`; everything else is served straight from `public/`.

```
public/
  index.html               the whole page
  favicon.svg
  fonts/karla-latin.woff2
src/index.js               www/HTTP → HTTPS apex redirect
wrangler.jsonc             Worker, assets and custom domains
```

## Running locally

```sh
npx wrangler dev
```

Or, to preview the page alone:

```sh
python3 -m http.server 8000 --directory public
```

## Deploying

```sh
npx wrangler login   # once
npx wrangler deploy
```

This publishes the Worker and binds it to `dcbto.com.br` and `www.dcbto.com.br`.
