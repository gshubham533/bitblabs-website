---
name: BitBlabs Habitline
description: Soft, rounded, photo-led product-marketing system adapted from the Habitline template. Warm orange brand accent on a light grey ground, pill navigation, glass cards over photography, laptop/dashboard mockups instead of phones.
colors:
  ground: "#f7f7f7"
  ink: "#18181b"
  body: "#52525b"
  muted: "#71717a"
  surface: "#ffffff"
  surface-soft: "#e4e4e7"
  orange: "#ff4c00"
  green: "#12a70a"
  blue: "#0022ff"
  pink: "#ff00a1"
  azure: "#0059ff"
  violet: "#9000ff"
  red: "#ff0000"
  teal: "#0283a7"
typography:
  headline:
    fontFamily: "Stack Sans Headline (self-hosted, --font-stack-headline)"
    fontWeight: 500-600
    lineHeight: 1.3
  body:
    fontFamily: "Google Sans Flex (--font-google-sans-flex)"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.5
rounded:
  card: "1.5rem"
  large-card: "2rem"
  button: "9999px"
spacing:
  container: "75rem"
  container-inline: "0.875rem / 1.25rem / 0"
---

# Design System: BitBlabs Habitline

**Surface boundary:** Every public route renders inside `PageShell` (`components/hl/PageShell.tsx`), which applies the `.hl` wrapper, the fixed pill header and the footer. Homepage sections live in `components/hl/home/`; copy lives in `lib/landing.ts`; gated proof lives in `lib/proof.ts`.

## Overview

A faithful adaptation of the Habitline template. Structure, spacing, motion and component shapes follow the template; only copy, imagery and branding changed. Phone mockups are replaced with `Laptop` and `AppWindow` frames (`components/hl/mockups.tsx`).

**Key characteristics:**
- Light grey ground `#f7f7f7`, white rounded cards, zinc text
- Warm orange `#ff4c00` is the brand accent (price, icons, focus ring)
- Full-bleed photographic hero with glass cards and a curved fade into the ground
- Soft clouds (`clouds.webp`) anchor the intro, offer and final CTA sections
- Every figure shown is a session fact ($2,000, 90 min, 5 deliverables, 30-day credit, 30/60/90 roadmap); dashboards are labelled "Example"

## Colors

Palette colours (`hl-green`, `hl-blue`, `hl-violet`, `hl-pink`, `hl-azure`, `hl-red`, `hl-teal`) are used only for small icon dots, status pills and stat units, mapped through `toneBg` / `toneText` in `components/hl/tokens.tsx`. Do not wash whole sections in a palette colour.

Legacy `--bb-*` variables used by case-study and project components are re-pointed to this palette inside `.hl` (`app/globals.css`).

## Typography

Headings use Stack Sans Headline. Inner-page h1 is `text-4xl md:text-5xl lg:text-[90px]` medium; section h2 is `text-3xl md:text-4xl lg:text-5xl`. Body is 1.125rem / 500 / zinc-600.

Tailwind colour keys must never collide with font-size keys (for example, a colour named `base` would turn every `text-base` into a colour).

## Layout

`.hl-container` is 75rem wide with 0.875rem / 1.25rem / 0 inline padding. Sections use generous vertical rhythm (`py-20 lg:py-40` is typical). The header is a fixed three-pill bar (logo, links with a Pages dropdown, actions) that tightens after 100px of scroll.

## Components

- **RollButton / BookRollButton** (`components/hl/ui.tsx`): rounded-full, label rolls up on hover; variants white, black, gray, glass. BookRollButton adds TidyCal UTM passthrough and analytics.
- **Eyebrow:** white pill with a zinc border above section headings.
- **Bento cards:** `rounded-3xl`, either grey, dark or photo-backed with glass overlays.
- **Marquees:** 40s and 65s linear loops, edge-masked; disabled under reduced motion.
- **FAQ:** white rounded rows, grid-rows accordion, contact card on the left.
- **FinalCta:** headline + buttons, laptop roadmap, QR code to the booking page.
- **ComingSoon:** pulsing badge, title, newsletter form, FinalCta.

## Proof gating

Proof sections (results, video stories, quote wall, rating) render only entries with `approved: true` in production. In development all entries show with a dashed "Placeholder · needs approval" tag. A section with no visible entries renders nothing.

## Do's and Don'ts

- **Do** keep the template's section order, shapes and motion.
- **Do** use real photography or clearly illustrative imagery; label example dashboards.
- **Don't** invent metrics, ratings, logos or testimonials.
- **Don't** reintroduce hairline editorial styling, square CTAs or the old `.bb-home` system.
