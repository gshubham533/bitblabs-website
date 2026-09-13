import { HERO } from '@/lib/landing'
import { Chip } from '@/components/landing/Chip'
import { CtaPair } from '@/components/landing/CtaButtons'
import { HeroSculpture } from '@/components/landing/HeroSculpture'

const microcopyChips = HERO.microcopy.split(' · ')

export function LandingHero() {
  return (
    <section id="hero" className="px-4 pb-6 pt-10 text-center sm:px-8 md:pb-8 md:pt-14">
      <HeroSculpture />
      <p className="mt-8">
        <Chip tone="brand">{HERO.eyebrow}</Chip>
      </p>
      <h1 className="mx-auto mt-6 max-w-4xl font-display text-[clamp(2.1rem,5.6vw,4.6rem)] font-semibold leading-[1.05] tracking-tight text-zinc-950">
        {HERO.headline}
      </h1>
      <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-zinc-500 sm:text-lg md:mt-6 md:text-xl">
        {HERO.subhead}
      </p>
      <CtaPair tone="onLight" className="mt-8 justify-center sm:mt-10" />
      <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
        {microcopyChips.map((item) => (
          <li key={item}>
            <Chip>{item}</Chip>
          </li>
        ))}
      </ul>
    </section>
  )
}
