import type { Metadata } from 'next'
import { portfolioProjects } from '@/lib/portfolio-data'
import { pageMetadata } from '@/lib/seo'

type LayoutProps = {
  children: React.ReactNode
  params: { slug: string }
}

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }))
}

export function generateMetadata({ params }: Pick<LayoutProps, 'params'>): Metadata {
  const project = portfolioProjects.find((item) => item.slug === params.slug)
  if (!project) {
    return pageMetadata({
      title: 'Work not found',
      description: 'This project is not available.',
      path: `/projects/${params.slug}`,
      noIndex: true,
    })
  }

  return pageMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
    image: project.images.cover ?? project.images.workCover ?? '/og/homepage.png',
    imageAlt: project.title,
  })
}

export default function ProjectSlugLayout({ children }: LayoutProps) {
  return children
}
