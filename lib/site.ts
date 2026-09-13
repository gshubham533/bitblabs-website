/** Legacy Calendly URL kept for legal-page references only. Not an LP CTA. */
export const BOOKING_URL = 'https://calendly.com/gshubham/discovery-call'

/** Cold-traffic primary path: apply form only. Never a naked calendar URL. */
export const APPLY_HREF = '/#apply'
export const APPLY_NAV_LABEL = 'Apply — $2,000'
export const APPLY_CTA_LABEL = 'Apply for the AI Strategy Session'
export const PROJECTS_CTA_LABEL = 'Work'

/**
 * Accepted-applicant destination only: pay $2,000 + book in one step (TidyCal + PayPal).
 * Override with NEXT_PUBLIC_PAY_BOOK_URL or NEXT_PUBLIC_TIDYCAL_BOOKING_URL.
 * Do not use as the homepage / nav primary CTA.
 */
export const DEFAULT_PAY_BOOK_URL =
  'https://tidycal.com/shubhamgupta/ai-workflow-strategy-session'

export const PAY_BOOK_URL =
  process.env.NEXT_PUBLIC_PAY_BOOK_URL ||
  process.env.NEXT_PUBLIC_TIDYCAL_BOOKING_URL ||
  DEFAULT_PAY_BOOK_URL

export const APPLY_WEBHOOK_URL =
  process.env.APPLY_WEBHOOK_URL ||
  (process.env.FORMSPREE_FORM_ID
    ? `https://formspree.io/f/${process.env.FORMSPREE_FORM_ID}`
    : '')

export const LEGAL_NAME = 'BitB Labs LLP'

export const LEGAL_ADDRESS_LINES = [
  'SR NO 45/4B H NO 236 NEAR SAMARTH SPORTS, CLUB CHANDAN NAGAR',
  'Pune, Pune City, Pune- 411014',
  'Maharashtra, India',
] as const

export const CONTACT_PHONE = '+918208901203'
export const CONTACT_PHONE_DISPLAY = '+91 82089 01203'

export const PRIVACY_PATH = '/privacy'
export const TERMS_PATH = '/terms'

/** Full work listing */
export const PORTFOLIO_SECTION_HREF = '/projects'
