import { track } from '@vercel/analytics'

export type StrategyCtaKind = 'apply' | 'paid'

export type StrategyCtaLocation = 'hero' | 'nav' | 'mid' | 'final'

export function trackStrategyCtaClick(
  cta: StrategyCtaKind,
  location: StrategyCtaLocation
): void {
  track('strategy_cta_click', { cta, location })
}

export function trackStrategyConversion(
  event: 'application_submitted' | 'paid_session_booked'
): void {
  track('strategy_conversion', { event })
}
