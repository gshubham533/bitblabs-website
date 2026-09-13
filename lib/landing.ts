/** Locked homepage copy v2. Do not rewrite positioning or claims. */

export const LANDING_SEO = {
  title: 'AI Strategy Session — $2,000 Decision-Grade Roadmap | BitBLabs',
  description:
    'Paid 90-minute session for service-business CEOs and COOs. Walk away with an ops audit, automation map, and 90-day plan — or have BitBLabs build it.',
} as const

export const HERO = {
  eyebrow: 'For founder-led service businesses',
  headline: 'Hiring follow-ups are eating your team alive. ChatGPT didn’t fix it.',
  subhead:
    'If recruiters are still chasing candidates by hand — and sales lead response or support handoffs are in the same mess — you don’t need another AI demo. You need a clear call on what to automate first, and what to leave alone.',
  bridge:
    'BitBLabs runs a paid AI Strategy Session for CEOs and working COOs who want a decision-grade plan in days, not a deck that dies in Drive.',
  cta: 'Book the AI Strategy Session',
} as const

export const OFFER = {
  name: 'The AI Strategy Session — $2,000',
  promise:
    'Stop guessing which AI project to fund. Walk away with a roadmap your team can run — or we build it.',
  includes: [
    'Prep on your workflows before we meet',
    '90 minutes with Shubham Gupta, Founder',
    'A written plan within 48 hours: ops audit · automation map · build vs buy · 90-day plan',
    'A short catch-up to walk the plan',
  ] as const,
  price:
    '$2,000. If you start a BitBLabs build within 30 days, that $2,000 is credited toward the project.',
  next:
    'Builds typically start from ~$10k+, scoped from the same plan — no second discovery circus.',
} as const

export const PROOF = {
  title: 'We’ve shipped this kind of system — not just talked about it',
  natvoiz: {
    label: 'Natvoiz / Natsoft',
    who: 'A large firm drowning in high-volume recruiting follow-ups.',
    broken: 'Manual hiring chases eating recruiter time and letting candidates go cold.',
    built:
      'Production voice AI that runs hiring follow-ups inside the workflow — not a chatbot bolted on the side.',
    result: 'Manual follow-ups down 35–45%.',
    href: '/projects/natvoiz-ai',
  },
  also: [
    {
      name: 'Setoo',
      body: 'Voice AI backend reused across multiple organisations.',
      href: '/projects/setoo-voice-ai',
    },
    {
      name: 'Healthy Fasal',
      body: 'Live ops workflows running at real volume in farm-to-vendor supply chain.',
      href: '/projects/healthy-fasal',
    },
  ] as const,
  closing:
    'We build systems your team can operate. We don’t sell “AI strategy” that never leaves the slide.',
} as const

export const PROCESS = {
  steps: [
    {
      title: 'Book & pay on TidyCal',
      body: 'Pick a slot, answer questions, PayPal $2,000 — one flow.',
    },
    {
      title: 'One step.',
      body: '',
    },
    {
      title: 'Session 90 min',
      body: 'Founder-led; hiring follow-ups primary; sales/support if adjacent.',
    },
    {
      title: 'Written plan in 48 hours.',
      body: '',
    },
    {
      title: 'Optional build',
      body: 'Credit if start within 30 days.',
    },
  ] as const,
} as const

export const FIT = {
  good: [
    'Founder-CEO or working COO',
    'ops-heavy/sales-driven service',
    '~20–80 people',
    '~$3M–$20M',
    'capacity pressure especially hiring follow-ups',
    'need system in 30–90 days',
  ] as const,
  bad: [
    'Under ~15',
    'free-audit hunters',
    'innovation/no budget',
    'IT-only',
    'board deck with no build intent',
  ] as const,
} as const

export const FAQ = {
  items: [
    {
      question: 'Why paid?',
      answer: 'A paid session buys a decision-grade plan. We only take sessions we can make useful.',
    },
    {
      question: 'Can I build elsewhere?',
      answer: 'Fine, roadmap is yours.',
    },
    {
      question: 'What’s delivered in 48 hours?',
      answer: 'Plan in 48h + catch-up.',
    },
    {
      question: 'Who runs the session?',
      answer: 'Shubham Gupta, Founder.',
    },
    {
      question: 'NDA?',
      answer: 'Yes.',
    },
  ] as const,
} as const

export const FINAL_CTA = {
  headline: 'Ready to stop guessing which AI project to fund?',
  subhead: 'Book the $2,000 AI Strategy Session. Pay and lock your slot in one step.',
  button: 'Pay & book the AI Strategy Session',
  microcopy:
    'No free strategy calls. $2,000 via PayPal when you book. Credited to a BitBLabs build started within 30 days.',
} as const
