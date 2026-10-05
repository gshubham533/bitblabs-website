/**
 * Primary website action: a free 20-minute fit call.
 * The $2,000 session stays a separate TidyCal + PayPal flow, used after the call.
 * Override with NEXT_PUBLIC_FIT_CALL_URL, NEXT_PUBLIC_PAY_BOOK_URL,
 * NEXT_PUBLIC_TIDYCAL_BOOKING_URL, or TIDYCAL_BOOKING_URL.
 */
export const DEFAULT_FIT_CALL_URL =
  'https://tidycal.com/shubhamgupta/ai-workflow-fit-call'

export const DEFAULT_PAY_BOOK_URL =
  'https://tidycal.com/shubhamgupta/ai-workflow-strategy-session'

export const FIT_CALL_URL =
  process.env.NEXT_PUBLIC_FIT_CALL_URL || DEFAULT_FIT_CALL_URL

export const PAY_BOOK_URL =
  process.env.NEXT_PUBLIC_PAY_BOOK_URL ||
  process.env.NEXT_PUBLIC_TIDYCAL_BOOKING_URL ||
  process.env.TIDYCAL_BOOKING_URL ||
  DEFAULT_PAY_BOOK_URL

/** Primary booking href: the fit call. */
export const BOOK_HREF = FIT_CALL_URL
export const BOOK_NAV_LABEL = 'Book a fit call'
export const BOOK_CTA_LABEL = 'Book a 20-min fit call'
export const BOOK_PAY_CTA_LABEL = 'Already ready? Book and pay for the session'
export const BOOK_FINAL_CTA_LABEL = BOOK_CTA_LABEL
export const BOOK_OFFER_CTA_LABEL = BOOK_CTA_LABEL
export const PROJECTS_CTA_LABEL = 'Work'
export const HOW_IT_WORKS_HREF = '#how-it-works'
export const DELIVERABLES_HREF = '#offer'

/** Absolute hash links for use from inner routes (footer / inner nav). */
export const HOW_IT_WORKS_ABSOLUTE_HREF = '/#how-it-works'
export const OFFER_ABSOLUTE_HREF = '/#offer'
export const CASE_STUDY_ABSOLUTE_HREF = '/#case-study'
export const CASE_STUDIES_PATH = '/case-studies'

export const SITE_URL = 'https://bitblabs.com'
export const SITE_NAME = 'BitBlabs'
export const ORG_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`

export const LEGAL_NAME = 'BitB Labs LLP'

export const LEGAL_ADDRESS_LINES = [
  'Pune, Maharashtra, India',
] as const

export const LEGAL_ADDRESS = {
  addressLocality: 'Pune',
  addressRegion: 'Maharashtra',
  addressCountry: 'IN',
} as const

export const CONTACT_EMAIL = 'hey@bitblabs.com'
export const CONTACT_EMAIL_HREF = `mailto:${CONTACT_EMAIL}`

export const CONTACT_PHONE = '+917219605788'
export const CONTACT_PHONE_DISPLAY = '+91 72196 05788'

export const PRIVACY_PATH = '/privacy'
export const TERMS_PATH = '/terms'

/** Full work listing */
export const PORTFOLIO_SECTION_HREF = '/projects'
