import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/site'

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}

type PageMetaInput = {
  title: string
  description: string
  path: string
  image?: string
  imageAlt?: string
  noIndex?: boolean
  ogType?: 'website' | 'article'
}

export function pageMetadata({
  title,
  description,
  path,
  image = '/og/homepage.png',
  imageAlt,
  noIndex = false,
  ogType = 'website',
}: PageMetaInput): Metadata {
  const canonical = path.startsWith('/') ? path : `/${path}`
  const documentTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
  return {
    title: {
      absolute: documentTitle,
    },
    description,
    alternates: { canonical },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: ogType,
      locale: 'en_US',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt ?? title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
