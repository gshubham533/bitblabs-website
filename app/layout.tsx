import type { Metadata } from 'next'
import './globals.css'
import { googleSansFlex } from '@/lib/fonts'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  metadataBase: new URL('https://bitblabs.com'),
  title: {
    default: 'AI Strategy Session for Mid-Market & Enterprise | BitBLabs',
    template: '%s | BitBLabs',
  },
  description:
    'A $2,000 / 90-minute AI strategy session with a written 90-day automation roadmap. Led by BitBLabs’ founder. Optional production build & deploy.',
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
