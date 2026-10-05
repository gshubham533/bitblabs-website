# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Owners and operational leaders at growing service businesses with approximately 20–80 employees. They recognize that work gets stuck between people, inboxes, spreadsheets, and software, and want a practical plan rather than AI hype or a free consultation.

## Product Purpose

BitBlabs finds where work gets stuck, redesigns the workflow, and builds practical AI systems around it. The homepage’s primary conversion is a 20-minute fit call. The paid product remains a 90-minute AI Workflow Strategy Session ($2,000) that produces a usable roadmap, booked after the call if it is a fit. Implementation is optional and separate.

## Positioning

BitBlabs starts with the business process, not a preselected AI tool. The first paid step is a focused strategy session on one important workflow; the fee can be credited toward a BitBlabs implementation started within 30 days.

## Brand Commitments

- Legal name: BitB Labs LLP (branded as BitBlabs / BitBLabs)
- Primary CTA: Book a 20-min fit call
- Booking: fit call on TidyCal; the $2,000 session is a separate TidyCal + PayPal link after fit
- Session: 90 minutes, $2,000
- Implementation credit: $2,000 credited toward a BitBlabs build started within 30 days
- Do not invent client outcomes, metrics, logos, or testimonials
- Case study on the homepage remains anonymized unless explicitly approved
- Spelling and tone: calm, specific, operational; no AI buzzword stacking

## Evidence

- Confirmed founders: Shubham Gupta; Shlok Sawant (bios and LinkedIn in `lib/founders.ts`)
- Live booking URL configured in `lib/site.ts`
- Portfolio and project pages exist separately; homepage proof is qualitative and anonymized unless approved metrics are supplied
- Company email: hey@bitblabs.com (`CONTACT_EMAIL` in `lib/site.ts`)
- Newsletter: Kit, double opt-in, via `/api/subscribe` (`KIT_API_KEY` and `KIT_FORM_ID` env vars)

## Open Decisions

- Founder photography (omit until available)
- Exact deliverable turnaround SLA (do not claim 48 hours until confirmed)
- Client quotes, result cards, video stories, and rating: pre-wired in `lib/proof.ts` as `approved: false`; hidden in production until each entry is approved
