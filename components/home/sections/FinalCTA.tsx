import { BookButton } from '@/components/home/BookButton'
import { SecondaryCtaLink } from '@/components/home/SecondaryCtaLink'
import { BigNum, LabelGrid } from '@/components/home/ui/Editorial'
import { FINAL_CTA } from '@/lib/landing'
import { HOW_IT_WORKS_ABSOLUTE_HREF } from '@/lib/site'

export function FinalCTA({ showIndex = true }: { showIndex?: boolean }) {
  return (
    <section id="book" className="bb-home-section">
      <div className="bb-home-container">
        <LabelGrid>
          {showIndex ? <BigNum n="07" kicker="Start" accent={1} className="pt-3.5" /> : <div />}
          <div>
            <p className="text-[17px] leading-relaxed text-[var(--bb-ink-muted)]">{FINAL_CTA.intro}</p>
            <p className="mt-3 max-w-[540px] text-[15px] leading-relaxed text-[var(--bb-caption)]">
              {FINAL_CTA.feel}
            </p>
            <h2 className="bb-display bb-h2-cta mt-8">
              {FINAL_CTA.headline}
              <span
                className="align-super text-[0.45em] leading-none text-[var(--bb-green-text)]"
                aria-hidden
              >
                ↗
              </span>
            </h2>
            <p className="mb-10 mt-8 max-w-[480px] text-[21px] leading-[1.55] text-[var(--bb-body-strong)]">
              {FINAL_CTA.body}
            </p>
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <BookButton location="final_cta" large>
                {FINAL_CTA.primaryCta}
              </BookButton>
              <SecondaryCtaLink location="final_cta" href={HOW_IT_WORKS_ABSOLUTE_HREF}>
                {FINAL_CTA.secondaryCta}
              </SecondaryCtaLink>
            </div>
            <p className="bb-label mt-6 text-[var(--bb-deemph)]">{FINAL_CTA.microcopy}</p>
          </div>
        </LabelGrid>
      </div>
    </section>
  )
}
