import { Navbar } from '@/components/layout/Navbar'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { Faq } from '@/components/landing/Faq'
import { FinalCta } from '@/components/landing/FinalCta'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { LandingHero } from '@/components/landing/LandingHero'
import { Pricing } from '@/components/landing/Pricing'
import { ProofHighlights } from '@/components/landing/ProofHighlights'
import { SocialProofStrip } from '@/components/landing/SocialProofStrip'
import { StrategyToProduction } from '@/components/landing/StrategyToProduction'
import { WalkAwayWith } from '@/components/landing/WalkAwayWith'
import { WhoThisIsFor } from '@/components/landing/WhoThisIsFor'
import { WorkingWithUs } from '@/components/landing/WorkingWithUs'

export function LandingPage() {
  return (
    <main className="min-h-screen bg-canvas">
      <Navbar theme="light" position="fixed" solid />
      <div className="mx-auto flex max-w-[1480px] flex-col gap-4 px-3 pb-6 pt-20 sm:px-5 sm:pt-24 md:gap-5 md:px-6 md:pb-8 lg:px-8">
        <LandingHero />
        <SocialProofStrip />
        <WhoThisIsFor />
        <WalkAwayWith />
        <HowItWorks />
        <WorkingWithUs />
        <ProofHighlights />
        <Pricing />
        <StrategyToProduction />
        <Faq />
        <FinalCta />
        <div className="overflow-hidden rounded-4xl md:rounded-5xl">
          <SiteFooter showLegalInfo />
        </div>
      </div>
    </main>
  )
}
