'use client'

import {
  CaseStudyNotFound,
  CaseStudyPageLayout,
} from '@/components/showcase/CaseStudyPageLayout'
import type { CaseStudyProject } from '@/lib/case-study-project'

type WorkDetailViewProps = {
  project: CaseStudyProject | null
  backHref: string
  backLabel?: string
  notFoundTitle?: string
}

export function WorkDetailView({
  project,
  backHref,
  backLabel,
  notFoundTitle,
}: WorkDetailViewProps) {
  if (!project) {
    return (
      <CaseStudyNotFound
        title={notFoundTitle}
        backHref={backHref}
        backLabel={backLabel ?? 'Back to work'}
      />
    )
  }

  return (
    <CaseStudyPageLayout
      project={project}
      backHref={backHref}
      backLabel={backLabel}
    />
  )
}
