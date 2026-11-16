import type { Metadata } from 'next'
import { LegalPageLayout } from '@/components/legal/LegalPageLayout'
import {
  CANCELLATION_LAST_UPDATED,
  cancellationIntro,
  cancellationSections,
} from '@/lib/legal/cancellation-refund'
import { CANCELLATION_PATH, LEGAL_NAME, SUPPORT_PATH, TERMS_PATH } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy',
  description: `How to cancel or reschedule a ${LEGAL_NAME} strategy session or implementation, what is refundable, and how to raise a grievance.`,
  alternates: { canonical: CANCELLATION_PATH },
  robots: { index: true, follow: true },
}

export default function CancellationPage() {
  return (
    <LegalPageLayout
      title="Cancellation & Refund Policy"
      lastUpdated={CANCELLATION_LAST_UPDATED}
      intro={cancellationIntro}
      sections={cancellationSections}
      relatedPage="terms"
      extraLinks={[
        { href: TERMS_PATH, label: 'Terms & Conditions' },
        { href: SUPPORT_PATH, label: 'Contact & support' },
      ]}
    />
  )
}
