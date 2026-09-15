import type { CaseStudyProject } from '@/lib/case-study-project'
import { jsonLdScript } from '@/lib/seo'
import { ORG_ID, SITE_NAME, SITE_URL } from '@/lib/site'

type WorkJsonLdProps = {
  project: CaseStudyProject
  kind: 'project' | 'case-study'
}

function toIsoDate(value: string) {
  const parsed = Date.parse(value)
  if (!Number.isNaN(parsed)) return new Date(parsed).toISOString().slice(0, 10)
  if (/^\d{4}$/.test(value)) return `${value}-01-01`
  return undefined
}

export function WorkJsonLd({ project, kind }: WorkJsonLdProps) {
  const path =
    kind === 'project' ? `/projects/${project.slug}` : `/case-studies/${project.slug}`
  const url = `${SITE_URL}${path}`
  const image = project.cover
    ? `${SITE_URL}${project.cover.startsWith('/') ? project.cover : `/${project.cover}`}`
    : `${SITE_URL}/og/homepage.png`
  const date = toIsoDate(project.year)
  const parentName = kind === 'project' ? 'Work' : 'Case studies'
  const parentPath = kind === 'project' ? '/projects' : '/case-studies'

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': kind === 'case-study' ? 'Article' : 'CreativeWork',
        '@id': `${url}#work`,
        headline: project.title,
        name: project.title,
        description: project.description,
        url,
        image,
        inLanguage: 'en-US',
        ...(kind === 'case-study' && date ? { datePublished: date } : {}),
        ...(kind === 'project' && project.year ? { dateCreated: project.year } : {}),
        author: { '@id': ORG_ID },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          '@id': ORG_ID,
        },
        about: { '@id': ORG_ID },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: SITE_NAME,
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: parentName,
            item: `${SITE_URL}${parentPath}`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.title,
            item: url,
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdScript(graph) }}
    />
  )
}
