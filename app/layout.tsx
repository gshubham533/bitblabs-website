import type { Metadata } from 'next'
import './globals.css'
import { fontVariables, spaceGrotesk } from '@/lib/fonts'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: {
    default: 'BitBLabs | AI Workflow Strategy Session',
    template: '%s | BitBLabs',
  },
  description:
    'BitBLabs helps mid-market ops leaders find the AI opportunities worth funding — one workflow, a written Opportunity Brief, USD 2,000.',
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
    <html lang="en" className={fontVariables}>
      <body className={`${spaceGrotesk.className} bg-paper text-ink antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
