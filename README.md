# elsolve.co.uk

Marketing site for **ELSOLVE** — a consultancy for AI as infrastructure.

Static site. No build step. Deploys anywhere.

## Structure

```
index.html      — single-page marketing site
styles.css      — design system (OKLCH palette, fluid scale)
script.js       — sticky nav, scroll reveal, year stamp
favicon.svg     — wordmark E with verdigris accent dot
og.svg          — social share image (1200×630)
vercel.json     — clean URLs, security headers
```

## Local preview

```bash
python3 -m http.server 4173
# open http://localhost:4173
```

## Deploy

Pushing to the `main` branch of `DonShelly/elsolve-website` triggers the
connected Vercel project (or, on first deploy, import the repo from the
Vercel dashboard — no build command, output directory `.`).

## Design context

- **Typography:** Source Serif 4 (display + body), Geist Mono (labels).
- **Palette:** warm paper (`oklch(0.97 0.014 82)`), deep ink, verdigris
  accent (`oklch(0.43 0.09 160)`).
- **Tone:** editorial, quiet, infrastructural. Not a SaaS landing page.

Content is the source of truth. Edit the HTML directly.
