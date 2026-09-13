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
    <main className="bg-white">
      <Navbar theme="dark" position="fixed" solid />
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
      <SiteFooter showLegalInfo />
    </main>
  )
}
