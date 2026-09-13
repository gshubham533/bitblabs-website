import type { Metadata } from 'next'
import { StrategyThankYou } from '@/components/strategy/StrategyThankYou'

export const metadata: Metadata = {
  title: 'Application received',
  description: 'Your AI Workflow Strategy Session application has been received.',
  robots: { index: false, follow: false },
}

export default function StrategyAppliedPage() {
  return (
    <StrategyThankYou
      event="application_submitted"
      title="Application received"
      body="We will review the workflow and reply with next steps. If the session is suitable, you will receive the payment and scheduling link. If we need clarification, we may invite a short alignment call — not a free strategy session."
    />
  )
}
