---
name: tech-stack
description: Technology choices and why — Astro 7, Tailwind 3 via PostCSS, GitHub Pages
type: reference
---

# Tech Stack

## Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Astro 7 | Static output, fast, component-based |
| Styling | Tailwind CSS 3 via PostCSS | No `@astrojs/tailwind` (peer dep issues with Astro 7). Standard PostCSS plugin = zero conflicts. |
| Fonts | Playfair Display + Inter | Serif headings = artisanal feel; Inter = clean body |
| Hosting | GitHub Pages | Free, auto-deploys via Actions |
| DNS | GoDaddy → GitHub Pages (A records + CNAME) | Domain already purchased there |
| CI/CD | GitHub Actions (`deploy.yml`) | Build on push to `main`, deploy Pages artifact |
| MCP | Chrome DevTools (`.mcp.json`) | Browser automation for audits |

## Architecture

```
src/
├── layouts/Base.astro       ← Nav + footer + Schema.org + OG + fonts
├── components/              ← ProductCard, FeatureCard, FaqItem, WhatsAppButton
├── data/products.ts         ← Single source of truth for all products + business info
├── pages/
│   ├── index.astro          ← Home
│   ├── about/index.astro    ← About
│   ├── products/index.astro ← Grid
│   ├── products/[slug].astro← Detail + WhatsApp CTA
│   └── contact/index.astro  ← Contact
└── styles/global.css        ← Tailwind directives
```

## Key Decisions

- **No shopping cart** — WhatsApp ordering (zero cost, personal touch)
- **`import.meta.env.BASE_URL`** for all internal links (supports both subpath and custom domain)
- **`CUSTOM_DOMAIN` env var** in CI toggles between GitHub Pages subpath and custom domain
- **Schema.org** on every page (LocalBusiness, Product, CollectionPage, AboutPage, ContactPage)
- **No JS frameworks** — pure Astro components, zero client JS except mobile menu toggle
