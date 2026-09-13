import { FINAL_CTA } from '@/lib/landing'
import { APPLY_FINAL_CTA_LABEL } from '@/lib/site'
import { ApplyForm } from '@/components/landing/ApplyForm'
import { SecondaryProjectsLink } from '@/components/landing/CtaButtons'

export function FinalCta() {
  return (
    <section id="apply" className="scroll-mt-24 bg-black px-6 py-20 text-white md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,32rem)] lg:items-start lg:gap-20">
        <div>
          <h2 className="max-w-3xl font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-tight">
            {FINAL_CTA.headline}
          </h2>
          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-zinc-400 md:text-xl">
            {FINAL_CTA.subhead}
          </p>
          <div className="mt-10">
            <SecondaryProjectsLink tone="onDark" />
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 text-zinc-950 md:p-8">
          <h3 className="font-display text-2xl font-semibold tracking-tight">
            {APPLY_FINAL_CTA_LABEL}
          </h3>
          <ApplyForm className="mt-8" />
        </div>
      </div>
    </section>
  )
}
