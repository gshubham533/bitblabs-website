'use client'

import { Navbar } from '@/components/layout/Navbar'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { HeroContent } from '@/components/showcase/HeroGallery'
import { ClientStrip } from '@/components/home/ClientStrip'
import { WorkflowsGrid } from '@/components/home/WorkflowsGrid'
import { WorkGlimpses } from '@/components/home/WorkGlimpses'
import { HowWeWorkStrip } from '@/components/home/HowWeWorkStrip'
import { ContactCTA } from '@/components/sections/ContactCTA'

export function HeroPortfolioSection() {
  return (
    <>
      <section
        className="relative sticky top-0 z-0 w-full overflow-hidden bg-black"
        style={{ height: '100vh', minHeight: '100dvh' }}
      >
        <Navbar position="absolute" theme="dark" />
        <HeroContent />
      </section>
      <div className="relative z-10 w-full rounded-t-[2rem] bg-white md:rounded-t-[2.5rem]">
        <ClientStrip />
        <WorkflowsGrid />
        <WorkGlimpses />
        <HowWeWorkStrip />
        <ContactCTA />
        <SiteFooter showLegalInfo />
      </div>
    </>
  )
}
