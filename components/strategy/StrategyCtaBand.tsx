import {
  APPLY_CTA_LABEL,
  STRATEGY_APPLY_PATH,
} from '@/lib/site'
import { STRATEGY_FINAL_CTA } from '@/lib/strategy'
import type { StrategyCtaLocation } from '@/lib/analytics'
import { TrackedCtaLink } from '@/components/ui/TrackedCtaLink'

interface StrategyCtaBandProps {
  location: StrategyCtaLocation
  title?: string
  body?: string
  bordered?: boolean
}

export function StrategyCtaBand({
  location,
  title = STRATEGY_FINAL_CTA.title,
  body = STRATEGY_FINAL_CTA.body,
  bordered = true,
}: StrategyCtaBandProps) {
  return (
    <section
      className={
        bordered ? 'page-x border-t border-rule py-16 md:py-20' : 'page-x py-8 md:py-10'
      }
    >
      <div className="page-max grid gap-8 md:grid-cols-12 md:items-end md:gap-12">
        <div className="md:col-span-7">
          <h2 className="font-display text-[length:var(--text-3xl)] font-bold leading-[1.05] text-ink md:text-[length:var(--text-display-s)]">
            {title}
          </h2>
          <p className="mt-4 max-w-[38rem] font-body text-base leading-relaxed text-ink-2 md:text-lg">
            {body}
          </p>
        </div>
        <div className="flex flex-col gap-3 md:col-span-5 md:items-end">
          <TrackedCtaLink href={STRATEGY_APPLY_PATH} cta="apply" location={location}>
            {APPLY_CTA_LABEL}
          </TrackedCtaLink>
        </div>
      </div>
    </section>
  )
}
