import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { STRATEGY_APPLIED_PATH } from '@/lib/site'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function StrategyBookedRedirect() {
  redirect(STRATEGY_APPLIED_PATH)
}
