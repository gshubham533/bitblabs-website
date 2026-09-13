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
    <main className="min-h-screen bg-[#f5f6f8]">
      <Navbar theme="light" position="fixed" solid />
      <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-4 pb-8 pt-20 sm:gap-8 sm:px-6 sm:pt-24 md:pb-12 lg:px-8">
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
        <div className="overflow-hidden rounded-[2rem] md:rounded-[2.5rem]">
          <SiteFooter showLegalInfo />
        </div>
      </div>
    </main>
  )
}
