import type { Metadata } from 'next'
import './globals.css'
import { googleSansFlex } from '@/lib/fonts'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: {
    default: 'BitBLabs | Custom AI for Workflows',
    template: '%s | BitBLabs',
  },
  description:
    'BitBLabs builds custom AI systems for operational workflows — hiring, sales, support, supply chain — when off-the-shelf tools stop being enough.',
  icons: {
    icon: '/logos/bitblabs-logo.svg',
    apple: '/logos/bitblabs-logo.svg',
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
