---
name: BitBlabs Editorial
description: Hairline consultancy system after Digitally Minded — stone canvas, ink rules, numbered sections, square CTAs, four-color stripe. Homepage and work/story routes.
colors:
  canvas: "#FAFAF9"
  ink: "#111111"
  blue: "#2E5CE6"
  red: "#E0301E"
  amber: "#DE9B00"
  amber-fill: "#E8A800"
  green: "#188A52"
  body: "#555555"
  body-strong: "#444444"
  caption: "#666666"
  deemph: "#6F6F6F"
  hairline: "#111111"
  on-ink: "#DDDDDD"
typography:
  display:
    fontFamily: "system-ui, sans-serif"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  h1:
    fontSize: "104px"
  h2:
    fontSize: "66px"
  body:
    fontSize: "17px"
    lineHeight: 1.6
rounded:
  none: "0"
spacing:
  container: "1280px"
  container-inline-lg: "56px"
  section-block-lg: "104px"
  label-col: "220px"
---

# Design System: BitBlabs Editorial

**Surface boundary:** Tokens apply inside `.bb-home` (homepage, `/projects`, `/case-studies`, legal). Visual language follows [Digitally Minded](https://digitallyminded.co/): stone canvas, 1px ink hairlines, numbered sections, square buttons, four-color stripe. Copy stays BitBlabs (`lib/landing.ts`).

## Overview

Editorial consultancy layout. No webfonts on this surface (system-ui). No swimlane board, no rounded magnets, no paper grid.

**Key Characteristics:**
- Canvas `#FAFAF9`, ink `#111`, hairline borders
- Four-color stripe: blue `#2E5CE6` / red `#E0301E` / amber `#E8A800` / green `#188A52`
- Label grid: 220px index column + content
- Square primary CTA (red, hover ink)
- Header CTA ink (hover blue)
- Dark ink footer with the same stripe

## Colors

- **Blue** — section index 01, links, focus
- **Red** — primary booking CTA, index 02
- **Amber** — index 03, guarantee labels
- **Green** — index 04, CTA superscript

Cycle accents in document order. Do not wash whole sections in brand color.

## Typography

System UI stack. Display 700 / tracking -0.04em / lh 0.98. H1 104 / 72 / 48. H2 66 / 48 / 38. Body 17px / 1.6. Labels 12px uppercase tracking 0.22em. Big numbers 17px tracking 0.06em (process steps 44px).

## Layout

Container max 1280px, padding 56 / 32 / 20. Sections 104 / 72 / 56 with a bottom hairline. First viewport: left eyebrow, display headline, 132×6px stripe, supporting copy, red CTA. Workflow labels sit in a hairline strip under the hero.

## Components

- **Buttons:** square, 17px/700, red or ink, no arrows on primary
- **FAQ:** hairline rows, 20px bold trigger, rotating +
- **Process:** 4 columns, oversized 01–04
- **Guarantee / price:** ink block with 4px stripe on top
- **Nav:** 76px, hairline bottom, not a floating pill

## Do's and Don'ts

- **Do** keep BitBlabs copy, booking URL, and section IDs.
- **Do** use hairlines and the four-color cycle for structure.
- **Don't** bring back Archivo/Barlow, cobalt magnets, or the swimlane hero.
- **Don't** round CTAs or cards.
