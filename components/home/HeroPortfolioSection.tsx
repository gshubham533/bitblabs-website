import { Navbar } from '@/components/layout/Navbar'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { HeroContent } from '@/components/showcase/HeroGallery'
import { ClientStrip } from '@/components/home/ClientStrip'
import { WorkGlimpses } from '@/components/home/WorkGlimpses'
import { Testimonials } from '@/components/sections/Testimonials'
import { ContactCTA } from '@/components/sections/ContactCTA'

export function HeroPortfolioSection() {
  return (
    <>
      <Navbar />
      <HeroContent />
      <ClientStrip />
      <WorkGlimpses />
      <Testimonials onlyId="healthy-fasal" />
      <ContactCTA />
      <SiteFooter showLegalInfo />
    </>
  )
}
