import Link from 'next/link'
import {
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  LEGAL_ADDRESS_LINES,
  LEGAL_NAME,
  PAY_BOOK_URL,
  PRIVACY_PATH,
} from '@/lib/site'
import type { LegalSection } from '@/lib/legal/types'

export const TERMS_LAST_UPDATED = 'September 15, 2026'

export const termsIntro = (
  <>
    These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the BitBlabs
    website operated by {LEGAL_NAME} (&ldquo;BitBlabs&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
    &ldquo;our&rdquo;). By accessing or using this website, you agree to be bound by these Terms. If
    you do not agree, you must not use the website. Our{' '}
    <Link href={PRIVACY_PATH} className="font-medium text-[var(--bb-brand)] transition-colors hover:text-[var(--bb-brand-dark)]">
      Privacy Policy
    </Link>{' '}
    explains how we handle personal information.
  </>
)

export const termsSections: LegalSection[] = [
  {
    title: '1. About us',
    body: (
      <>
        <p>
          BitBlabs helps growing service businesses find where work gets stuck, redesign that
          workflow, and optionally build practical AI systems around it. This website is operated by{' '}
          {LEGAL_NAME}, a limited liability partnership registered in India.
        </p>
        <address className="not-italic space-y-1 text-[var(--bb-ink-muted)]">
          <p>{LEGAL_NAME}</p>
          {LEGAL_ADDRESS_LINES.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </address>
      </>
    ),
  },
  {
    title: '2. Acceptance of terms',
    body: (
      <p>
        By visiting this website, booking, or paying for an AI Workflow Strategy Session, you
        confirm that you have read, understood, and agree to these Terms and our Privacy Policy. If
        you are using the website or booking on behalf of an organization, you represent that you
        have authority to bind that organization.
      </p>
    ),
  },
  {
    title: '3. Website use',
    body: (
      <>
        <p>You agree to use this website only for lawful purposes. You must not:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Violate any applicable law or regulation</li>
          <li>Attempt to gain unauthorized access to our systems or data</li>
          <li>Interfere with the proper functioning or security of the website</li>
          <li>Scrape, copy, or harvest content or data without our prior written consent</li>
          <li>Use the website to transmit malware, spam, or harmful code</li>
          <li>Misrepresent your identity or affiliation</li>
        </ul>
        <p>We may suspend or restrict access if we reasonably believe these Terms have been violated.</p>
      </>
    ),
  },
  {
    title: '4. Services and engagements',
    body: (
      <>
        <p>
          Information on this website, including portfolio work, case studies, and descriptions of
          capabilities, is provided for general information only. It does not constitute a binding
          offer, quote, or commitment to deliver specific implementation services.
        </p>
        <p>
          The primary paid offering on this website is the{' '}
          <strong className="font-medium text-[var(--bb-ink)]">AI Workflow Strategy Session</strong>: a
          90-minute working session priced at <strong className="font-medium text-[var(--bb-ink)]">$2,000</strong>{' '}
          (USD). The fee covers the session and roadmap deliverables. Implementation is not
          included and is scoped separately if you want BitBlabs to build. If you start a BitBlabs
          implementation within 30 days of the session, your $2,000 session fee is credited toward
          that project.
        </p>
        <p>
          You book and pay for the session through{' '}
          <a
            href={PAY_BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--bb-brand)] transition-colors hover:text-[var(--bb-brand-dark)]"
          >
            TidyCal
          </a>
          , with payment processed by PayPal. Completing that booking creates a paid engagement for
          the strategy session only. Any later implementation requires a separate written agreement,
          statement of work, or contract that defines scope, deliverables, timelines, fees, and
          other commercial terms. In the event of any conflict between these Terms and a signed
          client agreement, the signed agreement will prevail for that engagement.
        </p>
      </>
    ),
  },
  {
    title: '5. Payment, refunds, and rescheduling',
    body: (
      <>
        <p>
          The AI Workflow Strategy Session fee is non-refundable except where a refund is required
          by applicable law.
        </p>
        <p>
          Rescheduling is handled through TidyCal using the tools and policies available for your
          booking.
        </p>
      </>
    ),
  },
  {
    title: '6. Intellectual property',
    body: (
      <>
        <p>
          Unless otherwise stated, all content on this website, including text, graphics, logos,
          images, layouts, and design elements, is owned by or licensed to {LEGAL_NAME} and is
          protected by applicable intellectual property laws.
        </p>
        <p>
          You may view and print pages for personal, non-commercial reference. You may not reproduce,
          distribute, modify, create derivative works from, publicly display, or commercially exploit
          any website content without our prior written permission.
        </p>
        <p>
          Client work shown in our portfolio remains subject to the intellectual property arrangements
          agreed with each client. Display on this site does not transfer ownership of client
          materials to visitors.
        </p>
      </>
    ),
  },
  {
    title: '7. Third-party links and tools',
    body: (
      <p>
        This website may contain links to third-party websites, tools, or services, including
        TidyCal, PayPal, and LinkedIn. We do not control and are not responsible for the content,
        policies, or practices of third parties. Your use of third-party services is at your own
        risk and subject to their terms and privacy policies.
      </p>
    ),
  },
  {
    title: '8. Disclaimers',
    body: (
      <>
        <p>
          This website and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; basis without warranties of any kind, whether express or implied,
          including warranties of merchantability, fitness for a particular purpose, accuracy, or
          non-infringement.
        </p>
        <p>
          We do not warrant that the website will be uninterrupted, error-free, or free of harmful
          components. Any reliance on information on this website is at your own discretion.
        </p>
      </>
    ),
  },
  {
    title: '9. Limitation of liability',
    body: (
      <p>
        To the maximum extent permitted by applicable law, {LEGAL_NAME}, its partners, employees, and
        affiliates shall not be liable for any indirect, incidental, special, consequential, or
        punitive damages, or any loss of profits, revenue, data, or goodwill, arising out of or
        related to your use of or inability to use this website, even if we have been advised of the
        possibility of such damages. Our total liability for any claim arising from your use of the
        website shall not exceed INR 10,000 or the amount you paid us directly for services in the
        twelve months preceding the claim, whichever is greater, except where liability cannot be
        limited under applicable law. Paid strategy sessions and implementation engagements remain
        governed by these Terms and any later signed statement of work; where a signed agreement
        applies, that agreement prevails for that engagement.
      </p>
    ),
  },
  {
    title: '10. Indemnification',
    body: (
      <p>
        You agree to indemnify and hold harmless {LEGAL_NAME} and its partners, employees, and
        affiliates from any claims, damages, losses, liabilities, and expenses (including reasonable
        legal fees) arising from your misuse of the website, violation of these Terms, or
        infringement of any third-party rights.
      </p>
    ),
  },
  {
    title: '11. Governing law and jurisdiction',
    body: (
      <p>
        These Terms are governed by the laws of India. Any dispute arising out of or relating to
        these Terms or your use of the website shall be subject to the exclusive jurisdiction of the
        courts at Pune, Maharashtra, India, unless otherwise required by mandatory applicable law.
      </p>
    ),
  },
  {
    title: '12. Changes to these terms',
    body: (
      <p>
        We may revise these Terms at any time by posting an updated version on this page. The
        &ldquo;Last updated&rdquo; date indicates when changes were last made. Your continued use of
        the website after updated Terms are posted constitutes acceptance of the revised Terms.
      </p>
    ),
  },
  {
    title: '13. Contact us',
    body: (
      <>
        <p>For questions about these Terms, contact {LEGAL_NAME}:</p>
        <address className="not-italic space-y-1 text-[var(--bb-ink-muted)]">
          <p>{LEGAL_NAME}</p>
          {LEGAL_ADDRESS_LINES.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p>
            Phone:{' '}
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="font-medium text-[var(--bb-brand)] transition-colors hover:text-[var(--bb-brand-dark)]"
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
          </p>
        </address>
      </>
    ),
  },
]
