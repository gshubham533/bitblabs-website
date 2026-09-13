import Link from 'next/link'
import {
  APPLY_CTA_LABEL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  PRIVACY_PATH,
  PORTFOLIO_SECTION_HREF,
  STRATEGY_APPLY_PATH,
  TERMS_PATH,
} from '@/lib/site'
import { TrackedCtaLink } from '@/components/ui/TrackedCtaLink'
import { StoryReveal, StorySerifHeadline } from '@/components/story/StoryReveal'

export type GridCloseVariant = 'home' | 'strategy'

interface GridPaperCloseProps {
  variant?: GridCloseVariant
  lines?: string[]
  accent?: string
  pricingLine?: string
  bodyLine?: string
  showCta?: boolean
}

export function GridPaperClose({
  variant: _variant = 'home',
  lines = ['Leave with a', 'priority you can defend.'],
  accent = 'Apply.',
  pricingLine,
  bodyLine,
  showCta = true,
}: GridPaperCloseProps) {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[var(--color-story-grid)] px-6 py-16 pb-[calc(var(--story-nav-offset)+max(1.5rem,env(safe-area-inset-bottom)))] md:py-24 text-paper"
      style={{
        backgroundImage:
          'linear-gradient(var(--color-story-grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-story-grid-line) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    >
      <div
        className="pointer-events-none absolute right-0 top-0 h-24 w-24 bg-paper"
        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <StoryReveal>
          <StorySerifHeadline
            lines={lines}
            accent={accent}
            className="[&>span]:text-paper [&>span:last-child]:text-[var(--color-story-green)]"
          />
        </StoryReveal>

        {pricingLine ? (
          <StoryReveal delay={0.06}>
            <p className="mt-6 font-body text-sm text-paper/70 md:text-base">{pricingLine}</p>
          </StoryReveal>
        ) : null}

        {bodyLine ? (
          <StoryReveal delay={0.08}>
            <p className="mx-auto mt-4 max-w-md font-body text-sm leading-relaxed text-paper/60">
              {bodyLine}
            </p>
          </StoryReveal>
        ) : null}

        {showCta ? (
          <StoryReveal className="mt-10 flex flex-col items-center gap-3" delay={0.1}>
            <TrackedCtaLink
              href={STRATEGY_APPLY_PATH}
              cta="apply"
              location="final"
              className="!rounded-full !px-8"
            >
              {APPLY_CTA_LABEL}
            </TrackedCtaLink>
          </StoryReveal>
        ) : null}

        <StoryReveal className="mt-8" delay={0.12}>
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="inline-flex rounded-full border border-paper/20 bg-ink/30 px-4 py-2 font-body text-sm text-paper/80"
          >
            {CONTACT_PHONE_DISPLAY}
          </a>
        </StoryReveal>

        <nav aria-label="Footer" className="mt-16 border-t border-paper/10 pt-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-body text-sm text-paper/60">
            <li>
              <Link href={PORTFOLIO_SECTION_HREF}>Work</Link>
            </li>
            <li>
              <Link href={STRATEGY_APPLY_PATH}>Apply</Link>
            </li>
            <li>
              <Link href={PRIVACY_PATH}>Privacy</Link>
            </li>
            <li>
              <Link href={TERMS_PATH}>Terms</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
