# Tania Vinokur – taniaviolin.com

Static site. All content (shows, videos, gallery, texts, links) lives in `content.mjs`.

- Build: `node build.mjs` → writes `public/index.html`
- Local preview: `node build.mjs && python3 -m http.server 3000 -d public`
- Netlify builds automatically on push (see `netlify.toml`).
