import { PRICING } from '@/lib/landing'
import { InnerCard } from '@/components/landing/InnerCard'
import { SectionFrame } from '@/components/landing/SectionFrame'
import { PrimaryApplyLink } from '@/components/landing/CtaButtons'

export function Pricing() {
  return (
    <SectionFrame id="pricing" eyebrow="Pricing">
      <div className="mx-auto mt-10 max-w-2xl">
        <InnerCard className="md:p-12">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
            {PRICING.name}
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-zinc-500 md:text-lg">
            {PRICING.includes}
          </p>
          <p className="mt-6 font-body text-base leading-relaxed text-zinc-800 md:text-lg">
            {PRICING.guarantee}
          </p>
          <div className="mt-10">
            <PrimaryApplyLink tone="onLight" />
          </div>
        </InnerCard>
      </div>
    </SectionFrame>
  )
}
