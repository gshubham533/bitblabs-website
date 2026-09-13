import { STRATEGY_TO_PRODUCTION } from '@/lib/landing'
import { SectionFrame } from '@/components/landing/SectionFrame'
import { SecondaryProjectsLink } from '@/components/landing/CtaButtons'

export function StrategyToProduction() {
  return (
    <SectionFrame id="production" eyebrow="From strategy to production" tone="muted">
      <ol className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
        {STRATEGY_TO_PRODUCTION.stages.map((stage, index) => (
          <li key={stage} className="flex items-center gap-4">
            <span className="font-display text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
              {stage}
            </span>
            {index < STRATEGY_TO_PRODUCTION.stages.length - 1 ? (
              <span className="hidden font-heading text-zinc-400 sm:inline" aria-hidden>
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
      <p className="mt-8 max-w-3xl font-body text-lg leading-relaxed text-zinc-600 md:text-xl">
        {STRATEGY_TO_PRODUCTION.body}
      </p>
      <div className="mt-10">
        <SecondaryProjectsLink tone="onLight" />
      </div>
    </SectionFrame>
  )
}
