import { BookButton } from '@/components/home/BookButton'
import { ACCENT_TEXT, ColorBar, SectionIntro } from '@/components/home/ui/Editorial'
import { OFFER } from '@/lib/landing'

export function StrategySessionOffer() {
  return (
    <section id="offer" className="bb-home-section">
      <div className="bb-home-container">
        <SectionIntro number="04" kicker="The session" title={OFFER.headline} accent={3} />
        <div className="lg:pl-[260px]">
          <p className="max-w-[640px] text-[21px] leading-[1.55] text-[var(--bb-body-strong)]">
            {OFFER.body}
          </p>
          <p className="mt-6 max-w-[720px] text-[17px] leading-relaxed text-[var(--bb-ink-muted)]">
            {OFFER.definition}
          </p>

          <p className="bb-label mt-14 text-[var(--bb-ink)]">{OFFER.duringLabel}</p>
          <ol className="mt-2 list-none border-t border-[var(--bb-line)] p-0">
            {OFFER.steps.map((step, i) => (
              <li
                key={step}
                className="grid grid-cols-[44px_1fr] items-baseline border-b border-[var(--bb-line)] py-5 text-[18px] leading-normal"
              >
                <span className={`text-xs font-bold tracking-[0.06em] ${ACCENT_TEXT[i % 4]}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-medium">{step}</span>
              </li>
            ))}
          </ol>

          <div className="relative mt-11 bg-[var(--bb-ink)] px-8 py-7 text-white">
            <ColorBar className="absolute inset-x-0 top-0" height={4} />
            <p className="bb-label mb-2.5 text-[var(--bb-amber)]">
              {OFFER.duration} · {OFFER.price}
            </p>
            <p className="text-[32px] font-bold tracking-[-0.03em]">{OFFER.price}</p>
            <ul className="mt-5 space-y-2 text-[15px] leading-relaxed text-[var(--bb-on-ink)]">
              {OFFER.deliverablesSummary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-5 text-[17px] leading-relaxed text-[var(--bb-on-ink)]">{OFFER.creditNote}</p>
            <BookButton location="offer" large className="mt-6">
              {OFFER.primaryCta}
            </BookButton>
            <p className="mt-3 text-[13px] text-[var(--bb-on-ink-deemph)]">{OFFER.microcopy}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
