# BitBLabs website: devil's-advocate review

**Scope:** The current homepage at `localhost:3123`. I checked it at 1440 px, 1024 px and 390 px wide. The review covers design first, then copy, trust, accessibility, performance and conversion.
**Stance:** Deliberately hostile. Every point argues against the current choice. Where I think the current choice is still right, I say so in *What to keep*.
**Severity:** 🔴 hurts the business or trust · 🟠 visibly weakens the design · 🟡 polish.

---

## The verdict in five lines

1. **It is a recognizable copy of nk.studio.** Some of your clients will know that site, because they care about design. The headline under the neon scene reads "Craft, not templates.", so the page argues against itself.
2. **The visual identity is split in two.** The layout is austere Swiss minimalism. The imagery is Pixar-style 3D cartoons and a playful gradient logo. The two never agree.
3. **The proof is buried and the slogans lead.** "Products people remember." could belong to any agency. ₹1 crore a month, 2 s → 300 ms, and the café story are what make you hireable, and they sit in a 10 px ticker or a carousel.
4. **Things that block business are missing.** The rebuild dropped the support, cancellation, privacy and terms pages that Stripe India verification relied on. A recent edit also invents domains for two products.
5. **Craft is high, editorial judgment is low.** The motion and engineering are good. But everything moves, every section is centered, and the page is about 14.6 screens long.

---

## 1. Originality and positioning 🔴

| What it does | Devil's-advocate read |
|---|---|
| Section order, "Word. grey continuation." headlines, 200 px DM Sans centered, the slash motif, the reel shrinking into a headline slot, the giant sideways "Built with founders." headline, a footer pseudo-handle (`/bitblabs.call` copying nk's `/nk.news`) | Someone who has seen nk.studio will recognize it within two scrolls. A studio that sells craft is showing that it re-skins other studios. |
| "Craft, not templates." placed on top of a scene that copies nk's own WebGL slash scene | This is the single most damaging line on the page, because it invites the comparison. |
| The slash comes from nk; your logo happens to have one too | The coincidence is real, but you lean on it the way nk does (dot, slash, roll). It reads as borrowed, not owned. |

**Fix:** Keep the motion engine. It's good, and nobody owns easing curves. Change at least three signature moves:
- **Layout:** break the all-centered composition with an asymmetric grid.
- **Type:** use a more distinctive display face than DM Sans.
- **The reel:** replace the reel-into-headline-slot move with something only BitBLabs would do. For example, a real product flow playing inside the slot.

---

## 2. Visual identity 🟠

### 2.1 The imagery fights the layout
- **Where the cartoons appear:**
  - all three Insights cards
  - both "Built with founders" images
  - the Setoo work card
  - every Voices avatar
- **Why they clash:** these renders are cute and consumer-grade. The layout around them is minimal and premium, and the copy is about enterprise voice AI, EU compliance and investment banking.
- **What happens in practice:** the cartoon is the first image a visitor sees in three sections, and it sets the tone more than the type does.
- **Real people as cartoons:** Keshika, Harish, Dr. Steven and Zoheb are drawn as cartoons, which makes the testimonials feel less real. You have Keshika's real LinkedIn photo in `public/digi1.png`.
- **The choice:** either commit to the characters as a deliberate brand and warm up the layout around them, or drop them and use real UI, real photos and real artifacts. Mixing both is the worst option.

### 2.2 The brand color barely shows up
- The violet-to-cyan gradient appears as a 0.15 em dot, a 2 px underline, a slash glyph and the hero particles. Everything else is black, white and grey.
- Violet plus cyan on black is also the default "AI startup" palette of 2024–26. Without a second brand cue it reads as generic AI.
- Insights duotones everything violet, which hides the images instead of showing them.

### 2.3 Typography is competent but anonymous
- DM Sans 400/500/700 and nothing else. DM Sans is a free default; nk uses it too, which strengthens the "clone" impression.
- The "**Word.** *grey continuation*" pattern repeats in Work, Insights and Voices. By the third time it's a formula, not a voice.
- **Grey text on dark is too faint.** The grey continuation text on black (#545454, about 2.8:1) and the footer small copy fail even the large-text 3:1 threshold. See §7.

### 2.4 Composition and rhythm
- **Every section is centered.** Hero, Go deep, Build systems, Work title, Craft, Insights title, Voices and the people text all share one axis. With no asymmetry, nothing stands out.
- **Vertical padding of 150–220 px on top of 100 vh pins** makes the page about 13,100 px tall at 1440 × 900. That is about 14.6 screens for one page with six projects.
- **Big empty blacks:** at several scroll positions, "Build systems." is just a black band, because its heading only reveals at `top 90%`. Skimmers and anyone scrolling fast see a void.

---

## 3. Section by section

### Header 🟡
- **The nav disappears after 80 px of scroll** and becomes MENU, so reaching a section takes two clicks. That's fine for nk with 7+ pages, but you have one page with six anchors.
- **Nav labels don't match section names:**
  - "Impact" lands on "Go deep."
  - "Studio" lands on "Built with founders."
  - "Process" lands on "Craft, not templates."
- **The header has no background,** so on mobile it overlaps body copy and headings while scrolling (seen at 390 px).

### Hero 🟠
- **Generic slogan:** "Products people remember." makes no claim anyone could test. A sharper option: *"We turn what founders know into software that earns."*
- **The Three.js B behind the headline brands the page twice.** The logo is already top-left, so the hero now says "BitBLabs" twice and the product zero times.
- **The particles overlap letterforms,** which slightly lowers contrast on "Products" and "remember". On mobile they crowd the three-line headline.
- **Client logo strip:**
  - It has only 6 logos, so the marquee repeats its loop every few seconds.
  - Optical sizes are uneven: the Axion two-line wordmark and the Natsoft ellipse look heavier than the rest.
  - Natsoft's swoosh looks dated next to the others.
  - These are *your* products' logos presented as "clients", even though DigiProPass is the client's company and Natvoiz is your product for Natsoft. A sharp reader will wonder whose brands these are.

### Reel → "Go deep." 🟠
- **The product wall is mostly grey admin tables.** At a 34° tilt and 720 px source width they become texture, not proof.
- **The slot is too small to read.** Dashboards cycling at about 200 × 110 px are pure decoration.
- **"Go deep." is an odd phrase,** with unwanted connotations, and doesn't name the actual skill: learning a client's domain.
- **The pin costs 150% of a viewport in scroll** to deliver one idea. That's the second-biggest contributor to page length.

### Stats ticker 🔴 (the best proof, worst presentation)
- **Hard to read:** numbers in a moving marquee with 10 px uppercase labels. You can't read a number that's sliding away.
- **No attribution:** "1,000+ orders processed" and "₹1Cr+" belong to Healthy Fasal, and "35–45%" to Natsoft, but the ticker doesn't say so. Unattributed numbers look made up.
- **"6 products shipped" contradicts the Work section,** where Course Companion is tagged *In development*. That's five shipped.
- **"2–6 months per engagement" is not impact.** It's a terms-of-service detail sitting in the proof row.

### Build systems 🟠
- **Tech-logo marquees are a commodity signal.** Every agency lists React, AWS and Docker, and none of it differentiates you.
- **"A voice bot built for one client can run three organizations"** is your best systems claim, but it's sentence two of a centered paragraph.

### Work 🔴 / 🟠
- 🔴 **A recent edit fakes URLs.** `lib/content.ts` now gives Natvoiz the host `natvoiz.app` and Course Companion `coursecompanion.ai`. BITBLABS.md lists **no public URL** for either. Showing an invented domain in a browser bar is a trust bomb if anyone types it.
- 🔴 **Natvoiz links to natsoft.com.** Clicking "Natvoiz" lands on a consulting company's homepage with no mention of Natvoiz.
- 🟠 **Clicking a card takes visitors off-site to the client's live product,** and there are no case-study pages. You throw away the visitor at the moment of highest interest. nk sends you to a case study.
- 🟠 **The hover videos are stock B-roll:** hands on clothes, a farm drone, a stylus on a chart, a lecture hall. Hovering a product to see generic footage feels like filler and undercuts "real work".
- 🟠 **The tag taxonomy mixes three different things:**
  - product type: "Web platform", "AI product"
  - status: "In development"
  - proof: "Live revenue"
  - delivery format: "Backend / API"
  Pick one axis.
- 🟡 **The Setoo card is a cartoon among screenshots,** so the grid breaks its own rule.
- 🟡 **Cards look clickable but aren't consistently:** Course Companion and Setoo have the same hover effect but no link.

### Craft, not templates 🟠
- **The neon slash is CSS faking WebGL,** placed beside a reference that does it in real 3D. It invites an unfavorable comparison.
- **Phase descriptions are hard to read:** 14 px grey (#aaa) on a starfield.

### Insights 🔴
- **One real article and two "Coming soon" cards** signal an abandoned blog. "Coming soon" on a homepage is a liability, not a teaser.
- **The cards aren't links,** not even the real case study. Even the one thing people would click goes nowhere.
- **Cartoon images, duotoned violet.** See §2.1.
- **Fix:** remove the section until three real posts exist, or replace it with one featured long-form case study that links to a page.

### Voices 🔴
- **Only 2 of 6 slides are testimonials, and both come from the same person.** The other four are "How it started" stories *you wrote* in the third person, sitting inside a testimonial carousel. The labels are honest, but the format implies more social proof than exists.
- **The quotes praise individuals ("on Shubham", "on Shlok"), not the studio.** That exposes freelancer reality against "studio" positioning. That's fine if you own it ("two founders, hands-on"), but it's a contradiction right now.
- **The carousel auto-advances every 7 s,** pausing only on mouse hover, with no keyboard or touch pause (WCAG 2.2.2).
- **Inactive logos at 28% opacity with blur** and inactive avatars at 50% are barely visible. The row reads as empty.

### Built with founders 🟠
- **"Studio" in the nav promises information about the studio, and there is none:** no names, no faces, no location, no team size, no years.
- **The images are cartoons with name tags.** One shows "Shubham", "Shlok" and a third name. The visitor can't tell who works at BitBLabs and who is a client.
- **The giant sideways headline is the most nk-specific move on the page.**

### Footer 🔴
- **Missing pages:** the rebuild deleted `/support`, `/cancellation`, `/privacy` and `/terms`. The last commit before the rebuild says they were added "so Stripe India can verify BitB Labs LLP". The footer still prints the legal entity but links to none of them.
- **Missing contact details:** no email, phone or social profiles. The only contact path is a third-party booking page.
- **`/bitblabs.call` is a fake handle** with no meaning outside the nk reference.
- **Repetition:** "Products people remember." appears again, as the hero headline and the footer lead.

---

## 4. Motion 🟠

- **Motion budget is saturated.** Every heading, paragraph, card, logo row, stat, avatar and image animates. When everything moves, nothing is special, and the page feels slower to read than it is.
- **Content is invisible until revealed.** Fast scrollers, screenshot tools and link-preview crawlers see empty sections (the empty black band in §2.4). There's a 4 s fail-safe, but reveal-on-scroll still costs comprehension.
- **Smooth scrolling (Lenis) plus a 150% pin changes how scrolling feels.** Trackpad users usually tolerate it; mouse-wheel and keyboard users often dislike it.
- **Moving things run at once:** three marquees, the drifting wall, the hero particles, the starfield and the carousel.

**Keep:** the line-reveal easing, the hover roll, the reel morph mechanics. **Cut:** paragraph line-splits (just fade them), the stats marquee, the tech marquee, the Voices auto-advance.

---

## 5. Copy and trust

| Issue | Severity |
|---|---|
| Invented hosts `natvoiz.app`, `coursecompanion.ai` in the work cards | 🔴 |
| "6 products shipped" against the "In development" tag | 🔴 |
| Natvoiz card links to natsoft.com | 🔴 |
| Unattributed stats in the ticker | 🟠 |
| Name spelled "Keshika" (LinkedIn) vs "Keishika" (BITBLABS.md) | 🟠 |
| Five different labels for one action: Let's talk / Discuss your product / Book a project discussion / Book a call / Book a 20-min fit call | 🟡 |
| "Studio" positioning while testimonials name individual people | 🟡 |

---

## 6. Conversion

- **Prospects can't qualify themselves.** There's no "who we work with", no starting budget or price band, and no engagement shapes (nk has "Programs"). The 2–6 months and four phases are buried in footer small print.
- **Only one call to action exists, and it leaves the site** (TidyCal). There's no lightweight path such as an email address, short form or "send a brief".
- **No case-study depth.** Every route either leaves the site or dead-ends.
- **No social proof near the CTA.** The booking prompt at the bottom of "Built with founders" sits next to cartoon art, not a result.

---

## 7. Accessibility

Contrast ratios are for normal text unless noted:

| Element | Colors | Ratio | Result |
|---|---|---|---|
| Grey heading continuations on black | #545454 / #000 | ~2.8 : 1 | ❌ fails even large-text 3:1 |
| Footer small copy | #545454 / #000 | ~2.8 : 1 | ❌ |
| Voices "How it started" label, 10 px | #929292 / #f5f5f5 | ~2.9 : 1 | ❌ and too small |
| Grey heading continuations on light | #929292 / #f5f5f5 | ~2.9 : 1 | ⚠️ large text only, borderline |
| Card industry text | #737373 / #000 | ~4.4 : 1 | ⚠️ just under 4.5 |

- **10 px text:** stat labels, tags and the voice label. Below any sensible minimum.
- **Moving content with no pause control:** three marquees, the wall and the carousel (WCAG 2.2.2).
- **Cards that look interactive but aren't** (Insights, two Work cards). This confuses keyboard and screen-reader users.
- **Content hidden until a scroll trigger.** Assistive technology reads it fine, but zoomed-in users can hit "blank" screens.

---

## 8. Performance 🔴

| Asset | Size | Note |
|---|---|---|
| `setu-cafe.png` | **3.2 MB** | Used twice (Setoo card and people section), displayed at ≤ 640 px |
| `nv-planning.png` | 2.1 MB | Insights card, displayed at about 450 px |
| `axion-meeting.png` | 1.9 MB | People section |
| `cs-hiring-overwhelmed.png` | 0.75 MB | Insights card |
| `previews/healthy-fasal-landing.png` | 0.75 MB | Newly added work preview |
| `videos/hover-healthy-fasal.mp4` | 1.3 MB | Stock footage on hover |

- **Images:** about 10 MB on a full scroll. None of them use `next/image`, and none are converted to WebP/AVIF or sized responsively. 149 `<img>` tags have no width/height.
- **JavaScript is fine:** production first-load is 170 kB, and Three.js loads lazily.
- **The images are the problem.** Re-encoding the six assets above would cut the transfer by about 85% in an afternoon.

---

## 9. What to keep (the fair part)

- **The motion engine.** Easing, durations and reveal choreography are genuinely high quality and cleanly built (`components/Motion.tsx`).
- **The hover roll and the header behavior** after the latest fixes.
- **The Work section concept.** Real products with real outcome lines are the strongest part of the page.
- **The product wall idea.** Showing real UI instead of stock footage is the right instinct; it just needs better screens (see §3).
- **Content honesty in `lib/content.ts`:** stories are labelled, and DigiProPass's inflated "10,000+ products" figure from BITBLABS.md is left out. Protect this. The recent host edit breaks it.

---

## 10. Prioritized fix list

| # | Fix | Severity | Effort |
|---|---|---|---|
| 1 | Restore `/support`, `/cancellation`, `/privacy`, `/terms` (they're in git history) and link them in the footer | 🔴 | S |
| 2 | Remove the invented hosts `natvoiz.app` and `coursecompanion.ai`; show no URL bar, or "Private deployment" | 🔴 | S |
| 3 | Fix "6 products shipped" to 5, or drop it; attribute every stat to its product | 🔴 | S |
| 4 | Re-encode the heavy PNGs to WebP/AVIF at display size, or switch to `next/image` | 🔴 | S |
| 5 | Turn the stats ticker into a static, attributed grid with large numbers | 🔴 | S |
| 6 | Remove the Insights section until there are 3 real posts; link the one case study | 🔴 | S |
| 7 | Decide on the cartoon characters: own them as the brand or replace them with real photos and UI. Use Keshika's real photo either way | 🟠 | M |
| 8 | Break the nk silhouette: asymmetric layouts in 2–3 sections, a distinct display face, and drop the giant sideways headline or the `/bitblabs.call` handle | 🟠 | M |
| 9 | Add 2–3 real case-study pages and point the Work cards there, not to client sites | 🟠 | L |
| 10 | Add a Studio block (two founders, real faces, remote and worldwide, how you work) and an email address | 🟠 | S |
| 11 | Fix the contrast failures and the 10 px text in §7 | 🟠 | S |
| 12 | Cut the motion budget: no paragraph splits, no tech marquee, carousel advances only on interaction | 🟡 | S |
| 13 | Use one booking label site-wide | 🟡 | S |
| 14 | Swap the stock hover videos for screen recordings of the real products, or remove hover video | 🟡 | M |
| 15 | Reconsider the headline: lead with a specific, testable promise | 🟡 | S |

---

## 11. Resolution log (Nov 18, 2026)

| # | Status | What changed |
|---|---|---|
| 1 | ✅ Done | `/support`, `/cancellation`, `/privacy` and `/terms` restored from git. The legal text in `lib/legal/` and the support wording are unchanged; only the page layout is new. All four are linked in the footer. |
| 2 | ✅ Done | Invented hosts removed. Browser bars show only real domains (digipropass.com, healthyfasal.com, axionplan.com). The Natvoiz card no longer links to natsoft.com. |
| 3 | ✅ Done | "5 products shipped, one in development". Every stat names its product. "2–6 months" moved out of the proof row. |
| 4 | ✅ Done | Homepage images went from ~10 MB to ~0.6 MB on a full scroll. Product screens are re-encoded WebP in `public/media/`, and cartoon PNGs are no longer loaded. |
| 5 | ✅ Done | The stats ticker is now a static, attributed 2×3 grid ("Proof, not promises."). |
| 6 | ✅ Done | The Insights grid is removed. One featured card links to the new `/insights/high-volume-hiring` article. |
| 7 | ✅ Done (direction: drop) | Cartoons removed from the homepage. Voices uses Keshika's real photo. The Setoo card shows its real STT → LLM → TTS pipeline. |
| 8 | ✅ Done | Display face is now Stack Sans Headline (the studio's earlier font). Hero, Impact, Systems, Process and Studio use asymmetric split layouts. The sideways giant headline, the `/bitblabs.call` handle, the neon slash scene and "Craft, not templates." are gone. |
| 9 | ✅ Done | Six case-study pages at `/work/[slug]`, written from BITBLABS.md. Work cards link there; live sites are linked from inside each case study. |
| 10 | ⚠️ Partly | Studio block added: who it's for, engagement terms, and email, phone and Pune location from `lib/site.ts`. Still missing: **founder photos and names/roles**. None exist in the repo, and none were invented. |
| 11 | ✅ Done | New AA-safe greys (`--muted-light` #626262, `--muted-dark` #8f8f8f). No text under 12 px. |
| 12 | ✅ Done | Paragraphs fade instead of line-splitting. The tech marquee, logo marquee, stats marquee and auto-advancing carousel are all removed. |
| 13 | ✅ Done | One label everywhere: **Book a call** (`BOOK_LABEL` in `lib/content.ts`). |
| 14 | ✅ Done (removed) | Stock hover videos deleted. Add real screen recordings later if you have them. |
| 15 | ✅ Done | Headline is now "Expertise, shipped.", with a lede that leads with ₹1 crore/month and ~300 ms. |

Also fixed from sections 3 and 7:
- **Nav:** stays visible on desktop, and each label matches its section's eyebrow (Work, Approach, Impact, Process, Voices, Studio).
- **Header:** gains a translucent bar on scroll, so text no longer collides on mobile.
- **Hero:** the 3D mark sits in its own column, not behind the headline.
- **Reel:** the pin is shortened from 150% to 100%.
- **Page length:** 13,142 → 11,286 px.

**Still needs a decision from you:**
- **Founder photos and roles** for the Studio block.
- **A price band or starting budget,** if you want prospects to qualify themselves.
- **Stripe products vs. the site:** the restored legal pages describe an "AI Workflow Strategy Session". The homepage no longer sells it, so check this matches what Stripe charges for.
- **Name spelling:** "Keshika" (LinkedIn) vs "Keishika" (BITBLABS.md). The site uses Keshika.
- **Unused files** in `public/` (the cartoon PNGs, `previews/*.png`) still ship in the repo. Delete them if you're not keeping them.
