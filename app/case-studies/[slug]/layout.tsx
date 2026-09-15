import type { Metadata } from 'next'
import { caseStudies } from '@/lib/data'
import { pageMetadata } from '@/lib/seo'

type LayoutProps = {
  children: React.ReactNode
  params: { slug: string }
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export function generateMetadata({ params }: Pick<LayoutProps, 'params'>): Metadata {
  const study = caseStudies.find((item) => item.slug === params.slug)
  if (!study) {
    return pageMetadata({
      title: 'Case study not found',
      description: 'This case study is not available.',
      path: `/case-studies/${params.slug}`,
      noIndex: true,
    })
  }

  return pageMetadata({
    title: study.title,
    description: study.description,
    path: `/case-studies/${study.slug}`,
    ogType: 'article',
  })
}

export default function CaseStudySlugLayout({ children }: LayoutProps) {
  return children
}
