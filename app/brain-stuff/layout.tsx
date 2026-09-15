import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Brain Stuff',
  description: 'AI principles and mental models from BitBlabs. Coming soon.',
  path: '/brain-stuff',
  noIndex: true,
})

export default function BrainStuffLayout({ children }: { children: React.ReactNode }) {
  return children
}
