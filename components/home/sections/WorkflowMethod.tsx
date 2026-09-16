import { ACCENT_TEXT, SectionIntro } from '@/components/home/ui/Editorial'
import { SoftReveal } from '@/components/home/motion'
import { METHOD } from '@/lib/landing'

export function WorkflowMethod() {
  return (
    <section id="how-it-works" className="bb-home-section">
      <div className="bb-home-container">
        <SoftReveal>
          <SectionIntro number="03" kicker="Process" title={METHOD.headline} accent={2} />
          <p className="mb-4 max-w-2xl text-[21px] font-bold leading-snug tracking-[-0.02em] lg:ml-[260px]">
            {METHOD.lead}
          </p>
          <p className="mb-16 max-w-2xl text-[17px] leading-relaxed text-[var(--bb-ink-muted)] lg:ml-[260px] max-lg:mb-10">
            {METHOD.supporting}
          </p>
          <ol className="bb-proc-grid grid list-none grid-cols-1 gap-y-10 p-0 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-4 lg:gap-y-0">
            {METHOD.stages.map((stage, index) => (
              <li key={stage.title} className="max-sm:mr-0 max-sm:pr-0 lg:mr-9 lg:pr-9">
                <p
                  className={`bb-bignum mb-5 text-[44px] tracking-[-0.03em] ${ACCENT_TEXT[index % 4]}`}
                >
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mb-3 text-[22px] font-bold tracking-[-0.02em]">{stage.title}</h3>
                <p className="text-[15px] leading-relaxed text-[var(--bb-ink-muted)]">{stage.body}</p>
                <p className="mt-3 text-[13px] font-medium text-[var(--bb-caption)]">{stage.example}</p>
              </li>
            ))}
          </ol>
          <p className="mt-16 max-w-3xl text-[17px] leading-relaxed text-[var(--bb-ink)] lg:ml-[260px]">
            {METHOD.closing}
          </p>
        </SoftReveal>
      </div>
    </section>
  )
}
