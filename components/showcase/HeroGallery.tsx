import { APPLY_CTA_LABEL, STRATEGY_APPLY_PATH } from '@/lib/site'
import { CtaLink } from '@/components/ui/CtaLink'

export function HeroContent() {
  return (
    <section className="page-x pb-16 pt-[calc(var(--nav-offset)+1.5rem)] md:pb-24 md:pt-[calc(var(--nav-offset)+2.5rem)]">
      <div className="page-max mx-auto max-w-3xl text-center">
        <div className="hero-fade">
          <h1 className="font-display text-[length:var(--text-display)] font-bold leading-[0.95] text-ink">
            Leave with a priority you can defend.
          </h1>
          <p className="mx-auto mt-6 max-w-[38rem] font-body text-lg leading-relaxed text-ink-2 md:text-xl">
            A Strategy Session for mid-market ops leaders — one workflow, a written Opportunity Brief.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaLink href={STRATEGY_APPLY_PATH}>{APPLY_CTA_LABEL}</CtaLink>
          </div>
          <p className="mx-auto mt-10 max-w-[34rem] font-body text-base leading-relaxed text-ink-2">
            <span className="font-display text-xl font-bold text-ink">35–45%</span>
            {' '}
            fewer manual follow-ups after voice hiring at a 2,000-person firm.
          </p>
        </div>
      </div>
    </section>
  )
}
