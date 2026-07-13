---
name: deployment-pattern
description: GitHub Actions deploys Astro static build to GitHub Pages with custom domain
type: reference
---

# Deployment Pattern

## Flow

```
push to main → GitHub Actions → astro build → upload artifact → deploy to Pages
```

## Key Config

- **`astro.config.mjs`**: Uses `CUSTOM_DOMAIN` env var to toggle site/base
- **`.github/workflows/deploy.yml`**: Sets `CUSTOM_DOMAIN=true` for production
- **`public/CNAME`**: Contains `sanyoghoney.com` — tells GitHub Pages the custom domain
- **GitHub Pages settings**: Source = GitHub Actions, Custom domain = sanyoghoney.com, HTTPS enforced

## DNS (GoDaddy)

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | sukhmeet2390.github.io |

## Gotchas

- GoDaddy Website Builder must be **disconnected** before custom A records work
- SSL provisioning takes 5-15 min after setting custom domain
- All internal links must use `import.meta.env.BASE_URL` prefix
