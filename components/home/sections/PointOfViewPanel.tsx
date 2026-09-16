import { SoftReveal } from '@/components/home/motion'
import { ACCENT_TEXT } from '@/components/home/ui/Editorial'
import { POINT_OF_VIEW } from '@/lib/landing'

export function PointOfViewPanel() {
  return (
    <section id="point-of-view" className="bb-home-section">
      <div className="bb-home-container">
        <SoftReveal>
          <div className="lg:pl-[260px]">
            <h2 className="bb-display bb-h2 max-w-[620px]">{POINT_OF_VIEW.headline}</h2>
            <p className="mt-8 max-w-[620px] text-[21px] leading-[1.55] text-[var(--bb-body-strong)]">
              {POINT_OF_VIEW.lead}
            </p>
            <p className="bb-label mt-12 text-[var(--bb-ink)]">{POINT_OF_VIEW.better}</p>
            <ol className="mt-2 max-w-[620px] list-none border-t border-[var(--bb-line)] p-0">
              {POINT_OF_VIEW.questions.map((q, i) => (
                <li
                  key={q}
                  className="grid grid-cols-[44px_1fr] items-baseline border-b border-[var(--bb-line)] py-5 text-[18px] leading-normal"
                >
                  <span className={`text-xs font-bold tracking-[0.06em] ${ACCENT_TEXT[i % 4]}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-medium">{q}</span>
                </li>
              ))}
            </ol>
            <p className="mt-10 text-[22px] font-bold tracking-[-0.02em]">{POINT_OF_VIEW.closing}</p>
          </div>
        </SoftReveal>
      </div>
    </section>
  )
}
