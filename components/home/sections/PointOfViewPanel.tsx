import { SoftReveal } from '@/components/home/motion'
import { POINT_OF_VIEW } from '@/lib/landing'

export function PointOfViewPanel() {
  return (
    <section id="point-of-view" className="bb-home-section pt-0">
      <div className="bb-home-container">
        <SoftReveal>
          <div className="bb-panel grid gap-10 overflow-hidden bg-[var(--bb-surface)] p-6 sm:p-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 lg:p-12">
            <div>
              <h2 className="text-[clamp(1.95rem,3.6vw,3.15rem)] font-semibold leading-[1.05] tracking-tight">
                {POINT_OF_VIEW.headline}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[var(--bb-ink-muted)]">
                {POINT_OF_VIEW.lead}
              </p>
              <p className="mt-8 font-[family-name:var(--font-barlow-condensed)] text-xl font-semibold uppercase tracking-[0.06em] text-[var(--bb-brand-dark)]">
                {POINT_OF_VIEW.closing}
              </p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-barlow-condensed)] text-sm font-semibold uppercase tracking-[0.12em] text-[var(--bb-ink)]">
                {POINT_OF_VIEW.better}
              </p>
              <ol className="mt-5 space-y-2.5">
                {POINT_OF_VIEW.questions.map((q, i) => (
                  <li
                    key={q}
                    className="rounded-lg border border-[var(--bb-rail)] bg-[var(--bb-board)] px-4 py-3.5 text-[15px] leading-relaxed text-[var(--bb-ink)]"
                  >
                    <span className="mr-3 font-[family-name:var(--font-barlow-condensed)] text-xs font-semibold tabular-nums text-[var(--bb-brand)]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {q}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </SoftReveal>
      </div>
    </section>
  )
}
