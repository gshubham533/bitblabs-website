import { FAQ, LANDING_SEO } from '@/lib/landing'
import { jsonLdScript } from '@/lib/seo'
import {
  BOOK_HREF,
  CONTACT_PHONE,
  LEGAL_ADDRESS,
  LEGAL_NAME,
  ORG_ID,
  SITE_NAME,
  SITE_URL,
  WEBSITE_ID,
} from '@/lib/site'
import { founders } from '@/lib/founders'

const PERSON_IDS = Object.fromEntries(
  founders.map((founder) => [founder.id, `${SITE_URL}/#person-${founder.id}`]),
)

export function JsonLd() {
  const people = founders.map((founder) => ({
    '@type': 'Person',
    '@id': PERSON_IDS[founder.id],
    name: founder.name,
    jobTitle: founder.role,
    description: founder.bio,
    url: founder.linkedIn,
    sameAs: [founder.linkedIn],
    worksFor: { '@id': ORG_ID },
  }))

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': ORG_ID,
        name: SITE_NAME,
        legalName: LEGAL_NAME,
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/logos/bitblabs-logo.svg`,
        },
        image: `${SITE_URL}/og/homepage.png`,
        description:
          'BitBlabs is an AI workflow consultancy for growing service businesses. We map one high-impact workflow, redesign how it should move, and build practical AI systems around it.',
        telephone: CONTACT_PHONE,
        address: {
          '@type': 'PostalAddress',
          ...LEGAL_ADDRESS,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: CONTACT_PHONE,
          contactType: 'sales',
          availableLanguage: ['English'],
        },
        areaServed: {
          '@type': 'Place',
          name: 'Worldwide',
        },
        founder: people.map((person) => ({ '@id': person['@id'] })),
        knowsAbout: [
          'AI workflow strategy',
          'Workflow automation',
          'Service business operations',
          'Recruitment coordination',
          'Conversational AI',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        name: SITE_NAME,
        url: SITE_URL,
        description: LANDING_SEO.description,
        inLanguage: 'en-US',
        publisher: { '@id': ORG_ID },
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: LANDING_SEO.title,
        description: LANDING_SEO.description,
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': ORG_ID },
        primaryImageOfPage: `${SITE_URL}/og/homepage.png`,
        inLanguage: 'en-US',
      },
      {
        '@type': 'Service',
        '@id': `${SITE_URL}/#strategy-session`,
        name: 'AI Workflow Strategy Session',
        serviceType: 'AI workflow consulting',
        description:
          'A focused 90-minute working session to map one high-impact workflow, identify bottlenecks, decide where AI belongs, and produce a practical 30/60/90-day roadmap.',
        provider: { '@id': ORG_ID },
        areaServed: {
          '@type': 'Place',
          name: 'Worldwide',
        },
        offers: {
          '@type': 'Offer',
          price: '2000',
          priceCurrency: 'USD',
          url: BOOK_HREF,
          availability: 'https://schema.org/InStock',
        },
      },
      ...people,
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/#faq`,
        mainEntity: FAQ.items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
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
