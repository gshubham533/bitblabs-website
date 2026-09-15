---
name: BitBlabs War-Room
description: Ops war-room swimlanes: matte whiteboard, cobalt flow tape, amber blockers, Archivo + Barlow Condensed magnets. Applies to homepage and work/story routes.
colors:
  canvas: "#F4F0E8"
  board: "#EBE4D8"
  surface: "#FFFCF7"
  surface-soft: "#E4ECFF"
  ink: "#141820"
  ink-muted: "#5A6159"
  line: "#D5CDC0"
  rail: "#CFC5B5"
  brand: "#2457E6"
  brand-dark: "#1A3FB0"
  brand-soft: "#DCE6FF"
  mint: "#9FE8C8"
  amber: "#E8A317"
  on-brand: "#FFFFFF"
typography:
  display:
    fontFamily: "Barlow Condensed, Archivo, sans-serif"
    fontSize: "clamp(2.4rem, 7.2vw, 5.4rem)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Barlow Condensed, Archivo, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.04em"
  title:
    fontFamily: "Barlow Condensed, Archivo, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.04em"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Barlow Condensed, Archivo, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.14em"
rounded:
  magnet: "0.55rem"
  chip: "0.375rem"
  lane: "0.5rem"
  card: "0.85rem"
  panel: "1.15rem"
  panel-lg: "1.35rem"
  nav: "0.75rem"
spacing:
  container-inline-sm: "1.125rem"
  container-inline-md: "1.5rem"
  container-inline-lg: "2rem"
  section-block-sm: "4rem"
  section-block-md: "5.5rem"
  section-block-lg: "7.5rem"
  max: "1240px"
  wide: "1400px"
  grid: "48px"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.on-brand}"
    rounded: "{rounded.magnet}"
    padding: "0.75rem 1.35rem"
    height: "3rem"
    typography: "{typography.title}"
  button-primary-hover:
    backgroundColor: "{colors.brand-dark}"
    textColor: "{colors.on-brand}"
    rounded: "{rounded.magnet}"
  button-primary-lg:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.on-brand}"
    rounded: "{rounded.magnet}"
    padding: "0.75rem 1.6rem"
    height: "3.5rem"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.magnet}"
    padding: "0.75rem 1.35rem"
    height: "3rem"
  button-secondary-hover:
    backgroundColor: "{colors.brand-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.magnet}"
  chip-stuck:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.ink}"
    rounded: "{rounded.chip}"
    padding: "0.5rem 0.625rem"
  chip-moving:
    backgroundColor: "{colors.brand-soft}"
    textColor: "{colors.brand-dark}"
    rounded: "{rounded.chip}"
    padding: "0.5rem 0.625rem"
  chip-cleared:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.chip}"
    padding: "0.5rem 0.625rem"
  card-surface:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "1.25rem 1.5rem"
  panel-board:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "1.5rem 2rem"
  nav-bar:
    backgroundColor: "{colors.board}"
    textColor: "{colors.ink}"
    rounded: "{rounded.nav}"
    height: "3.5rem"
    padding: "0 1rem"
---

# Design System: BitBlabs War-Room

**Surface boundary:** Tokens and rules below apply inside `.bb-home` — the homepage plus work/story routes (`/projects`, `/projects/[slug]`, `/case-studies`, `/case-studies/[slug]`). Do not migrate this system onto legal or legacy chrome (`/privacy`, `/terms`, `/brain-stuff`, `/side-quests`) that still uses Google Sans Flex / dark portfolio language.

## Overview

**Creative North Star: "Ops War-Room Swimlanes"**

The site reads as a live operations whiteboard, not a SaaS marketing template. Matte warm paper carries a faint 48px grid; work lives as squared magnetic chips on rail-bordered lanes; cobalt flow tape marks continuity when blockers clear. Density is operational and legible: instrument caps for hierarchy, documentation sans for reading. Never neon AI chrome or soft stacked card malls.

Personality is calm, specific, and process-first: stuck work is visible before the offer. Brand signal in the first viewport is the board titled **BitBlabs**, with one headline, one supporting line, and Book / See How It Works. Primary Book clears the lane into flow before navigation completes.

**Key Characteristics:**
- Matte whiteboard canvas with subtle grid atmosphere
- Cobalt flow tape + amber stuck / mint cleared chip states
- Archivo body + Barlow Condensed display/labels (uppercase magnets)
- Squared magnet radii, not capsule pills
- Soft board and chip shadows only; no glow stacks
- Homepage-scoped `.bb-home` tokens; shared with work/story routes

## Colors

Whiteboard neutrals carry the page; cobalt is the rare continuous-flow accent; amber and mint are status pigments on chips, not decoration washes.

### Primary
- **Cobalt Flow Tape** (`brand` / `#2457E6`): Primary actions, focus rings, flow-phase tape and moving-chip borders. Scarcity matters: it marks motion and commitment, not every surface.
- **Cobalt Depth** (`brand-dark` / `#1A3FB0`): Primary hover / pressed depth; moving-chip text.
- **Cobalt Wash** (`brand-soft` / `#DCE6FF`): Soft hover fill for secondary magnets; moving chip field; selection highlight.

### Secondary
- **Blocker Amber** (`amber` / `#E8A317`): Stuck-state chips and “Work stuck” phase badge.
- **Cleared Mint** (`mint` / `#9FE8C8`): Cleared chips and “Work flowing” phase badge.

### Neutral
- **Matte Whiteboard** (`canvas` / `#F4F0E8`): Page ground + 48px grid overlay.
- **Board Field** (`board` / `#EBE4D8`): Swimlane board and unscrolled nav tray.
- **Paper Magnet** (`surface` / `#FFFCF7`): Cards, panels, lane columns, secondary buttons.
- **Lane Mist** (`surface-soft` / `#E4ECFF`): Cool soft field for light cobalt atmosphere.
- **War-Room Ink** (`ink` / `#141820`): Primary text and board titles.
- **Muted Olive Ink** (`ink-muted` / `#5A6159`): Supporting copy and meta labels.
- **Hairline** (`line` / `#D5CDC0`): Section / accordion dividers.
- **Magnetic Rail** (`rail` / `#CFC5B5`): Lane borders, secondary button stroke, board frame.
- **On Brand** (`on-brand` / `#FFFFFF`): Text on primary cobalt magnets.

### Named Rules
**The Flow Tape Rule.** Cobalt is continuous flow and primary commitment: ≤ ~10% of a screen. Amber and mint own status; do not recolor whole sections cobalt.

**The Whiteboard Ground Rule.** Page atmosphere is matte paper + grid + soft radial washes (amber / cobalt at low opacity). Flat single-color fills and purple neon gradients are out of world.

## Typography

**Display Font:** Barlow Condensed (with Archivo fallback)
**Body Font:** Archivo (with ui-sans-serif / system-ui)

**Character:** Condensed instrument caps for board titles, CTAs, and lane labels; Archivo for operational reading: documentation, not marketing flourish.

### Hierarchy
- **Display** (600, `clamp(2.4rem, 7.2vw, 5.4rem)`, lh 0.94): Hero H1 only. Sentence case, tight tracking.
- **Headline** (600, `clamp(1.75rem, 4vw, 2.75rem)`, uppercase tracking ~0.04em): Board wordmark / major condensed titles.
- **Title** (600, 1rem, uppercase tracking 0.04em): Primary and secondary magnet CTAs.
- **Body** (400, 1rem–1.125rem, lh ~1.625): Supporting copy; keep lines readable (~65ch where constrained).
- **Label** (600, ~11px, uppercase tracking 0.12–0.16em): Phase badges, lane meta, microcopy under CTAs.

### Named Rules
**The Magnet Caps Rule.** Interactive magnets and lane chrome use Barlow Condensed uppercase. Body copy stays Archivo sentence case. Do not all-caps paragraphs.

**The No-Kicker Rule.** Section kickers / eyebrows are craft-floor banned on this surface (CSS forces them hidden). Lead with the section H2; do not invent eyebrow styles for future sections.

## Layout

Container max `1240px` (`--bb-max`), optional wide `1400px`. Inline padding steps `1.125rem` → `1.5rem` (sm) → `2rem` (lg). Section block rhythm `4rem` / `5.5rem` / `7.5rem`.

First viewport: copy block in container, then full-bleed swimlane board (edge-to-edge, no inset media card). Sticky mobile booking bar appears after hero exit; pad `.bb-home` bottom when active. Grid atmosphere is `48px` on canvas: structural, not decorative clutter.

### Named Rules
**The Board-Is-Hero Rule.** The swimlane board is the thesis visual plane: full-bleed in the hero. Do not demote it to a side card or floating collage.

## Elevation & Depth

Hybrid: tonal layering (canvas → board → surface) plus two soft shadows. No multi-layer glow, no hard offset neobrutalist drops.

### Shadow Vocabulary
- **Board lift** (`0 14px 36px rgba(20, 24, 32, 0.08)`): Contained (non-bleed) boards and scrolled nav.
- **Chip magnet** (`0 1px 0 rgba(20, 24, 32, 0.06), 0 6px 16px rgba(20, 24, 32, 0.05)`): Chips, primary magnets at rest, cards.
- **Primary hover** (`0 16px 36px rgba(20, 24, 32, 0.12)`): Primary magnet lift on hover with `translateY(-1px)`.

### Named Rules
**The Soft Magnet Rule.** Shadows are quiet whiteboard depth. Prefer rail borders and tonal steps over stacked elevation.

## Shapes

Form language is **squared magnets**: button radius `0.55rem`, chips `0.375rem`–`md`, lanes `0.5rem`, cards `0.85rem`, panels `1.15rem` (`1.35rem` at lg), nav tray `0.75rem` (rounded-xl). Borders are 1px magnetic rail or hairline. Hero board bleeds with `rounded-none` and horizontal border flush.

### Named Rules
**The Squared Magnet Rule.** Interactive and status shapes stay short-radius rectangles. Capsule pills (`999px` / `rounded-full`) are not part of the brand vocabulary (skip-link focus chrome excepted).

## Components

### Buttons
- **Shape:** Squared magnet (`0.55rem`)
- **Primary:** Cobalt fill, white uppercase Barlow Condensed, chip shadow; hover → brand-dark + slight lift; large variant `3.5rem` height
- **Secondary:** Paper surface, rail border, ink caps; hover → cobalt wash, border clears
- **Behavior:** Hero Book triggers clear-lane beat (~850ms) before opening booking

### Chips
- **Stuck:** Amber fill, amber-tinted border, ink text
- **Moving:** Cobalt wash, cobalt border, brand-dark text
- **Cleared:** Mint fill, mint border, ink text
- **Shape:** Squared (`rounded-md`), chip shadow, never pills

### Cards / Containers
- **Card:** Surface + rail border + chip shadow + `0.85rem` radius
- **Panel:** Surface + rail border + larger radius (`1.15rem` / `1.35rem`)
- **Use:** Interaction or structured content only, not decorative card stacks in hero

### Navigation
- Fixed top tray: board wash at rest; on scroll → surface/95 + rail border + board shadow
- Wordmark: Barlow Condensed uppercase; logo mark + “BitBlabs”
- Desktop links muted → ink on hover; mobile sheet uses squared list rows

### Swimlane Board (signature)
- Board field (`board`) framed by rail; title “BitBlabs” + “Ops war-room · live lanes”
- Phase badge amber (stuck) / mint (flow); cobalt segment controls
- Four lane columns with dashed rail headers; cobalt flow tape across field (solid in flow, dashed/repeating in stuck)
- Auto-cycles stuck ↔ flow (~4.2s) unless paused / reduced motion; Book clears to flow

### Accordion
- Hairline dividers; ink triggers; squared `+` control on canvas chip; muted body; open/close height eases on `--bb-ease-ui`

## Do's and Don'ts

### Do:
- **Do** keep homepage and work/story pages inside `.bb-home` tokens (canvas `#F4F0E8`, brand `#2457E6`, amber `#E8A317`, mint `#9FE8C8`).
- **Do** use Archivo for reading and Barlow Condensed for magnets, board titles, and labels.
- **Do** treat the swimlane board as the hero thesis and let Book clear lanes into flow.
- **Do** prefer rail borders + soft magnet shadows over glow or heavy card elevation.
- **Do** honor `prefers-reduced-motion` (board autoplay off; SoftReveal / PanelSwap static).

### Don't:
- **Don't** revive Manrope, indigo `#4F46E5`, cream-serif terracotta, or purple-on-white SaaS gradients on this surface.
- **Don't** use capsule pills for CTAs or status chips.
- **Don't** ship neon AI chrome, glassmorphism stacks, or decorative card malls in the first viewport.
- **Don't** invent section kickers/eyebrows as system chrome (banned; CSS hides them).
- **Don't** leave dark cinematic chrome (`#050505`, capsule pills, neon glow) on work/story routes that use `.bb-home`.
