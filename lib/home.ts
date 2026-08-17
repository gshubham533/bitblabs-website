export const HOME_CLIENTS = [
  'Natsoft',
  'Setoo',
  'Healthy Fasal',
  'DigiProPass',
  'Axion Plan',
] as const

export const HOME_WORKFLOWS = [
  {
    title: 'Hiring',
    line: 'Recruiting follow-ups at volume.',
  },
  {
    title: 'Sales calling',
    line: 'Qualification that sits in your CRM.',
  },
  {
    title: 'Support',
    line: 'Routing and follow-ups that scale.',
  },
  {
    title: 'Supply chain',
    line: 'Orders, wallets, and live ops.',
  },
] as const

export const HOME_GLIMPSE_OUTCOMES: Record<string, string> = {
  'natvoiz-ai': 'Voice hiring at a 2,000-person firm. Manual follow-ups down 35–45%.',
  'setoo-voice-ai': 'Voice APIs reused across three organizations.',
  'healthy-fasal': 'Farm-to-vendor ops running live volume.',
}

export const HOME_GLIMPSE_COUNT = 3

export const HOME_PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    description: 'We map the workflow, the constraints, and where off-the-shelf tools fail.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'The system, the handoffs, and where humans stay in the loop.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Production AI in your stack, shipped in tight loops.',
  },
  {
    number: '04',
    title: 'Run',
    description: 'A live system your team can operate, then expand to the next workflow.',
  },
] as const
