import { FINAL_CTA } from '@/lib/landing'
import { APPLY_FINAL_CTA_LABEL } from '@/lib/site'
import { ApplyForm } from '@/components/landing/ApplyForm'
import { SecondaryProjectsLink } from '@/components/landing/CtaButtons'
import { SectionFrame } from '@/components/landing/SectionFrame'

export function FinalCta() {
  return (
    <SectionFrame id="apply" className="scroll-mt-24">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,32rem)] lg:items-start lg:gap-16">
        <div>
          <h2 className="max-w-3xl font-display text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.08] tracking-tight text-zinc-950">
            {FINAL_CTA.headline}
          </h2>
          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-zinc-500 md:text-xl">
            {FINAL_CTA.subhead}
          </p>
          <div className="mt-10">
            <SecondaryProjectsLink tone="onLight" />
          </div>
        </div>
        <div className="rounded-[1.75rem] bg-zinc-50 p-6 md:p-8">
          <h3 className="font-display text-2xl font-semibold tracking-tight text-zinc-950">
            {APPLY_FINAL_CTA_LABEL}
          </h3>
          <ApplyForm className="mt-8" />
        </div>
      </div>
    </SectionFrame>
  )
}
