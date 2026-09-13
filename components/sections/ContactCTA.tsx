import { FINAL_CTA } from '@/lib/landing'
import { BOOK_FINAL_CTA_LABEL, PAY_BOOK_URL, PORTFOLIO_SECTION_HREF } from '@/lib/site'
import Link from 'next/link'

export function ContactCTA() {
  return (
    <section className="border-t border-white/10 bg-[#050505] px-5 py-16 text-white sm:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight">{FINAL_CTA.headline}</h2>
        <p className="mt-4 text-base leading-relaxed text-white/60">{FINAL_CTA.subhead}</p>
        <a
          href={PAY_BOOK_URL}
          className="mt-8 inline-flex min-h-12 items-center justify-center bg-white px-5 text-sm font-semibold text-black"
        >
          {BOOK_FINAL_CTA_LABEL}
        </a>
        <p className="mt-4 text-xs leading-relaxed text-white/40">{FINAL_CTA.microcopy}</p>
        <Link
          href={PORTFOLIO_SECTION_HREF}
          className="mt-6 inline-block text-xs text-white/35 underline-offset-4 hover:text-white/70 hover:underline"
        >
          Work
        </Link>
      </div>
    </section>
  )
}
