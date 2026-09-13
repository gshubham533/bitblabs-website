import { HOW_IT_WORKS } from '@/lib/landing'
import { InnerCard } from '@/components/landing/InnerCard'
import { SectionFrame } from '@/components/landing/SectionFrame'
import { PrimaryApplyLink } from '@/components/landing/CtaButtons'

export function HowItWorks() {
  return (
    <SectionFrame id="how" title="How it works">
      <ol className="mt-10 grid gap-4">
        {HOW_IT_WORKS.steps.map((step, index) => (
          <li key={step.title}>
            <InnerCard className="grid gap-3 md:grid-cols-[4.5rem_minmax(0,0.75fr)_minmax(0,1.4fr)] md:items-start md:gap-8">
              <p className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-soft font-heading text-xs font-semibold text-brand">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="font-display text-xl font-semibold tracking-tight text-zinc-950 md:text-2xl">
                {step.title}
              </h3>
              <p className="font-body text-base leading-relaxed text-zinc-500 md:text-lg">{step.body}</p>
            </InnerCard>
          </li>
        ))}
      </ol>
      <div className="mt-10">
        <PrimaryApplyLink tone="onLight" />
      </div>
    </SectionFrame>
  )
}
