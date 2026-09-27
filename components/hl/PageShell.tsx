import type { ReactNode } from 'react'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="hl isolate min-h-screen">
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </div>
  )
}

/** Inner-page title block from the template's Privacy / Waitlist pages. */
export function InnerHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: ReactNode
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="pb-6 pt-32 md:pb-16 md:pt-40 lg:pt-50">
      <div className="hl-container">
        <div className="mx-auto max-w-4xl text-center">
          {eyebrow ? <div className="mb-4.5">{eyebrow}</div> : null}
          <h1 className="mb-2.5 text-4xl font-medium tracking-tight text-zinc-900 md:text-5xl lg:text-[90px] lg:leading-[1.1]">
            {title}
          </h1>
          {description ? (
            <div className="mx-auto mb-5 max-w-2xl text-base md:mb-7.5 md:text-xl">{description}</div>
          ) : null}
          {children ? (
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-5">{children}</div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
