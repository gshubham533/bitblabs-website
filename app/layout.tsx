import type { Metadata } from 'next'
import './globals.css'
import { googleSansFlex } from '@/lib/fonts'
import { Analytics } from '@vercel/analytics/next'
import { LANDING_SEO } from '@/lib/landing'

export const metadata: Metadata = {
  metadataBase: new URL('https://bitblabs.com'),
  title: {
    default: LANDING_SEO.title,
    template: '%s | BitBLabs',
  },
  description: LANDING_SEO.description,
  icons: {
    icon: '/logos/bitblabs-logo.svg',
    apple: '/logos/bitblabs-logo.svg',
  },
  openGraph: {
    siteName: 'BitBLabs',
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
      </body>
    </html>
  )
}
