import { CASE_STUDIES_PATH, PORTFOLIO_SECTION_HREF, PRIVACY_PATH, TERMS_PATH } from '@/lib/site'

export const NAV_LINKS = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Workflows', href: '/#workflows' },
  { label: 'Session', href: '/#session' },
  { label: 'Work', href: PORTFOLIO_SECTION_HREF },
] as const

export const PAGE_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: PORTFOLIO_SECTION_HREF },
  { label: 'Case studies', href: CASE_STUDIES_PATH },
  { label: 'FAQs', href: '/#faq' },
  { label: 'Brain stuff', href: '/brain-stuff' },
  { label: 'Side quests', href: '/side-quests' },
  { label: 'Privacy Policy', href: PRIVACY_PATH },
  { label: 'Terms', href: TERMS_PATH },
] as const
