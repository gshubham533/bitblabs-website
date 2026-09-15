import { SoftReveal } from '@/components/home/motion'
import { FRICTION } from '@/lib/landing'
import { cn } from '@/lib/utils'

export function FrictionGrid() {
  return (
    <section id="recognition" className="bb-home-section pt-4 sm:pt-8">
      <div className="bb-home-container">
        <SoftReveal>
          <h2 className="max-w-3xl text-[clamp(2.1rem,4.5vw,3.75rem)] font-semibold leading-[1.02] tracking-tight">
            {FRICTION.headline}
          </h2>
          <p className="mt-3 max-w-2xl text-base text-[var(--bb-ink-muted)] sm:text-lg">
            {FRICTION.eyebrow}
          </p>

          <div className="mt-8 overflow-hidden rounded-[1.1rem] border border-[var(--bb-rail)] bg-[var(--bb-board)]">
            <div className="flex flex-col gap-2 border-b border-[var(--bb-rail)] px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:px-5">
              <p className="font-[family-name:var(--font-barlow-condensed)] text-sm font-semibold uppercase tracking-[0.14em] text-[var(--bb-ink)]">
                Recognition rail
              </p>
              <span className="w-fit rounded-md bg-[var(--bb-amber)] px-2 py-0.5 font-[family-name:var(--font-barlow-condensed)] text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--bb-ink)]">
                Blockers on the board
              </span>
            </div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
              {FRICTION.cards.map((card, index) => (
                <li
                  key={card.title}
                  className={cn(
                    'border-[var(--bb-rail)] p-4 sm:p-5',
                    'border-b last:border-b-0',
                    'sm:border-r sm:[&:nth-child(2n)]:border-r-0 sm:[&:nth-child(n+5)]:border-b-0',
                    'lg:border-r lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(n+4)]:border-b-0'
                  )}
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className="inline-block h-3 w-3 rounded-sm bg-[var(--bb-amber)] shadow-[var(--bb-chip-shadow)]"
                      aria-hidden
                    />
                    <span className="font-[family-name:var(--font-barlow-condensed)] text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--bb-ink-muted)]">
                      Lane {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-[var(--bb-ink)]">
                    {card.title}
                  </h3>
                  <p className="mt-2 max-w-[38ch] text-sm leading-relaxed text-[var(--bb-ink-muted)] sm:text-[15px]">
                    {card.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 max-w-4xl rounded-md border border-dashed border-[var(--bb-rail)] bg-[var(--bb-board)] px-4 py-3 text-base font-medium leading-relaxed text-[var(--bb-ink)] sm:px-5 sm:py-4 sm:text-lg">
            {FRICTION.closing}
          </p>
        </SoftReveal>
      </div>
    </section>
  )
}
