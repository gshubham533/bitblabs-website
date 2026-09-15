import type { Metadata } from 'next'
import { HomePage } from '@/components/home/HomePage'
import { LANDING_SEO } from '@/lib/landing'

export const metadata: Metadata = {
  title: {
    absolute: LANDING_SEO.title,
  },
  description: LANDING_SEO.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: LANDING_SEO.ogTitle,
    description: LANDING_SEO.ogDescription,
    url: '/',
    siteName: 'BitBlabs',
    type: 'website',
    images: [
      {
        url: '/og/homepage.png',
        width: 1200,
        height: 630,
        alt: 'BitBlabs AI Workflow Strategy Session',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: LANDING_SEO.ogTitle,
    description: LANDING_SEO.ogDescription,
    images: ['/og/homepage.png'],
  },
}

export default function Home() {
  return <HomePage />
}
