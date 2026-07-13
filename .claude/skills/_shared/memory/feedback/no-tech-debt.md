---
name: no-tech-debt
description: Do implementations correctly the first time — no legacy-peer-deps hacks, no workarounds that need revisiting
type: feedback
---

# No Tech Debt

## Rule

When implementing anything, do it the clean way that won't need revisiting later. No band-aids, no `--legacy-peer-deps`, no "we'll fix this later" comments.

## Origin

User correction: "No tech debt please. Do it so that we don't revisit later." — when `@astrojs/tailwind` had a peer dep conflict with Astro 7, the proper fix was to drop the integration entirely and use Tailwind as a standard PostCSS plugin.

## Application

- Choose dependencies that are compatible without workarounds
- If a peer dep conflict exists, find the root-cause fix (drop the package, use alternative approach)
- Never add `.npmrc` hacks or `--force` flags to CI
- Prefer standard/vanilla approaches over framework-specific wrappers when both work
