import { WorkJsonLd } from '@/components/seo/WorkJsonLd'
import { WorkDetailView } from '@/components/showcase/WorkDetailView'
import { fromLegacyCaseStudy } from '@/lib/case-study-project'
import { caseStudies } from '@/lib/data'

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((item) => item.slug === params.slug)
  const mapped = study ? fromLegacyCaseStudy(study) : null

  return (
    <>
      {mapped ? <WorkJsonLd kind="case-study" project={mapped} /> : null}
      <WorkDetailView
        project={mapped}
        backHref="/case-studies"
        backLabel="Back to case studies"
        notFoundTitle="Case study not found"
      />
    </>
  )
}
