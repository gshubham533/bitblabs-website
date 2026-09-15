import { FIT } from '@/lib/landing'
import { CheckIcon } from '@/components/home/visuals/WorkflowDiagram'

export function FitSection() {
  return (
    <section id="fit" className="bb-home-section">
      <div className="bb-home-container">
        <h2 className="max-w-3xl text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.08] tracking-tight">
          {FIT.headline}
        </h2>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-[var(--bb-line)] bg-white lg:grid lg:grid-cols-2">
          <div className="border-b border-[var(--bb-line)] p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="flex items-center gap-2">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--bb-mint)]"
                aria-hidden
              >
                <CheckIcon className="text-[var(--bb-ink)]" />
              </span>
              <h3 className="text-lg font-semibold">{FIT.goodTitle}</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {FIT.good.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-[var(--bb-ink)]">
                  <span className="mt-1 text-[var(--bb-brand)]" aria-hidden>
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[var(--bb-canvas)] p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--bb-amber)] text-sm font-bold"
                aria-hidden
              >
                –
              </span>
              <h3 className="text-lg font-semibold">{FIT.badTitle}</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {FIT.bad.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[15px] leading-relaxed text-[var(--bb-ink-muted)]"
                >
                  <span className="mt-1" aria-hidden>
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
