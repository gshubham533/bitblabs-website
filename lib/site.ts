/**
 * Launch v1 primary conversion: TidyCal (slot + questions + PayPal $2,000) in one flow.
 * Override with NEXT_PUBLIC_PAY_BOOK_URL, NEXT_PUBLIC_TIDYCAL_BOOKING_URL, or TIDYCAL_BOOKING_URL.
 */
export const DEFAULT_PAY_BOOK_URL =
  'https://tidycal.com/shubhamgupta/ai-workflow-strategy-session'

export const PAY_BOOK_URL =
  process.env.NEXT_PUBLIC_PAY_BOOK_URL ||
  process.env.NEXT_PUBLIC_TIDYCAL_BOOKING_URL ||
  process.env.TIDYCAL_BOOKING_URL ||
  DEFAULT_PAY_BOOK_URL

export const BOOK_HREF = PAY_BOOK_URL
export const BOOK_NAV_LABEL = 'Book · $2,000'
export const BOOK_CTA_LABEL = 'Book Your Strategy Session'
export const BOOK_FINAL_CTA_LABEL = 'Book Your AI Workflow Strategy Session'
export const BOOK_OFFER_CTA_LABEL = 'Book the Strategy Session'
export const PROJECTS_CTA_LABEL = 'Work'
export const HOW_IT_WORKS_HREF = '#how-it-works'
export const DELIVERABLES_HREF = '#offer'

/** Absolute hash links for use from inner routes (footer / inner nav). */
export const HOW_IT_WORKS_ABSOLUTE_HREF = '/#how-it-works'
export const OFFER_ABSOLUTE_HREF = '/#offer'
export const CASE_STUDY_ABSOLUTE_HREF = '/#case-study'
export const CASE_STUDIES_PATH = '/case-studies'

export const LEGAL_NAME = 'BitB Labs LLP'

export const LEGAL_ADDRESS_LINES = [
  'Pune, Maharashtra, India',
] as const

export const CONTACT_PHONE = '+917219605788'
export const CONTACT_PHONE_DISPLAY = '+91 72196 05788'

export const PRIVACY_PATH = '/privacy'
export const TERMS_PATH = '/terms'

/** Full work listing */
export const PORTFOLIO_SECTION_HREF = '/projects'
