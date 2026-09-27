import { FinalCta } from '../FinalCta'
import { JsonLd } from '../JsonLd'
import { PageShell } from '../PageShell'
import { ScrollDepthTracker } from '../ScrollDepthTracker'
import { RESULT_CARDS, visible } from '@/lib/proof'
import { Assist } from './Assist'
import { Faq } from './Faq'
import { Hero } from './Hero'
import { Intro } from './Intro'
import { OfferStats } from './OfferStats'
import { QuoteWall, Results } from './Proof'
import { SessionBento } from './SessionBento'
import { Stack } from './Stack'
import { Stories } from './Stories'
import { WorkflowTabs } from './WorkflowTabs'

export function HomePage() {
  const hasResults = visible(RESULT_CARDS).length > 0

  return (
    <PageShell>
      <JsonLd />
      <Hero />
      <Intro />
      <SessionBento />
      <WorkflowTabs />
      <Stack />
      <Results />
      <OfferStats padTop={!hasResults} />
      <Assist />
      <Stories />
      <QuoteWall />
      <Faq />
      <FinalCta />
      <ScrollDepthTracker />
    </PageShell>
  )
}
