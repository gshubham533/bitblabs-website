import { PRICING } from '@/lib/landing'
import { SectionFrame } from '@/components/landing/SectionFrame'
import { PrimaryApplyLink } from '@/components/landing/CtaButtons'

export function Pricing() {
  return (
    <SectionFrame id="pricing" eyebrow="Pricing">
      <div className="mt-10 max-w-3xl rounded-4xl bg-zinc-50 p-8 md:p-12">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
          {PRICING.name}
        </h2>
        <p className="mt-6 font-body text-base leading-relaxed text-zinc-600 md:text-lg">
          {PRICING.includes}
        </p>
        <p className="mt-6 font-body text-base leading-relaxed text-zinc-900 md:text-lg">
          {PRICING.guarantee}
        </p>
        <div className="mt-10">
          <PrimaryApplyLink tone="onLight" />
        </div>
      </div>
    </SectionFrame>
  )
}
