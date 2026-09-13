import { FINAL_CTA } from '@/lib/landing'
import { BOOK_FINAL_CTA_LABEL, PAY_BOOK_URL, PORTFOLIO_SECTION_HREF } from '@/lib/site'
import Link from 'next/link'

export function ContactCTA() {
  return (
    <section className="border-t border-[#111]/10 bg-[#f3f2ee] px-5 py-16 text-[#111] sm:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight">{FINAL_CTA.headline}</h2>
        <p className="mt-4 text-base leading-relaxed text-[#111]/60">{FINAL_CTA.subhead}</p>
        <a
          href={PAY_BOOK_URL}
          className="mt-8 inline-flex min-h-12 items-center justify-center bg-[#111] px-5 text-sm font-semibold text-white"
        >
          {BOOK_FINAL_CTA_LABEL}
        </a>
        <p className="mt-4 text-xs leading-relaxed text-[#111]/45">{FINAL_CTA.microcopy}</p>
        <Link
          href={PORTFOLIO_SECTION_HREF}
          className="mt-6 inline-block text-xs text-[#111]/40 underline-offset-4 hover:text-[#111] hover:underline"
        >
          Work
        </Link>
      </div>
    </section>
  )
}