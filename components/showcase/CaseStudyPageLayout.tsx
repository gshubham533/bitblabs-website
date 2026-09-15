'use client'

import Link from 'next/link'
import { BbPageShell } from '@/components/home/BbPageShell'
import { FinalCTA } from '@/components/home/sections/FinalCTA'
import { AgencyCaseStudy } from '@/components/showcase/AgencyCaseStudy'
import type { CaseStudyProject } from '@/lib/case-study-project'
import { PORTFOLIO_SECTION_HREF } from '@/lib/site'

interface CaseStudyPageLayoutProps {
  project: CaseStudyProject
  backHref?: string
  backLabel?: string
}

export function CaseStudyPageLayout({
  project,
  backHref = PORTFOLIO_SECTION_HREF,
  backLabel = 'Back to work',
}: CaseStudyPageLayoutProps) {
  return (
    <BbPageShell>
      <AgencyCaseStudy project={project} backHref={backHref} backLabel={backLabel} />
      <FinalCTA />
    </BbPageShell>
  )
}

interface CaseStudyNotFoundProps {
  title?: string
  backHref: string
  backLabel: string
}

export function CaseStudyNotFound({
  title = 'Project not found',
  backHref,
  backLabel,
}: CaseStudyNotFoundProps) {
  return (
    <BbPageShell>
      <div className="bb-home-section flex flex-col items-center px-6 pb-20 pt-32 text-center sm:pt-40">
        <h1 className="mb-6 font-[family-name:var(--font-barlow-condensed)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-[0.02em] text-[var(--bb-ink)]">
          {title}
        </h1>
        <Link href={backHref} className="bb-btn-secondary">
          <svg
            aria-hidden
            viewBox="0 0 16 16"
            fill="none"
            className="h-3.5 w-3.5 shrink-0"
          >
            <path
              d="M10 3.5 5.5 8 10 12.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{backLabel}</span>
        </Link>
      </div>
    </BbPageShell>
  )
}
