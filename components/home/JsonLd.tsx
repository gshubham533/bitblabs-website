import { FAQ, LANDING_SEO } from '@/lib/landing'
import { CONTACT_PHONE, LEGAL_NAME } from '@/lib/site'
import { founders } from '@/lib/founders'

export function JsonLd() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BitBlabs',
    legalName: LEGAL_NAME,
    url: 'https://bitblabs.com',
    logo: 'https://bitblabs.com/logos/bitblabs-logo.svg',
    description:
      'BitBlabs helps growing service businesses find operational bottlenecks, redesign workflows, and build practical AI systems.',
    telephone: CONTACT_PHONE,
    founder: founders.map((f) => ({
      '@type': 'Person',
      name: f.name,
      jobTitle: f.role,
      sameAs: f.linkedIn,
    })),
    sameAs: founders.map((f) => f.linkedIn),
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'BitBlabs',
    url: 'https://bitblabs.com',
    description: LANDING_SEO.description,
  }

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Workflow Strategy Session',
    description:
      'A focused 90-minute working session to map one high-impact workflow, identify bottlenecks, and produce a practical roadmap for AI and automation.',
    provider: {
      '@type': 'Organization',
      name: 'BitBlabs',
    },
    offers: {
      '@type': 'Offer',
      price: '2000',
      priceCurrency: 'USD',
      url: 'https://tidycal.com/shubhamgupta/ai-workflow-strategy-session',
    },
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  )
}
