import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Work',
  description:
    'Selected workflow, product, and AI systems BitBlabs has built for service operations — from recruitment coordination to production platforms.',
  path: '/projects',
})

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
