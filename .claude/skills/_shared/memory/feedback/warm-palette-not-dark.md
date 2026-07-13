---
name: warm-palette-not-dark
description: Food/organic product sites need warm bright colors — never dark/tech themes
type: feedback
---

# Warm Palette, Not Dark

## Rule

For food, organic, and natural product websites, use warm bright color palettes — cream backgrounds, honey/amber accents, earthy tones. Never use dark tech themes (like `surface-950` dark mode).

## Origin

User research + explicit instruction: "I don't think dark looks good, we should go for warm bright and honey related colors."

## Palette (sanyonghoney)

| Role | Tailwind | Hex |
|------|----------|-----|
| Background | `cream-50` | #FFFDF7 |
| Surface | `honey-100` | #FEF3C7 |
| Primary CTA | `honey-700` | #B45309 |
| Headings | `honey-900` / `honey-950` | #78350F / #451A03 |
| Body text | `honey-800` | #92400E |
| Green accent | `sage-500` | #65A30D |
| WhatsApp | `#075E54` | — |

## Application

- Font: Playfair Display (serif) for headings, Inter (sans) for body
- All text colors must pass WCAG AA 4.5:1 contrast on their background
- Buttons use `honey-700` (not 600) for sufficient contrast with white text
