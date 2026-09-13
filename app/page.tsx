import type { Metadata } from 'next'
import { StoryHomePage } from '@/components/home/StoryHomePage'
import { LEGAL_NAME, SITE_URL } from '@/lib/site'

const title = 'AI Workflow Strategy Session'
const description =
  'A structured diagnostic for mid-market ops leaders: map one workflow, prioritize AI and automation opportunities, and leave with a written Opportunity Brief. USD 2,000 · 60 minutes.'

export const metadata: Metadata = {
  title: {
    absolute: `${title} | BitBLabs`,
  },
  description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${title} | BitBLabs`,
    description,
    url: SITE_URL,
    siteName: 'BitBLabs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | BitBLabs`,
    description,
  },
}

function homeJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'BitBLabs',
        legalName: LEGAL_NAME,
        url: SITE_URL,
      },
      {
        '@type': 'Service',
        name: 'AI Workflow Strategy Session',
        description,
        provider: {
          '@type': 'Organization',
          name: 'BitBLabs',
          url: SITE_URL,
        },
        offers: {
          '@type': 'Offer',
          price: '2000',
          priceCurrency: 'USD',
          url: SITE_URL,
        },
      },
    ],
  }
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd()) }}
      />
      <StoryHomePage />
    </>
  )
}
