import { BookButton } from '@/components/home/BookButton'
import { CheckIcon } from '@/components/home/visuals/WorkflowDiagram'
import { OFFER } from '@/lib/landing'

export function StrategySessionOffer() {
  return (
    <section id="offer" className="bb-home-section">
      <div className="bb-home-container">
        <div className="overflow-hidden rounded-[2rem] border border-[var(--bb-line)] bg-gradient-to-br from-[#eef2ff] via-white to-[#f7f8f5] p-6 sm:rounded-[2.5rem] sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.85fr)] lg:items-start">
            <div>
              <p className="bb-home-eyebrow">
                <span className="bb-home-eyebrow-dot" aria-hidden />
                {OFFER.eyebrow}
              </p>
              <h2 className="mt-4 text-[clamp(2rem,3.8vw,3.25rem)] font-semibold leading-[1.08] tracking-tight">
                {OFFER.headline}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--bb-ink-muted)] sm:text-lg">
                {OFFER.body}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--bb-ink)] sm:text-[17px]">
                {OFFER.definition}
              </p>
              <p className="mt-8 text-sm font-semibold text-[var(--bb-ink)]">{OFFER.duringLabel}</p>
              <ol className="mt-4 space-y-2.5">
                {OFFER.steps.map((step, i) => (
                  <li
                    key={step}
                    className="flex gap-3 text-[15px] leading-relaxed text-[var(--bb-ink)]"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[var(--bb-brand)] text-[11px] font-bold text-white">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <aside className="bb-card sticky top-28 p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--bb-ink-muted)]">
                AI Workflow Strategy Session
              </p>
              <p className="mt-4 text-5xl font-semibold tracking-tight text-[var(--bb-ink)]">
                {OFFER.price}
              </p>
              <p className="mt-2 text-sm text-[var(--bb-ink-muted)]">{OFFER.duration}</p>
              <ul className="mt-6 space-y-2 border-t border-[var(--bb-line)] pt-5 text-sm text-[var(--bb-ink)]">
                {OFFER.deliverablesSummary.map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckIcon className="mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-[var(--bb-ink-muted)]">
                {OFFER.creditNote}
              </p>
              <BookButton location="offer" large className="group mt-6 w-full">
                {OFFER.primaryCta}
              </BookButton>
              <p className="mt-3 text-center text-xs text-[var(--bb-ink-muted)]">{OFFER.microcopy}</p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
