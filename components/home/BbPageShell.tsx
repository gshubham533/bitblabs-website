import { HomeFooter } from '@/components/home/HomeFooter'
import { HomeHeader } from '@/components/home/HomeHeader'
import { archivo, barlowCondensed } from '@/lib/fonts'
import type { ReactNode } from 'react'

type BbPageShellProps = {
  children: ReactNode
  /** When false, omit the site footer (caller renders its own). Default true. */
  showFooter?: boolean
  className?: string
}

/**
 * Shared ops war-room chrome for homepage-aligned inner routes.
 * Applies `.bb-home` tokens, Archivo + Barlow Condensed, and inner nav.
 */
export function BbPageShell({ children, showFooter = true, className }: BbPageShellProps) {
  return (
    <div
      className={`bb-home min-h-screen ${archivo.variable} ${barlowCondensed.variable} ${archivo.className}${className ? ` ${className}` : ''}`}
    >
      <HomeHeader variant="inner" />
      <main id="main-content">{children}</main>
      {showFooter ? <HomeFooter /> : null}
    </div>
  )
}
