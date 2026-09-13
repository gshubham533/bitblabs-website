import { HERO } from '@/lib/landing'
import { CtaPair } from '@/components/landing/CtaButtons'

export function LandingHero() {
  return (
    <section className="relative bg-black px-6 pb-20 pt-28 text-white md:px-12 md:pb-28 md:pt-32 lg:px-16 lg:pb-32">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-heading text-xs uppercase tracking-[0.2em] text-zinc-400">
          {HERO.eyebrow}
        </p>
        <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.25rem,6.2vw,5.25rem)] font-semibold leading-[1.02] tracking-tight">
          {HERO.headline}
        </h1>
        <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-zinc-400 md:mt-8 md:text-xl">
          {HERO.subhead}
        </p>
        <CtaPair tone="onDark" className="mt-10 md:mt-12" />
        <p className="mt-8 max-w-2xl font-body text-sm leading-relaxed text-zinc-500 md:text-base">
          {HERO.microcopy}
        </p>
      </div>
    </section>
  )
}
