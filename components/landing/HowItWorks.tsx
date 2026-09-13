import { HOW_IT_WORKS } from '@/lib/landing'
import { SectionFrame } from '@/components/landing/SectionFrame'
import { PrimaryApplyLink } from '@/components/landing/CtaButtons'

export function HowItWorks() {
  return (
    <SectionFrame id="how" title="How it works">
      <ol className="mt-10 grid gap-4">
        {HOW_IT_WORKS.steps.map((step, index) => (
          <li
            key={step.title}
            className="grid gap-3 rounded-4xl bg-zinc-50 p-6 md:grid-cols-[4.5rem_minmax(0,0.75fr)_minmax(0,1.4fr)] md:items-start md:gap-8 md:p-8"
          >
            <p className="font-heading text-xs uppercase tracking-[0.18em] text-brand">
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
