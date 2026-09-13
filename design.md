# Design — BitBLabs

A locked design system for this app. Every page redesign reads this file before
emitting code. Do not regenerate per page — extend or amend this file when the
system needs to grow.

## Genre
modern-minimal

## Macrostructure family
- Marketing pages: Split Studio. Hero is centred stacked copy over proof. Body is alternating diptychs. Proof is a hairline name row + work pairs.
- App pages: none.
- Content pages: Split Studio index on `/projects`. Feature Stack on project/case-study detail (shell only). Long Document on legal and coming-soon.

## Theme
Custom. Vibe: warm ops studio.
- `--color-paper`   oklch(95.3% 0.010 58)
- `--color-paper-2` oklch(92.4% 0.014 50)
- `--color-ink`     oklch(17.4% 0.006 286)
- `--color-ink-2`   oklch(35% 0.012 280)
- `--color-rule`    oklch(86% 0.016 58)
- `--color-accent`  oklch(49% 0.090 172)
- `--color-focus`   oklch(49% 0.110 172)

Axes: light / grotesk-sans / warm. Accent occupies CTAs and marks, not lime floods.

## Typography
- Display: Space Grotesk, weight 700, style normal
- Body: Space Grotesk, weight 400
- Mono: none (outlier unused)
- Display tracking: -0.03em
- Type scale anchor: `--text-display` = clamp(2.5rem, 6vw + 1rem, 4.5rem)

## Spacing
4-point named scale. The values are in `tokens.css`. Pages must use named
tokens (`var(--space-md)`), never raw values.

## Motion
- Easings: `--ease-out` cubic-bezier(0.16, 1, 0.3, 1), `--ease-in`, `--ease-in-out`
- Reveal pattern: one hero opacity fade. No scroll-fade-everything.
- Reduced-motion fallback: opacity-only, ≤ 150 ms.

## Microinteractions stance
- silent success / celebratory toasts: never
- hover delay 800 ms · focus delay 0 ms
- named `transition` properties only; never `transition-all`
- no hover-scale, shine sweep, or auto-marquee

## CTA voice
- Primary CTA: filled `--color-accent` on `--color-accent-ink` text, 8px radius, nowrap. Copy: Apply for a Strategy Session (strategy) / Book a workflow discussion (home)
- Secondary CTA: typographic link, same radius, hairline rule

## Per-page allowances
- Marketing pages use **Zero-narrative story system**: full-viewport chapters, serif/script headline pairing, floating bottom nav, grid-paper close. See `components/story/*`.
- `/ai-workflow-strategy`: story chapters + FAQ accordion + Opportunity Brief sample + application CTA.
- App pages MUST NOT use enrichment — function carries the page.
- Content pages: story index/detail templates; legal pages keep readable article layout with top Navbar.

## What pages MUST share
- The wordmark / logotype.
- The accent colour and its placement (CTA fill + small marks).
- The display + body fonts.
- The CTA voice (button shape, border-radius, padding rhythm).
- N1b sticky three-section nav and Ft5 statement footer.

## What pages MAY differ on
- Macrostructure within the page-type family.
- Hero archetype (within the family's allowance).
- Enrichment — only on marketing pages, only Tier-A or Tier-B.

## Notes
Do not carry Lexend/Elementor template tells: pill+dot eyebrows, rotated lime highlight spans, floating cursor PNGs, hover-scale, transition-all, circular-icon feature grids, star-rating carousels, three-column “Most popular” pricing, Ft3 Product/Company/Resources, dark-mode FAB.

## Exports

`tokens.css` is the source of truth.

### tokens.css
See [`tokens.css`](tokens.css).

### Tailwind v4 `@theme`
```css
@theme {
  --color-paper: oklch(95.3% 0.010 58);
  --color-paper-2: oklch(92.4% 0.014 50);
  --color-ink: oklch(17.4% 0.006 286);
  --color-accent: oklch(49% 0.090 172);
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", system-ui, sans-serif;
  --spacing-md: 1.5rem;
  --text-md: 1.125rem;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}
```

### DTCG `tokens.json`
```json
{
  "color": {
    "paper": { "$value": "oklch(95.3% 0.010 58)", "$type": "color" },
    "ink": { "$value": "oklch(17.4% 0.006 286)", "$type": "color" },
    "accent": { "$value": "oklch(49% 0.090 172)", "$type": "color" }
  },
  "font": {
    "display": { "$value": "Space Grotesk", "$type": "fontFamily" },
    "body": { "$value": "Space Grotesk", "$type": "fontFamily" }
  },
  "space": {
    "md": { "$value": "1.5rem", "$type": "dimension" }
  }
}
```

### shadcn/ui CSS variables
```css
:root {
  --background: 95.3% 0.010 58;
  --foreground: 17.4% 0.006 286;
  --primary: 49% 0.090 172;
  --primary-foreground: 98% 0.008 90;
  --muted: 86% 0.016 58;
  --muted-foreground: 48% 0.016 70;
  --border: 86% 0.016 58;
  --input: 86% 0.016 58;
  --ring: 49% 0.110 172;
  --radius: 8px;
}
```
