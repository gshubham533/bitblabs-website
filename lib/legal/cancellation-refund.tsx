import Link from 'next/link'
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  LEGAL_ADDRESS_LINES,
  LEGAL_NAME,
  PAY_BOOK_URL,
  SUPPORT_PATH,
  TERMS_PATH,
} from '@/lib/site'
import type { LegalSection } from '@/lib/legal/types'

export const CANCELLATION_LAST_UPDATED = 'November 17, 2026'

const contactLinkClass =
  'font-medium text-[var(--bb-brand)] transition-colors hover:text-[var(--bb-brand-dark)]'

function ContactBlock() {
  return (
    <address className="not-italic space-y-1 text-[var(--bb-ink-muted)]">
      <p>{LEGAL_NAME}</p>
      {LEGAL_ADDRESS_LINES.map((line) => (
        <p key={line}>{line}</p>
      ))}
      <p>
        Email:{' '}
        <a href={CONTACT_EMAIL_HREF} className={contactLinkClass}>
          {CONTACT_EMAIL}
        </a>
      </p>
      <p>
        Phone:{' '}
        <a href={`tel:${CONTACT_PHONE}`} className={contactLinkClass}>
          {CONTACT_PHONE_DISPLAY}
        </a>
      </p>
    </address>
  )
}

export const cancellationIntro = (
  <>
    This Cancellation &amp; Refund Policy explains how to cancel, reschedule, or ask for a refund
    from {LEGAL_NAME} (&ldquo;BitBlabs&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). It covers the free
    fit call, the paid AI Workflow Strategy Session, and implementation work we agree in writing. It
    is part of our{' '}
    <Link href={TERMS_PATH} className={contactLinkClass}>
      Terms &amp; Conditions
    </Link>
    . Questions go to the contacts on our{' '}
    <Link href={SUPPORT_PATH} className={contactLinkClass}>
      support page
    </Link>
    .
  </>
)

export const cancellationSections: LegalSection[] = [
  {
    title: '1. What you can buy',
    body: (
      <>
        <p>BitBlabs sells professional services, not a software subscription.</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium text-[var(--bb-ink)]">20-minute fit call.</strong> Free. It
            checks whether a paid session is the right next step. It does not produce a roadmap.
          </li>
          <li>
            <strong className="font-medium text-[var(--bb-ink)]">AI Workflow Strategy Session.</strong>{' '}
            90 minutes, priced at $2,000 (USD). You book and pay before the session. The fee covers
            the working session and the blueprint from that session. It does not include building the
            workflow.
          </li>
          <li>
            <strong className="font-medium text-[var(--bb-ink)]">Implementation.</strong> Optional, and
            scoped in a separate statement of work. If you start a BitBlabs implementation within 30
            days of the strategy session, the $2,000 session fee is credited toward that project. The
            credit is not a cash refund.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '2. How to cancel or reschedule',
    body: (
      <>
        <p>
          Email{' '}
          <a href={CONTACT_EMAIL_HREF} className={contactLinkClass}>
            {CONTACT_EMAIL}
          </a>{' '}
          or call{' '}
          <a href={`tel:${CONTACT_PHONE}`} className={contactLinkClass}>
            {CONTACT_PHONE_DISPLAY}
          </a>
          . Include your name, the email on the booking, the session or project date, and whether you
          want to cancel or move the time. For a paid booking, also include the amount and the
          payment reference.
        </p>
        <p>
          You can also cancel or move a fit call or strategy session from the link in your booking
          confirmation when that option is shown. Strategy sessions are booked on{' '}
          <a href={PAY_BOOK_URL} target="_blank" rel="noopener noreferrer" className={contactLinkClass}>
            TidyCal
          </a>
          . A message to us is enough if the booking page no longer offers a cancel button.
        </p>
        <p>
          To cancel an implementation, use the notice clause in the signed statement of work. If that
          agreement has no notice clause, email us before we start the work you want to stop, and we
          will confirm what can be cancelled.
        </p>
      </>
    ),
  },
  {
    title: '3. Fit call',
    body: (
      <p>
        The fit call is free. Cancel or reschedule it at any time before it starts. There is nothing
        to refund.
      </p>
    ),
  },
  {
    title: '4. Strategy session: when we refund',
    body: (
      <>
        <p>We refund the $2,000 session fee in full when any of these is true:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            You cancel at least 7 days before the scheduled start, and we have not delivered the
            session.
          </li>
          <li>We cancel the session and you do not want another time.</li>
          <li>We charge you twice, or we take a payment in error. We refund the extra or mistaken amount.</li>
          <li>
            We do not deliver the session. If we held the session, the fee is earned. The blueprint
            is part of that delivery.
          </li>
          <li>
            The Consumer Protection Act, 2019, or another mandatory Indian law, requires a refund.
          </li>
        </ul>
        <p>
          Ask at least 48 hours before the start and we will move the session once, at no charge, to
          another open slot. A reschedule is not a refund. If we cannot offer a new slot within 30
          days of your request, you may take a full refund instead.
        </p>
      </>
    ),
  },
  {
    title: '5. Strategy session: when we do not refund',
    body: (
      <>
        <p>We do not refund the session fee when:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>You cancel less than 7 days before the scheduled start.</li>
          <li>You do not attend, or you attend and then change your mind.</li>
          <li>
            You want the $2,000 back in cash after the session because you did not start an
            implementation. The 30-day implementation credit applies only if a BitBlabs build starts
            within 30 days. If it does not, the credit ends. The session fee stays earned.
          </li>
        </ul>
        <p>
          Inside the 7-day window you may still ask to reschedule, under the 48-hour rule in section
          4. Missing that window, or missing the session, does not create a refund.
        </p>
      </>
    ),
  },
  {
    title: '6. Implementation fees',
    body: (
      <>
        <p>
          Implementation fees, milestones, and notice periods are those in the signed statement of
          work. Where that agreement and this policy differ, the signed agreement applies to that
          project.
        </p>
        <p>Unless the statement of work says otherwise:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Work we have already done is not refunded.</li>
          <li>Third-party costs we have already paid for the project are not refunded.</li>
          <li>
            Fees for work we have not started are refunded if you cancel before that work begins.
          </li>
          <li>
            A session fee already credited to a project that has started stays on that project. It is
            not returned as cash.
          </li>
        </ul>
        <p>We do not take an implementation fee before there is a written scope.</p>
      </>
    ),
  },
  {
    title: '7. How a refund is paid, and how long it takes',
    body: (
      <>
        <p>Send a refund request by email or phone, using the details in section 2.</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>We acknowledge the request within 48 hours of receiving it.</li>
          <li>We confirm a straightforward strategy-session refund within 7 business days.</li>
          <li>
            After we approve a refund, we submit it within 7 business days to the original payment
            method. Strategy session payments are taken at checkout on the booking (currently PayPal
            via TidyCal). We do not send cash.
          </li>
          <li>
            PayPal, your card issuer, or your bank may take additional time to show the credit. The
            refund is in the same currency as the charge.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '8. Chargebacks',
    body: (
      <p>
        Contact us before you dispute a charge with PayPal or your bank. We will look up the booking
        and apply this policy. If a chargeback is opened, we share the booking record, whether the
        session was delivered, and this policy with the payment provider. A chargeback does not
        replace the request process above.
      </p>
    ),
  },
  {
    title: '9. Grievances',
    body: (
      <>
        <p>
          For a complaint about a cancellation, a refund, or a charge, write or call {LEGAL_NAME}.
          We acknowledge a grievance within 48 hours and redress it within one month of receiving it,
          in line with the Consumer Protection (E-Commerce) Rules, 2020.
        </p>
        <ContactBlock />
      </>
    ),
  },
  {
    title: '10. Governing law',
    body: (
      <p>
        This policy is governed by the laws of India, including the Consumer Protection Act, 2019.
        If a term here conflicts with a right you cannot waive under that Act or the Consumer
        Protection (E-Commerce) Rules, 2020, the law prevails. Disputes are subject to the courts at
        Pune, Maharashtra, India, unless mandatory law requires another forum.
      </p>
    ),
  },
  {
    title: '11. Changes',
    body: (
      <p>
        We post changes on this page and update the date at the top. The policy in force when you
        pay applies to that payment, except where a later change is required by law.
      </p>
    ),
  },
]
