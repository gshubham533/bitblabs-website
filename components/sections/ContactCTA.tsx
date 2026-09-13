import Link from 'next/link'
import { APPLY_CTA_LABEL, STRATEGY_APPLY_PATH } from '@/lib/site'
import { CtaLink } from '@/components/ui/CtaLink'

export function ContactCTA() {
  return (
    <section id="contact" className="page-x border-t border-rule py-20 md:py-28">
      <div className="page-max grid items-end gap-8 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-7">
          <h2 className="font-display text-[length:var(--text-display-s)] font-bold leading-[0.95] text-ink">
            Leave with a priority you can defend
          </h2>
          <p className="mt-5 max-w-[40rem] font-body text-lg leading-relaxed text-ink-2 md:text-xl">
            Apply for a Strategy Session. One workflow. A written Opportunity Brief.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 md:col-span-5 md:items-end">
          <div className="flex flex-wrap items-center gap-4">
            <CtaLink href={STRATEGY_APPLY_PATH}>{APPLY_CTA_LABEL}</CtaLink>
            <Link href="/projects" className="btn-ghost">
              View work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
