import { APPLY } from '@/lib/landing'
import { APPLY_CTA_LABEL, APPLY_HREF, PORTFOLIO_SECTION_HREF } from '@/lib/site'
import Link from 'next/link'

export function ContactCTA() {
  return (
    <section className="border-t border-white/10 bg-[#050505] px-5 py-16 text-white sm:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight">{APPLY.headline}</h2>
        <p className="mt-4 text-base leading-relaxed text-white/60">{APPLY.subhead}</p>
        <a
          href={APPLY_HREF}
          className="mt-8 inline-flex min-h-12 items-center justify-center bg-white px-5 text-sm font-semibold text-black"
        >
          {APPLY_CTA_LABEL}
        </a>
        <p className="mt-4 text-xs leading-relaxed text-white/40">{APPLY.microcopy}</p>
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
