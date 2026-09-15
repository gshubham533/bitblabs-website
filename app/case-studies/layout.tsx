import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Case studies',
  description:
    'First-hand write-ups of how BitBlabs maps stuck operational workflows and builds practical AI systems around them.',
  path: '/case-studies',
})

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children
}
