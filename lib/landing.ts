/** Locked homepage copy. Do not rewrite positioning or claims. */

export const LANDING_SEO = {
  title: 'AI Strategy Session for Mid-Market & Enterprise | BitBLabs',
  description:
    'A $2,000 / 90-minute AI strategy session with a written 90-day automation roadmap. Led by BitBLabs’ founder. Optional production build & deploy.',
} as const

export const HERO = {
  eyebrow: 'AI Strategy for Mid-Market & Enterprise Teams',
  headline: 'Stop guessing where AI belongs in your business.',
  subhead:
    'In one focused session, we map how your company actually operates, pinpoint the workflows worth automating, and hand you a clear plan — what to build, what to skip, and what it takes to ship.',
  microcopy:
    '90 minutes · Written roadmap in 48 hours · Led by Shubham Gupta, Founder · Optional build & deploy',
} as const

export const SOCIAL_PROOF = {
  label: 'Production AI built for:',
  clients: ['Natsoft', 'Setoo', 'Healthy Fasal', 'DigiProPass', 'Axion Plan'] as const,
  note: 'Including a 2,000+ person US enterprise running AI voice hiring at scale — manual follow-ups down 35–45%.',
} as const

export const WHO_THIS_IS_FOR = {
  headline: 'Built for operators who own outcomes — not curiosity calls.',
  intro: 'Ideal if you are:',
  ideal: [
    'A founder, COO, Head of Ops, or product/engineering lead at a mid-size or large company',
    'Sitting on expensive hiring, sales, support, or supply-chain workflows',
    'Under pressure to adopt AI without betting the budget on the wrong project',
    'Ready to work across US / Gulf-friendly hours with a team that can advise and ship',
  ] as const,
  notFit:
    'Not a fit if you want: a free brainstorm, a generic GenAI workshop, or slides with no path to production.',
} as const

export const WALK_AWAY = {
  items: [
    {
      title: 'Operations clarity',
      body: 'How work moves today: people, tools, handoffs, bottlenecks.',
    },
    {
      title: 'Automation map',
      body: 'High-ROI processes to automate first — and what to leave alone.',
    },
    {
      title: 'Build vs buy',
      body: 'Where off-the-shelf fails, and where custom AI in your stack wins.',
    },
    {
      title: '90-day roadmap',
      body: 'Priorities, rough effort, risk, and sequence.',
    },
    {
      title: 'Optional next mile',
      body: 'Same team can design, build, and deploy from that plan.',
    },
  ] as const,
} as const

export const HOW_IT_WORKS = {
  steps: [
    {
      title: 'Short application',
      body: 'Company, role, and 1–2 workflows that hurt. Confirm fit before payment — no random $2k checkout.',
    },
    {
      title: 'Book & brief',
      body: 'Once accepted, pay and share context. We prepare before the call.',
    },
    {
      title: 'Strategy session — 90 minutes',
      body: 'With Shubham Gupta, Founder. Dig into how the company runs and where AI removes cost or latency — and where humans stay in the loop.',
    },
    {
      title: 'Written plan — within 48 hours',
      body: 'Concise roadmap they can act on internally or with us.',
    },
    {
      title: 'Build path (optional)',
      body: 'If they proceed with BitBLabs within 30 days, $2,000 is credited toward the build engagement.',
    },
  ] as const,
} as const

export const WORKING_WITH_US = {
  items: [
    {
      title: 'Timezones',
      body: 'Sessions scheduled for US and Middle East–friendly hours.',
    },
    {
      title: 'NDA',
      body: 'Standard NDA before internal process detail.',
    },
    {
      title: 'Contracting & payment',
      body: 'Clear SOW for any build; card or wire for the strategy session.',
    },
    {
      title: 'Who you get',
      body: 'Strategy led by the founder — not handed to a junior “AI consultant.”',
    },
  ] as const,
} as const

export const PROOF = {
  cases: [
    {
      name: 'Natvoiz (Natsoft)',
      body: 'Enterprise AI voice hiring for a US firm, 2,000+ employees. Manual follow-ups cut 35–45%.',
      href: '/projects/natvoiz-ai',
    },
    {
      name: 'Setoo',
      body: 'AI voice backend reused across multiple organisations.',
      href: '/projects/setoo-voice-ai',
    },
    {
      name: 'Healthy Fasal',
      body: 'Live farm-to-vendor ops at real volume.',
      href: '/projects/healthy-fasal',
    },
    {
      name: 'Also: DigiProPass, Axion Plan, and products like Rezonna (24/7 AI sales caller).',
      body: '',
      href: '/projects',
    },
  ] as const,
  closing: 'We ship systems your team can operate — not decks that die in a Drive folder.',
} as const

export const PRICING = {
  name: 'AI Strategy Session — $2,000',
  includes:
    'Includes: fit review before pay · 90-min session with founder · pre-call prep · written roadmap in 48h · $2,000 credited toward a BitBLabs build if started within 30 days.',
  guarantee: 'If the session isn’t useful, tell us — we’ll make it right.',
} as const

export const STRATEGY_TO_PRODUCTION = {
  stages: ['Discover', 'Design', 'Build', 'Run'] as const,
  body: 'Hiring follow-ups, sales qualification, support routing, supply-chain ops — production AI in your stack, tight loops, same team that ran the session.',
} as const

export const FAQ = {
  items: [
    {
      question: 'Why paid?',
      answer:
        'Free calls attract tyre-kickers. A paid session buys preparation and a deliverable you can use even if you never hire us to build.',
    },
    {
      question: 'Who should attend?',
      answer: 'Someone who owns the workflow and can decide. Ideally ops + a technical counterpart.',
    },
    {
      question: 'Where do you focus?',
      answer:
        'Priority clients are mid-market and enterprise teams in the US, Middle East, and similar markets. Fit matters more than geography.',
    },
    {
      question: 'Not ready to build?',
      answer: 'Fine. You still leave with a roadmap your team or another vendor can use.',
    },
    {
      question: 'NDA?',
      answer: 'Yes, before deep process detail.',
    },
  ] as const,
} as const

export const FINAL_CTA = {
  headline: 'Know exactly where AI pays off in your company.',
  subhead: 'Apply for the session. Bring the messy workflows. Leave with a plan.',
} as const

export const APPLY_FORM = {
  companyLabel: 'Company',
  roleLabel: 'Role',
  emailLabel: 'Work email',
  workflowsLabel: '1–2 workflows that hurt',
  submitLabel: 'Submit application',
  successTitle: 'Application received.',
  successBody:
    'We’ll review fit before any payment. If it’s a match, we’ll follow up with next steps.',
} as const
