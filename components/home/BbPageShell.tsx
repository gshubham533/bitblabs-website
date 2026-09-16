import { ColorBar } from '@/components/home/ui/Editorial'
import { HomeFooter } from '@/components/home/HomeFooter'
import { HomeHeader } from '@/components/home/HomeHeader'
import type { ReactNode } from 'react'

type BbPageShellProps = {
  children: ReactNode
  /** When false, omit the site footer (caller renders its own). Default true. */
  showFooter?: boolean
  className?: string
}

/** Shared editorial chrome for homepage-aligned inner routes. */
export function BbPageShell({ children, showFooter = true, className }: BbPageShellProps) {
  return (
    <div className={`bb-home min-h-screen${className ? ` ${className}` : ''}`}>
      <ColorBar />
      <HomeHeader variant="inner" />
      <main id="main-content">{children}</main>
      {showFooter ? <HomeFooter /> : null}
    </div>
  )
}
