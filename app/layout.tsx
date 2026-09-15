import type { Metadata } from 'next'
import './globals.css'
import { LinkedInInsightTag } from '@/components/LinkedInInsightTag'
import { googleSansFlex } from '@/lib/fonts'
import { Analytics } from '@vercel/analytics/next'
import { LANDING_SEO } from '@/lib/landing'

export const metadata: Metadata = {
  metadataBase: new URL('https://bitblabs.com'),
  title: {
    default: LANDING_SEO.title,
    template: '%s | BitBlabs',
  },
  description: LANDING_SEO.description,
  icons: {
    icon: '/logos/bitblabs-logo.svg',
    apple: '/logos/bitblabs-logo.svg',
  },
  openGraph: {
    siteName: 'BitBlabs',
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
        <script
          dangerouslySetInnerHTML={{
            __html: `<!--
THESIS: Ops war-room homepage that makes stuck work visible on a live swimlane board and books a $2,000 strategy session — refusing neon AI chrome and soft SaaS card stacks.
OWN-WORLD: Matte whiteboard #F4F0E8, magnetic lane rails, amber blocker chips, cobalt flow tape #2457E6, mint cleared chips, Archivo + Barlow Condensed, squared magnets not capsule pills.
STORY: Visitor recognizes their stuck lanes, believes BitBlabs redesigns handoffs not tools, sees anonymized proof early, and books.
FIRST VIEWPORT: Full-bleed swimlane board as the thesis; BitBlabs as board title; one headline; one supporting line; Book + See How It Works; primary action clears a lane.
FORM: Ops War-Room Swimlanes · grounded list #1 · seed b34b492c
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`,
          }}
        />
        {children}
        <Analytics />
        <LinkedInInsightTag />
      </body>
    </html>
  )
}
