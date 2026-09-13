import { STRATEGY_TO_PRODUCTION } from '@/lib/landing'
import { Chip } from '@/components/landing/Chip'
import { SectionFrame } from '@/components/landing/SectionFrame'
import { SecondaryProjectsLink } from '@/components/landing/CtaButtons'

export function StrategyToProduction() {
  return (
    <SectionFrame id="production" eyebrow="From strategy to production">
      <ol className="mt-10 flex flex-wrap items-center gap-3">
        {STRATEGY_TO_PRODUCTION.stages.map((stage, index) => (
          <li key={stage} className="flex items-center gap-3">
            <Chip tone="brand" className="px-4 py-2 font-display text-base font-semibold md:text-lg">
              {stage}
            </Chip>
            {index < STRATEGY_TO_PRODUCTION.stages.length - 1 ? (
              <span className="font-heading text-zinc-300" aria-hidden>
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
      <p className="mt-8 max-w-3xl font-body text-lg leading-relaxed text-zinc-500 md:text-xl">
        {STRATEGY_TO_PRODUCTION.body}
      </p>
      <div className="mt-10">
        <SecondaryProjectsLink tone="onLight" />
      </div>
    </SectionFrame>
  )
}
