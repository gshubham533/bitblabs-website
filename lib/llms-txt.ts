import { caseStudies } from '@/lib/data'
import { LANDING_SEO } from '@/lib/landing'
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

> BitBlabs is an AI workflow consultancy for growing service businesses. We find where work gets stuck between people, inboxes, and spreadsheets, redesign that workflow, and build practical AI systems around it.

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
- Approach: understand the current workflow, prioritise one bottleneck, redesign handoffs with human checkpoints, then build if asked
- We do not start from a preselected AI tool. If AI is not the right fix, we say so.

## Founders
${people.join('\n')}

## Optional
- Booking: ${SITE_URL}/#offer
`
}
