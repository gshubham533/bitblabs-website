import { FINAL_CTA } from '@/lib/landing'
import { APPLY_CTA_LABEL } from '@/lib/site'
import { CtaPair } from '@/components/landing/CtaButtons'

export function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white px-6 py-24 text-zinc-950 antialiased md:px-12 lg:px-16 sm:py-32">
      <div className="mx-auto w-full max-w-[1400px]">
        <h2 className="max-w-4xl font-display text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-tight text-zinc-950">
          {FINAL_CTA.headline}
        </h2>
        <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-zinc-600 md:text-xl">
          {FINAL_CTA.subhead}
        </p>
        <CtaPair tone="onLight" primaryLabel={APPLY_CTA_LABEL} className="mt-10" />
      </div>
    </section>
  )
}
