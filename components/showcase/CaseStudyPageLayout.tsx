'use client'

import { FinalCta } from '@/components/hl/FinalCta'
import { IconChevronLeft } from '@/components/hl/icons'
import { InnerHero, PageShell } from '@/components/hl/PageShell'
import { RollButton } from '@/components/hl/ui'
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
    <PageShell>
      <AgencyCaseStudy project={project} backHref={backHref} backLabel={backLabel} />
      <FinalCta />
    </PageShell>
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
    <PageShell>
      <InnerHero title={title} description="That page may have moved. The rest of our work is one click away.">
        <RollButton href={backHref} variant="black" icon={<IconChevronLeft className="size-5" />}>
          {backLabel}
        </RollButton>
      </InnerHero>
    </PageShell>
  )
}
