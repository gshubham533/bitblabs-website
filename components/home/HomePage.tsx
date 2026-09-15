/**
 * THESIS: Ops war-room homepage that makes stuck work visible on a live swimlane board and books a $2,000 strategy session, refusing neon AI chrome and soft SaaS card stacks.
 * OWN-WORLD: Matte whiteboard #F4F0E8, magnetic lane rails, amber blocker chips, cobalt flow tape #2457E6, mint cleared chips, Archivo + Barlow Condensed, squared magnets not capsule pills.
 * STORY: Visitor recognizes their stuck lanes, believes BitBlabs redesigns handoffs not tools, sees anonymized proof early, and books.
 * FIRST VIEWPORT: Full-bleed swimlane board as the thesis; BitBlabs as board title; one headline; one supporting line; Book + See How It Works; primary action clears a lane.
 * FORM: Ops War-Room Swimlanes · grounded list #1 · seed b34b492c
 * FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
 */
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
import { archivo, barlowCondensed } from '@/lib/fonts'

export function HomePage() {
  return (
    <div
      className={`bb-home min-h-screen ${archivo.variable} ${barlowCondensed.variable} ${archivo.className}`}
    >
      <JsonLd />
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
