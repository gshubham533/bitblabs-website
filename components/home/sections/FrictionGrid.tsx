import { SectionIntro } from '@/components/home/ui/Editorial'
import { SoftReveal } from '@/components/home/motion'
import { FRICTION } from '@/lib/landing'

export function FrictionGrid() {
  return (
    <section id="recognition" className="bb-home-section">
      <div className="bb-home-container">
        <SoftReveal>
          <SectionIntro number="01" kicker="The case" title={FRICTION.headline} accent={0} />
          <p className="mb-16 max-w-2xl text-[17px] leading-relaxed text-[var(--bb-ink-muted)] lg:ml-[260px] max-lg:mb-10">
            {FRICTION.eyebrow}
          </p>
          <div className="grid grid-cols-1 gap-x-20 gap-y-16 lg:grid-cols-2 lg:pl-[260px]">
            {FRICTION.cards.map((card) => (
              <div key={card.title}>
                <h3 className="mb-3 text-[27px] font-bold tracking-[-0.02em] max-sm:text-[22px]">
                  {card.title}
                </h3>
                <p className="text-[17px] leading-relaxed text-[var(--bb-ink-muted)]">{card.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-16 max-w-3xl text-[21px] font-medium leading-[1.45] text-[var(--bb-ink)] lg:ml-[260px]">
            {FRICTION.closing}
          </p>
        </SoftReveal>
      </div>
    </section>
  )
}
