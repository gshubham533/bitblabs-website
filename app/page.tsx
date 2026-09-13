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
    title: LANDING_SEO.title,
    description: LANDING_SEO.description,
    url: '/',
    siteName: 'BitBLabs',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: LANDING_SEO.title,
    description: LANDING_SEO.description,
  },
}

export default function Home() {
  return <HomePage />
}
