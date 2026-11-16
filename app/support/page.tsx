import type { Metadata } from 'next'
import Link from 'next/link'
import { FinalCta } from '@/components/hl/FinalCta'
import { PageShell } from '@/components/hl/PageShell'
import {
  CANCELLATION_PATH,
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  LEGAL_ADDRESS_LINES,
  LEGAL_NAME,
  SUPPORT_PATH,
  TERMS_PATH,
} from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact & support',
  description: `Contact ${LEGAL_NAME}. ${LEGAL_ADDRESS_LINES.join(', ')}. Phone ${CONTACT_PHONE_DISPLAY}. Email ${CONTACT_EMAIL}.`,
  alternates: { canonical: SUPPORT_PATH },
  robots: { index: true, follow: true },
}

const linkClass =
  'font-medium text-[var(--bb-brand)] underline-offset-4 transition-colors hover:text-[var(--bb-brand-dark)] hover:underline'

export default function SupportPage() {
  return (
    <PageShell>
      <section className="pb-16 pt-32 md:pt-40 lg:pb-24 lg:pt-44">
        <div className="hl-container">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-medium tracking-tight text-zinc-900 md:text-5xl">Contact us</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg">
              {LEGAL_NAME} is a limited liability partnership registered in India. It operates
              BitBlabs, an AI workflow consultancy. For a booking, a cancellation, or a refund, call
              or email the details below.
            </p>

            <address className="mt-8 rounded-3xl border border-zinc-200 bg-white p-6 not-italic md:p-8">
              <dl className="space-y-6">
                <div>
                  <dt className="text-sm font-medium text-zinc-900">Business name</dt>
                  <dd className="mt-1 text-lg text-zinc-800">{LEGAL_NAME}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-zinc-900">Registered address</dt>
                  <dd className="mt-1 text-lg text-zinc-800">
                    {LEGAL_ADDRESS_LINES.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-zinc-900">Phone</dt>
                  <dd className="mt-1 text-lg">
                    <a href={`tel:${CONTACT_PHONE}`} className={linkClass}>
                      {CONTACT_PHONE_DISPLAY}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-zinc-900">Email</dt>
                  <dd className="mt-1 text-lg">
                    <a href={CONTACT_EMAIL_HREF} className={linkClass}>
                      {CONTACT_EMAIL}
                    </a>
                  </dd>
                </div>
              </dl>
            </address>

            <div className="mt-10 space-y-4 text-base leading-relaxed text-zinc-600 md:text-lg">
              <h2 className="text-xl font-medium text-zinc-900 md:text-2xl">How to reach support</h2>
              <p>
                Call {CONTACT_PHONE_DISPLAY} or email {CONTACT_EMAIL}. We reply on business days. We
                do not publish set support hours or an after-hours line.
              </p>
              <p>
                Cancellations and refunds for the AI Workflow Strategy Session and for implementation
                work are in the{' '}
                <Link href={CANCELLATION_PATH} className={linkClass}>
                  Cancellation &amp; Refund Policy
                </Link>
                . Website rules are in the{' '}
                <Link href={TERMS_PATH} className={linkClass}>
                  Terms &amp; Conditions
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <FinalCta />
    </PageShell>
  )
}
