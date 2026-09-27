import { caseStudies } from '@/lib/data'
import { LANDING_SEO, STACK } from '@/lib/landing'
import { portfolioProjects } from '@/lib/portfolio-data'
import {
  CONTACT_PHONE_DISPLAY,
  LEGAL_ADDRESS_LINES,
  LEGAL_NAME,
  SITE_URL,
} from '@/lib/site'
import { founders } from '@/lib/founders'

export function buildLlmsTxt() {
  const pages = [
    `- [Home](${SITE_URL}/): ${LANDING_SEO.description}`,
    `- [Work](${SITE_URL}/projects): Selected workflow, product, and AI systems BitBlabs has built.`,
    `- [Case studies](${SITE_URL}/case-studies): First-hand write-ups of operational AI work.`,
    `- [Privacy policy](${SITE_URL}/privacy)`,
    `- [Terms](${SITE_URL}/terms)`,
  ]

  const projects = portfolioProjects.map(
    (project) =>
      `- [${project.title}](${SITE_URL}/projects/${project.slug}): ${project.tagline}`,
  )

  const studies = caseStudies.map(
    (study) =>
      `- [${study.title}](${SITE_URL}/case-studies/${study.slug}): ${study.description}`,
  )

  const people = founders.map(
    (founder) => `- [${founder.name}](${founder.linkedIn}): ${founder.role}. ${founder.bio}`,
  )

  return `# BitBlabs

> BitBlabs helps growing service businesses put AI inside the workflows they already run. We identify repetitive, manual, and inefficient workflows, find where AI can remove manual effort or improve decisions, then design and implement the AI solution.

The first paid step is a 90-minute AI Workflow Strategy Session ($2,000). The fee is credited toward a BitBlabs implementation started within 30 days. Implementation is scoped separately.

## Main pages
${pages.join('\n')}

## Work
${projects.join('\n')}

## Case studies
${studies.join('\n')}

## Key facts
- Legal name: ${LEGAL_NAME}
- Location: ${LEGAL_ADDRESS_LINES.join(', ')}
- Phone: ${CONTACT_PHONE_DISPLAY}
- Offer: AI Workflow Strategy Session, 90 minutes, $2,000 USD
- Typical clients: growing service businesses, roughly 20–80 people
- Approach: map the existing workflow, identify AI opportunities, redesign it with AI and human checkpoints, then implement it
- Example use cases: AI voice agents for lead qualification, AI extraction of RFQ requirements, AI-drafted support replies with human approval, AI candidate screening
- We do not start from a preselected AI tool. If AI is not the right fix, we say so.
- Tools we build with (a sample, not a limit): ${STACK.groups.flatMap((g) => g.items.map((i) => i.name)).join(', ')}. We integrate with any system that has an API.

## Founders
${people.join('\n')}

## Optional
- Booking: ${SITE_URL}/#offer
`
}
