import { ACCENT_TEXT, ColorBar, LabelGrid } from '@/components/home/ui/Editorial'
import { FIT, PRINCIPLES } from '@/lib/landing'

export function FitSection() {
  return (
    <section id="fit" className="bb-home-section">
      <div className="bb-home-container">
        <LabelGrid>
          <p className="bb-bignum text-[var(--bb-blue)]">
            05
            <span className="font-medium text-[var(--bb-deemph)]"> / Working together</span>
          </p>
          <div className="max-w-[620px]">
            <h2 className="bb-display bb-h2 mb-8">{FIT.headline}</h2>
            <ul className="m-0 list-none border-t border-[var(--bb-line)] p-0">
              {PRINCIPLES.items.map((item, i) => (
                <li
                  key={item.title}
                  className="grid grid-cols-[44px_1fr] items-baseline border-b border-[var(--bb-line)] py-5 text-[18px] leading-normal"
                >
                  <span className={`text-xs font-bold tracking-[0.06em] ${ACCENT_TEXT[i % 4]}`}>
                    {String.fromCharCode(97 + i)}
                  </span>
                  <span className="font-medium">
                    <strong className="font-bold text-[var(--bb-ink)]">{item.title}</strong> {item.body}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-14 grid border-t border-[var(--bb-line)] sm:grid-cols-2">
              <div className="border-b border-[var(--bb-line)] py-8 pr-8 sm:border-b-0 sm:border-r">
                <h3 className="mb-5 text-[22px] font-bold tracking-[-0.02em]">{FIT.goodTitle}</h3>
                <ul className="space-y-3 text-[15px] leading-relaxed">
                  {FIT.good.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-[var(--bb-blue)]" aria-hidden>
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-8 sm:pl-8">
                <h3 className="mb-5 text-[22px] font-bold tracking-[-0.02em]">{FIT.badTitle}</h3>
                <ul className="space-y-3 text-[15px] leading-relaxed text-[var(--bb-ink-muted)]">
                  {FIT.bad.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative mt-11 bg-[var(--bb-ink)] px-8 py-7 text-white">
              <ColorBar className="absolute inset-x-0 top-0" height={4} />
              <p className="bb-label mb-2.5 text-[var(--bb-amber)]">The approach</p>
              <p className="text-[17px] leading-relaxed text-[var(--bb-on-ink)]">{PRINCIPLES.headline}</p>
            </div>
          </div>
        </LabelGrid>
      </div>
    </section>
  )
}
