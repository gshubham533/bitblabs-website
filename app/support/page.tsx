import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteShell } from '@/components/SiteShell';
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
} from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact & support',
  description: `Contact ${LEGAL_NAME}. ${LEGAL_ADDRESS_LINES.join(', ')}. Phone ${CONTACT_PHONE_DISPLAY}. Email ${CONTACT_EMAIL}.`,
  alternates: { canonical: SUPPORT_PATH },
  robots: { index: true, follow: true },
};

// Wording kept from the version reviewed for Stripe India verification.
export default function SupportPage() {
  return (
    <SiteShell>
      <article className="doc wrap">
        <header className="doc__head">
          <p className="eyebrow">
            <span className="eyebrow__slash">/</span> Support
          </p>
          <h1 className="display-lg">Contact us</h1>
          <p className="doc__lede">
            {LEGAL_NAME} is a limited liability partnership registered in India. It operates BitBlabs,
            an AI workflow consultancy. For a booking, a cancellation, or a refund, call or email the
            details below.
          </p>
        </header>

        <div className="legal">
          <address className="contact-card">
            <dl>
              <div>
                <dt>Business name</dt>
                <dd>{LEGAL_NAME}</dd>
              </div>
              <div>
                <dt>Registered address</dt>
                <dd>
                  {LEGAL_ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE_DISPLAY}</a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={CONTACT_EMAIL_HREF}>{CONTACT_EMAIL}</a>
                </dd>
              </div>
            </dl>
          </address>

          <section>
            <h2>How to reach support</h2>
            <div>
              <p>
                Call {CONTACT_PHONE_DISPLAY} or email {CONTACT_EMAIL}. We reply on business days. We do
                not publish set support hours or an after-hours line.
              </p>
              <p>
                Cancellations and refunds for the AI Workflow Strategy Session and for implementation
                work are in the <Link href={CANCELLATION_PATH}>Cancellation &amp; Refund Policy</Link>.
                Website rules are in the <Link href={TERMS_PATH}>Terms &amp; Conditions</Link>.
              </p>
            </div>
          </section>
        </div>
      </article>
    </SiteShell>
  );
}
