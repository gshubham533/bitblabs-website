/**
 * Strategy Session copy shared by apply funnel pages.
 * Homepage sales story lives in lib/home.ts; this module keeps funnel + FAQ + sample brief.
 */

import {
  HOME_APPLY_SUPPORT,
  HOME_DELIVERABLES,
  HOME_FINAL_CTA,
  HOME_HERO,
  HOME_PROBLEM,
  HOME_PROOF_OUTCOMES,
  HOME_PROOF_SLUGS,
  HOME_RISK,
  HOME_STEPS,
} from '@/lib/home'

export const STRATEGY_HEADLINE =
  'Find the AI opportunities worth implementing before investing in the wrong ones.'

export const STRATEGY_TAGLINE = 'Map. Prioritize. Implement.'

export const STRATEGY_HERO_BODY = HOME_HERO.subline

export const STRATEGY_PROBLEM = {
  title: HOME_PROBLEM.title,
  body: 'Teams run disconnected pilots, vendors pitch solutions before the workflow is understood, and manual work persists where automation should have landed first. Leaders are asked to fund AI without a clear read on impact, feasibility, or risk.',
  pains: HOME_PROBLEM.pains,
} as const

export const STRATEGY_DELIVERABLES = HOME_DELIVERABLES

export const STRATEGY_STEPS = HOME_STEPS

export const STRATEGY_AUDIENCE = {
  title: 'Who it is for',
  roles: [
    'COO, VP or Head of Operations',
    'Head of Talent / recruiting ops',
    'Sales Ops or customer operations leaders',
    'Technology leaders evaluating workflow automation',
  ],
  profile:
    'Mid-market companies with roughly 50 to 2,000 people, with at least one high-volume operational workflow where off-the-shelf tools have hit a ceiling.',
  scenarios: [
    {
      function: 'Recruitment & HR ops',
      line: 'High-volume follow-ups, screening, and handoffs that recruiters still run manually.',
    },
    {
      function: 'Customer operations',
      line: 'Routing, follow-ups, and voice workflows that need to sit inside existing CRM and telephony stacks.',
    },
    {
      function: 'Finance & planning',
      line: 'Spreadsheet-heavy planning, forecasting, and approval loops that need structure before AI is layered on.',
    },
    {
      function: 'Supply chain & procurement',
      line: 'Demand-driven ops with live order volume, wallets, and vendor coordination.',
    },
  ],
  poorFit: [
    'Founders looking for a consumer app MVP',
    'Teams wanting a generic chatbot install in 45 days',
    'Organizations with no operational owner for the workflow in question',
    'Buyers who need guaranteed ROI or headcount reduction numbers before a diagnostic',
  ],
} as const

export const STRATEGY_PROOF_SLUGS = HOME_PROOF_SLUGS

export const STRATEGY_PROOF_OUTCOMES = HOME_PROOF_OUTCOMES

export const STRATEGY_RISK = HOME_RISK

export const STRATEGY_APPLY_SUPPORT = HOME_APPLY_SUPPORT

/** Trust first, then price / fit / risk. Unverified policies stay as stated gaps. */
export const STRATEGY_FAQ = [
  {
    question: 'Who is BitBLabs, and have you shipped this before?',
    answer:
      'BitBLabs builds custom AI systems for operational workflows — hiring, sales calling, support, supply chain — when platforms are too generic and automation shops are not enough. Production examples: voice hiring for a 2,000-person firm (manual follow-ups down 35–45%), voice APIs reused across three organizations, and farm-to-vendor ops running live volume. Full stories are on our Work pages.',
  },
  {
    question: 'Is this just a sales pitch for an implementation?',
    answer:
      'No. The deliverable is a written Opportunity Brief — prioritized opportunities, a recommended pilot, and the rationale. Implementation is a separate conversation only if the pilot is a fit for BitBLabs. We will say so plainly if it is not.',
  },
  {
    question: 'What does the Strategy Session cost?',
    answer:
      'USD 2,000 for the full diagnostic: pre-session assessment, 60-minute working session, and written AI Workflow Opportunity Brief. Apply with a short qualification form. If the session is a fit, we send the payment and scheduling link.',
  },
  {
    question: 'Do we need a call before paying?',
    answer:
      'No. If your application shows a suitable workflow and decision authority, we send the payment and booking link directly. We offer a short alignment call only when scope, stakeholders, or procurement need clarification — not as a free consultation.',
  },
  {
    question: 'Is this for someone like us?',
    answer:
      'It fits mid-market ops leaders (roughly 50–2,000 people) with one painful, high-volume workflow that SaaS and Zapier cannot absorb. Poor fit: consumer app MVPs, 45-day chatbot installs, or teams with no operational owner for the process.',
  },
  {
    question: 'How should we prepare?',
    answer:
      'Complete the pre-session intake with the workflow you want to examine, who owns it today, and what decision the brief must support. Bring one operational leader who can speak to how the work actually runs.',
  },
  {
    question: 'Who should attend the session?',
    answer:
      'The workflow owner plus one decision-maker — typically operations, talent, sales ops, or the functional leader responsible for the process. Technical stakeholders are welcome when integration constraints matter.',
  },
  {
    question: 'Does this include implementation?',
    answer:
      'The session delivers clarity and a written brief. Implementation is a separate engagement if the pilot is a fit for BitBLabs. We will say so plainly if it is not.',
  },
  {
    question: 'How is confidentiality handled?',
    answer:
      'Session discussions and materials are treated as confidential business information. Final confidentiality language is confirmed before the session — policy details to be finalized with your team.',
  },
  {
    question: 'What if we need to reschedule?',
    answer:
      'Rescheduling policy to be confirmed before booking. Contact us as early as possible if your team’s availability changes.',
  },
  {
    question: 'Is the session fee credited toward implementation?',
    answer:
      'Fee-credit policy toward a subsequent BitBLabs engagement to be confirmed before you book the paid session.',
  },
] as const

export const STRATEGY_FINAL_CTA = {
  title: HOME_FINAL_CTA.lines.join(' '),
  body: HOME_FINAL_CTA.body,
} as const

export const OPPORTUNITY_BRIEF_SAMPLE = {
  label: 'Sample — not a client document',
  title: 'AI Workflow Opportunity Brief',
  client: '[Sanitized — mid-market operations team]',
  date: 'March 2026',
  workflow: 'High-volume candidate follow-up after offer rollout',
  sections: [
    {
      heading: 'Workflow summary',
      body: 'Recruiters manually chase candidates across phone and email after offers are extended. Drop-off is high; reasons are inconsistently captured in the CRM.',
    },
    {
      heading: 'Priority opportunities',
      items: [
        {
          rank: 1,
          name: 'Structured voice follow-up with CRM write-back',
          impact: 'High',
          feasibility: 'Medium',
          effort: '2–4 months',
        },
        {
          rank: 2,
          name: 'Process redesign for offer-stage handoffs',
          impact: 'Medium',
          feasibility: 'High',
          effort: '4–6 weeks',
        },
        {
          rank: 3,
          name: 'Generative JD drafting',
          impact: 'Low',
          feasibility: 'High',
          effort: '2–3 weeks',
        },
      ],
    },
    {
      heading: 'Recommended pilot',
      body: 'Pilot structured voice follow-up for one region and one role family. Human review on all consequential actions. Measure time-to-response and structured rejection reasons captured in CRM.',
    },
    {
      heading: 'Risks and constraints',
      body: 'Telephony integration with existing stack. Multilingual requirements. Recruiter adoption — pilot must reduce manual dial time, not add a parallel process.',
    },
  ],
} as const
