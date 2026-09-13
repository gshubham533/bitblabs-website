import { FINAL_CTA } from '@/lib/landing'
import { APPLY_CTA_LABEL } from '@/lib/site'
import { CtaPair } from '@/components/landing/CtaButtons'

export function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-canvas px-4 py-16 text-zinc-950 antialiased sm:px-6 sm:py-20 md:px-8">
      <div className="mx-auto w-full max-w-[1400px] rounded-4xl bg-white px-6 py-16 shadow-[0_1px_2px_rgba(15,23,42,0.04)] md:rounded-5xl md:px-12 md:py-20 lg:px-16">
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
