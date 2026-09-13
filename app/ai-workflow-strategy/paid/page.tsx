import type { Metadata } from 'next'
import { StrategyThankYou } from '@/components/strategy/StrategyThankYou'

export const metadata: Metadata = {
  title: 'Strategy Session booked',
  description: 'Your AI Workflow Strategy Session booking is confirmed.',
  robots: { index: false, follow: false },
}

export default function StrategyPaidPage() {
  return (
    <StrategyThankYou
      event="paid_session_booked"
      title="Strategy Session booked"
      body="Check your email for payment confirmation and pre-session intake. Complete the assessment before the working session so we can leave you with a brief you can defend."
    />
  )
}
