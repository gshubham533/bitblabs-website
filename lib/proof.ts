/**
 * Customer proof for the homepage's results and quote sections, plus the rating line.
 *
 * Nothing renders in production unless `approved: true`. A section with no approved
 * entries is hidden entirely. In development, unapproved entries render with a visible
 * "Placeholder" label so the layout can be reviewed.
 *
 * To publish an entry: confirm the person approved the exact wording, name, role, and
 * image, then set `approved: true`.
 */

import { testimonials } from '@/lib/testimonials'

export const SHOW_PLACEHOLDERS = process.env.NODE_ENV !== 'production'

type Gated = { approved: boolean }

export type ResultCard = Gated & {
  id: string
  name: string
  role: string
  image: string
  /** Large figure, e.g. "35–45%". Omit for text-only cards. */
  figure?: string
  result: string
}

export type Quote = Gated & {
  id: string
  quote: string
  name: string
  role: string
  avatar?: string
  link?: string
}

export type Rating = Gated & { value: string; count: string }

export function visible<T extends Gated>(items: readonly T[]): T[] {
  return items.filter((item) => item.approved || SHOW_PLACEHOLDERS)
}

export const RESULT_CARDS: ResultCard[] = [
  {
    id: 'natsoft',
    name: 'Natsoft',
    role: 'Enterprise recruitment',
    image: '/images/redesign/tab-recruitment.webp',
    figure: '35–45%',
    result: 'Fewer manual recruitment follow-ups',
    approved: true,
  },
  {
    id: 'setoo',
    name: 'Setoo',
    role: 'Voice AI platform',
    image: '/images/redesign/tab-support.webp',
    result: 'One modular voice system, live across three client brands',
    approved: true,
  },
  {
    id: 'healthy-fasal',
    name: 'Healthy Fasal',
    role: 'Agri supply chain',
    image: '/images/redesign/strip-meeting.webp',
    result: 'Vendor wallets, collection centres, and onboarding kept in sync',
    approved: true,
  },
  {
    id: 'axion',
    name: 'Axion Plan',
    role: 'Financial forecasting',
    image: '/images/redesign/strip-reports.webp',
    result: 'Excel forecasting logic turned into a queryable product',
    approved: true,
  },
  {
    id: 'digipropass',
    name: 'DigiProPass',
    role: 'Product passports',
    image: '/images/redesign/tab-delivery.webp',
    result: 'From intro call to an MVP ready for pilot onboarding',
    approved: true,
  },
]

/** Client quotes from lib/testimonials.ts approved for the homepage quote wall. */
const HOMEPAGE_QUOTE_EXCLUDE = new Set(['natvoiz'])

export const QUOTES: Quote[] = testimonials
  .filter((t) => !HOMEPAGE_QUOTE_EXCLUDE.has(t.id))
  .map((t) => ({
    id: t.id,
    quote: t.quote,
    name: t.name,
    role: `${t.role}, ${t.company}`,
    approved: true,
  }))

export const RATING: Rating = { value: '5.0', count: '[N]', approved: false }
