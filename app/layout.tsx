import type { Metadata } from 'next'
import { LANDING_SEO } from '@/lib/landing'
import { SITE_NAME, SITE_URL } from '@/lib/site'
import './globals.css'
import { LinkedInInsightTag } from '@/components/LinkedInInsightTag'
import { googleSansFlex } from '@/lib/fonts'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: LANDING_SEO.title,
    template: `%s | ${SITE_NAME}`,
  },
  description: LANDING_SEO.description,
  icons: {
    icon: '/logos/bitblabs-logo.svg',
    apple: '/logos/bitblabs-logo.svg',
  },
  openGraph: {
    siteName: SITE_NAME,
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={googleSansFlex.variable}>
      <body className={`${googleSansFlex.className} antialiased`}>
        {children}
        <Analytics />
        <LinkedInInsightTag />
      </body>
    </html>
  )
}
