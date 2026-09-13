/** Consultancy homepage — Strategy Session sales story. One conversion: Apply. */

export const HOME_HERO = {
  lines: ['AI pilots everywhere.', 'In every department.', 'Still no'],
  accent: 'priority you can defend.',
  note: 'AI Workflow Strategy Session',
  subline:
    'For COOs, Heads of Talent, and Sales Ops at mid-market companies. One operational workflow. A written Opportunity Brief you can take to leadership.',
  pricingCue: 'USD 2,000 · 60 minutes · written brief',
} as const

export const HOME_CLIENTS = [
  'Natsoft',
  'Setoo',
  'Healthy Fasal',
  'DigiProPass',
  'Axion Plan',
] as const

export const HOME_PROOF_STAT =
  'Voice hiring at a 2,000-person firm — manual follow-ups down 35–45%.'

/** Early trust quote — named attribution (Setoo), not anonymous leadership. */
export const HOME_EARLY_QUOTE_ID = 'setoo' as const

export const HOME_PROBLEM = {
  title: 'Pilots without a priority',
  lines: ['Scattered pilots.', 'Unclear priorities.', 'Wrong investments.'],
  accent: 'Sound familiar?',
  note: 'the cost of uncertainty',
  pains: [
    'Every team has an AI experiment. Nobody owns the priority list.',
    'Vendors pitch a platform before anyone maps how the work actually runs.',
    'Recruiters, sales, and support still chase follow-ups by hand.',
    'You are asked to fund AI without a brief you can defend upstairs.',
  ],
} as const

export const HOME_DELIVERABLES = {
  title: 'What you receive',
  intro:
    'The session is a consulting deliverable, not access to an expert for an hour. You leave with a written brief your leadership team can act on.',
  items: [
    {
      title: 'Pre-session assessment',
      description:
        'A short intake on your workflow, constraints, and decision objective so the working session starts with context, not discovery.',
    },
    {
      title: '60-minute working session',
      description:
        'A structured conversation focused on one operational workflow — not a generic AI capabilities tour.',
    },
    {
      title: 'Prioritized opportunities',
      description:
        'Options ranked by impact, feasibility, risk, and implementation effort — including where traditional automation or process redesign may beat AI.',
    },
    {
      title: 'Recommended pilot',
      description:
        'One concrete next step sized for a 2–6 month production engagement, not a proof-of-concept shelf ornament.',
    },
    {
      title: 'Written Opportunity Brief',
      description:
        'A shareable document that converts the session into decision support your team can act on.',
    },
  ],
} as const

export const HOME_STEPS = [
  {
    number: '01',
    title: 'Assessment',
    description:
      'You complete a focused intake on the workflow, company context, and what decision the brief must support.',
  },
  {
    number: '02',
    title: 'Working session',
    description:
      'We map the workflow, surface viable options across AI, integrations, automation, and process redesign, and pressure-test feasibility.',
  },
  {
    number: '03',
    title: 'Opportunity Brief',
    description:
      'You receive a written brief with prioritized opportunities, a recommended pilot, and the rationale behind each call.',
  },
  {
    number: '04',
    title: 'Implementation discussion',
    description:
      'Optional follow-up on scope, timeline, and whether BitBLabs is the right team to build the pilot — only if the fit is there.',
  },
] as const

/** Deeper proof strip — three production stories, in this order. */
export const HOME_PROOF_SLUGS = ['natvoiz-ai', 'setoo-voice-ai', 'healthy-fasal'] as const

export const HOME_PROOF_OUTCOMES: Record<(typeof HOME_PROOF_SLUGS)[number], string> = {
  'natvoiz-ai':
    'Voice hiring at a 2,000-person firm. Manual follow-ups down 35–45%. Built for Natsoft.',
  'setoo-voice-ai':
    'Voice APIs reused across three organizations — Setoo, then BU Bhandari, then Vani Connect.',
  'healthy-fasal': 'Farm-to-vendor procurement and distribution running live operational volume.',
}

export function isHomeProofSlug(slug: string): slug is (typeof HOME_PROOF_SLUGS)[number] {
  return (HOME_PROOF_SLUGS as readonly string[]).includes(slug)
}

export function getHomeProofOutcome(slug: string): string | undefined {
  if (!isHomeProofSlug(slug)) return undefined
  return HOME_PROOF_OUTCOMES[slug]
}

export const HOME_RISK = {
  title: 'Responsible implementation',
  principles: [
    {
      title: 'Human oversight where it matters',
      description:
        'Sensitive, consequential, or hard-to-reverse actions stay with your team. AI supports the workflow; it does not bypass accountability.',
    },
    {
      title: 'Privacy and confidentiality',
      description:
        'Session materials are handled under mutual confidentiality. We do not use your operational data to train public models.',
    },
    {
      title: 'Feasibility before hype',
      description:
        'Not every problem needs AI. We evaluate integrations, traditional automation, and process redesign alongside generative tools.',
    },
    {
      title: 'No inflated claims',
      description:
        'We share only verified outcomes from shipped work. The brief states assumptions explicitly so you can defend the decision internally.',
    },
  ],
} as const

export const HOME_APPLY_SUPPORT =
  'Tell us briefly about the workflow you want to improve. If the session is suitable, we will send you the payment and scheduling link. If clarification is needed, we may invite you to a short alignment call.'

export const HOME_FINAL_CTA = {
  lines: ['Leave with a', 'priority you can defend.'],
  accent: 'Apply.',
  pricingLine: 'USD 2,000 · includes written AI Workflow Opportunity Brief',
  body: HOME_APPLY_SUPPORT,
} as const

/** @deprecated Use HOME_PROOF_SLUGS — kept for any legacy imports during transition. */
export const HOME_GLIMPSE_OUTCOMES = HOME_PROOF_OUTCOMES

/** @deprecated */
export function isHomeGlimpseSlug(slug: string): slug is (typeof HOME_PROOF_SLUGS)[number] {
  return isHomeProofSlug(slug)
}

/** @deprecated */
export function getHomeGlimpseOutcome(slug: string): string | undefined {
  return getHomeProofOutcome(slug)
}

export const HOME_GLIMPSE_COUNT = 3

/** Legacy aliases for unused home strips that still import these names. */
export const HOME_PROCESS_STEPS = HOME_STEPS

export const HOME_WORKFLOWS = [
  { title: 'Hiring', line: 'Recruiting follow-ups at volume.' },
  { title: 'Sales calling', line: 'Qualification that sits in your CRM.' },
  { title: 'Support', line: 'Routing and follow-ups that scale.' },
  { title: 'Supply chain', line: 'Orders, wallets, and live ops.' },
] as const
