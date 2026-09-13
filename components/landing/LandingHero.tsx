import { HERO } from '@/lib/landing'
import { Chip } from '@/components/landing/Chip'
import { CtaPair } from '@/components/landing/CtaButtons'
import { HeroSculpture } from '@/components/landing/HeroSculpture'
import { SectionFrame } from '@/components/landing/SectionFrame'

const microcopyChips = HERO.microcopy.split(' · ')

export function LandingHero() {
  return (
    <SectionFrame id="hero" innerClassName="overflow-hidden">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-8">
        <div>
          <Chip tone="brand">{HERO.eyebrow}</Chip>
          <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.15rem,5.4vw,4.35rem)] font-semibold leading-[1.04] tracking-tight text-zinc-950">
            {HERO.headline}
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-zinc-600 md:mt-7 md:text-xl">
            {HERO.subhead}
          </p>
          <CtaPair tone="onLight" className="mt-9 md:mt-10" />
          <ul className="mt-8 flex flex-wrap gap-2">
            {microcopyChips.map((item) => (
              <li key={item}>
                <Chip>{item}</Chip>
              </li>
            ))}
          </ul>
        </div>
        <HeroSculpture />
      </div>
    </SectionFrame>
  )
}
