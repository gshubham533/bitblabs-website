import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Side Quests',
  description: 'Personal AI experiments from BitBlabs. Coming soon.',
  path: '/side-quests',
  noIndex: true,
})

export default function SideQuestsLayout({ children }: { children: React.ReactNode }) {
  return children
}
