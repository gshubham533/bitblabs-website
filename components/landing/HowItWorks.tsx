import { HOW_IT_WORKS } from '@/lib/landing'
import { SectionFrame } from '@/components/landing/SectionFrame'
import { PrimaryApplyLink } from '@/components/landing/CtaButtons'

export function HowItWorks() {
  return (
    <SectionFrame id="how" title="How it works">
      <ol className="mt-12 divide-y divide-zinc-200 border-y border-zinc-200">
        {HOW_IT_WORKS.steps.map((step, index) => (
          <li key={step.title} className="grid gap-4 py-8 md:grid-cols-[5rem_minmax(0,0.8fr)_minmax(0,1.4fr)] md:gap-10">
            <p className="font-heading text-xs uppercase tracking-[0.18em] text-zinc-400">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="font-display text-xl font-semibold tracking-tight text-zinc-950 md:text-2xl">
              {step.title}
            </h3>
            <p className="font-body text-base leading-relaxed text-zinc-600 md:text-lg">{step.body}</p>
          </li>
        ))}
      </ol>
      <div className="mt-10">
        <PrimaryApplyLink tone="onLight" />
      </div>
    </SectionFrame>
  )
}
