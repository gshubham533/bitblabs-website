/**
 * Editorial consultancy homepage: hairline grids, numbered sections, square CTAs.
 * Copy stays in lib/landing.ts.
 */
import { ColorBar } from '@/components/home/ui/Editorial'
import { HomeFooter } from '@/components/home/HomeFooter'
import { HomeHeader } from '@/components/home/HomeHeader'
import { JsonLd } from '@/components/home/JsonLd'
import { ScrollDepthTracker } from '@/components/home/ScrollDepthTracker'
import { FAQSection } from '@/components/home/sections/FAQSection'
import { FinalCTA } from '@/components/home/sections/FinalCTA'
import { FitSection } from '@/components/home/sections/FitSection'
import { FrictionGrid } from '@/components/home/sections/FrictionGrid'
import { HeroSection } from '@/components/home/sections/HeroSection'
import { PointOfViewPanel } from '@/components/home/sections/PointOfViewPanel'
import { RecruitmentCaseStudy } from '@/components/home/sections/RecruitmentCaseStudy'
import { StickyMobileCTA } from '@/components/home/sections/StickyMobileCTA'
import { StrategySessionOffer } from '@/components/home/sections/StrategySessionOffer'
import { WorkflowMethod } from '@/components/home/sections/WorkflowMethod'

export function HomePage() {
  return (
    <div className="bb-home min-h-screen">
      <JsonLd />
      <ColorBar />
      <HomeHeader />
      <main id="main-content">
        <div id="hero">
          <HeroSection />
        </div>
        <FrictionGrid />
        <PointOfViewPanel />
        <RecruitmentCaseStudy />
        <WorkflowMethod />
        <StrategySessionOffer />
        <FitSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <HomeFooter />
      <StickyMobileCTA />
      <ScrollDepthTracker />
    </div>
  )
}
