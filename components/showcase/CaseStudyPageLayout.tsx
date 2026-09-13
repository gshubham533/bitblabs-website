'use client'

import Link from 'next/link'
import { StoryCaseStudy } from '@/components/showcase/StoryCaseStudy'
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
  return <StoryCaseStudy project={project} backHref={backHref} backLabel={backLabel} />
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
    <main className="relative flex min-h-screen flex-col items-start justify-center bg-paper px-6 text-ink md:px-12">
      <h1 className="mb-6 font-[family-name:var(--font-story-serif)] text-4xl">{title}</h1>
      <Link href={backHref} className="btn-ghost">
        ← {backLabel}
      </Link>
    </main>
  )
}
