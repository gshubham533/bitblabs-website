import type { Metadata } from 'next'
import { LegalPageLayout } from '@/components/legal/LegalPageLayout'
import {
  TERMS_LAST_UPDATED,
  termsIntro,
  termsSections,
} from '@/lib/legal/terms-and-conditions'
import { CANCELLATION_PATH, LEGAL_NAME, SUPPORT_PATH } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: `Terms and Conditions for ${LEGAL_NAME} (BitBlabs). Rules for using our website and services.`,
  alternates: { canonical: '/terms' },
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      lastUpdated={TERMS_LAST_UPDATED}
      intro={termsIntro}
      sections={termsSections}
      relatedPage="terms"
      extraLinks={[
        { href: CANCELLATION_PATH, label: 'Cancellation & Refund Policy' },
        { href: SUPPORT_PATH, label: 'Contact & support' },
      ]}
    />
  )
}
