/** Homepage copy. Do not invent metrics, logos, testimonials, or SLAs. */

export const LANDING_SEO = {
  title: 'AI Workflow Strategy Session for Service Businesses | BitBlabs',
  description:
    'Find where work gets stuck between people, inboxes, and spreadsheets. Book a 90-minute AI Workflow Strategy Session ($2,000) and leave with a practical roadmap.',
  ogTitle: 'Find where work gets stuck. Then redesign that workflow.',
  ogDescription:
    'A paid 90-minute session for owners and ops leaders: map one critical workflow, decide where AI belongs, and get a plan you can run.',
} as const

export const HERO = {
  eyebrow: 'AI workflow strategy + implementation',
  headline: 'Find where work gets stuck. Then redesign that workflow.',
  supporting: [
    'If follow-ups wait on an inbox, status lives in a spreadsheet, and growth adds coordination instead of capacity, fix the process before you buy another AI tool.',
    'BitBlabs is an AI workflow consultancy for growing service businesses. We map one stuck process in a paid 90-minute strategy session, redesign the handoffs, and build the system when you want us to implement.',
  ] as const,
  primaryCta: 'Book Your Strategy Session',
  secondaryCta: 'See How It Works',
  microcopy: '90 minutes · $2,000 · Fee credited toward implementation within 30 days',
} as const

export const FRICTION = {
  eyebrow: 'Does any of this sound familiar?',
  headline: 'Your team is busy. The work still stalls.',
  cards: [
    {
      title: 'Slow lead response',
      body: 'A new enquiry sits until someone notices it and decides what happens next.',
    },
    {
      title: 'Repeated coordination',
      body: 'Candidates, clients, or teammates keep asking for the same status update.',
    },
    {
      title: 'Disconnected systems',
      body: 'People copy the same facts between inbox, spreadsheet, and software.',
    },
    {
      title: 'Buried knowledge',
      body: 'The answer exists, but only if you know whom to ask.',
    },
    {
      title: 'Manual reporting',
      body: 'Managers rebuild the same update every week from scattered sources.',
    },
    {
      title: 'Growth creates admin',
      body: 'More customers mean more chasing, not more leverage.',
    },
  ] as const,
  closing:
    'Hard work isn’t the bottleneck. The handoffs are.',
} as const

export const POINT_OF_VIEW = {
  headline: 'You don’t need more AI. You need to know where it belongs.',
  lead: '“What can we automate?” is the wrong first question.',
  better: 'Ask these instead:',
  questions: [
    'Which process is actually costing us time or money?',
    'Where does work repeatedly slow down?',
    'What still needs human judgment?',
    'How will a new system fit the tools we already use?',
    'Is the fix worth building?',
  ] as const,
  closing: 'We start with the workflow, not the technology.',
} as const

export const METHOD = {
  eyebrow: 'What we actually do',
  headline: 'How does BitBlabs redesign a stuck workflow?',
  lead: 'Find the stuck handoff. Redesign the path. Build only what earns its place.',
  supporting:
    'Map the real process, pick the bottleneck worth fixing first, redesign what people and systems each own, then build if you want BitBlabs to implement.',
  stages: [
    {
      title: 'Understand',
      body: 'Map how the work moves today: owners, tools, and handoffs.',
      example: 'Current-state map',
    },
    {
      title: 'Prioritise',
      body: 'Choose the bottleneck that is worth solving first.',
      example: 'One workflow selected',
    },
    {
      title: 'Redesign',
      body: 'Decide what AI, automation, and people each own.',
      example: 'Human checkpoints defined',
    },
    {
      title: 'Build',
      body: 'Connect, test, and deploy into your operation.',
      example: 'Live system in use',
    },
  ] as const,
  closing:
    'You don’t need a finished AI idea to start. You need to show how the work happens today.',
} as const

export const HOW_WE_WORK = {
  headline: 'How we work together',
  steps: [
    {
      number: '01',
      title: 'Discover the real bottleneck',
      body: 'We trace one workflow end to end: who starts it, which tools touch it, where information comes from, where it stalls, and what still needs judgment.',
      outcome: 'The right problem, named clearly.',
    },
    {
      number: '02',
      title: 'Design the better workflow',
      body: 'We decide what AI can handle, what ordinary automation can handle, what your team keeps, and where approvals stay human.',
      outcome: 'A future-state path you can run.',
    },
    {
      number: '03',
      title: 'Build and deploy it',
      body: 'If you want BitBlabs to implement, we integrate, test, and put the system into real day-to-day use.',
      outcome: 'A working system, not another deck.',
    },
  ] as const,
} as const

export const OFFER = {
  eyebrow: 'Not sure what to automate first?',
  headline: 'Start with one important workflow.',
  body: 'A 90-minute working session for owners and ops leaders who know something is stuck, and will not fund the wrong build.',
  definition:
    'An AI Workflow Strategy Session is a paid 90-minute working session for owners and operations leaders of growing service businesses, typically teams of about 20 to 80 people. BitBlabs uses the session to map one high-impact workflow as it actually runs today: who owns each step, which inboxes and spreadsheets it touches, where work stalls, and what still needs human judgment. You leave with a current-state map, a bottleneck analysis, ranked opportunities, a future-state design with human checkpoints, and a 30/60/90-day roadmap you can run with BitBlabs, your internal team, or another partner. The session costs $2,000. Implementation is not included. If you start a BitBlabs build within 30 days, the session fee is credited toward that project. If AI is not the right fix, BitBlabs will say so and recommend process design or ordinary automation instead. You do not need a finished automation idea to book. You need to show how the work happens today.',
  duringLabel: 'In the session we will:',
  steps: [
    'Select one high-impact workflow',
    'Map how it operates today',
    'Mark delays, rework, and handoff leaks',
    'Judge where AI and automation help',
    'Separate quick wins from heavier builds',
    'Design the future-state path',
    'Set the next implementation steps',
  ] as const,
  price: '$2,000',
  duration: '90 minutes',
  primaryCta: 'Book Your Strategy Session',
  microcopy: '90 minutes · Roadmap included · Pay securely through PayPal on TidyCal',
  creditNote:
    'Start a BitBlabs implementation within 30 days and your $2,000 session fee is credited toward that project.',
  deliverablesSummary: [
    'Current workflow map',
    'Bottleneck analysis',
    'Ranked opportunities',
    'Future-state design',
    '30/60/90-day roadmap',
  ] as const,
} as const

export const DELIVERABLES = {
  headline: 'What you leave with',
  supporting:
    'You pay for a plan you can run with BitBlabs, your team, or another partner.',
  items: [
    {
      title: 'Current workflow map',
      body: 'How work moves today: owners, tools, and handoffs.',
      size: 'lg' as const,
    },
    {
      title: '30/60/90-day roadmap',
      body: 'A sequenced plan so you are not stuck waiting for a second discovery cycle.',
      size: 'lg' as const,
    },
    {
      title: 'Bottleneck analysis',
      body: 'Where delay, rework, and coordination leak time and money.',
      size: 'md' as const,
    },
    {
      title: 'Ranked automation opportunities',
      body: 'What to fix first, what to defer, and why.',
      size: 'md' as const,
    },
    {
      title: 'Recommended future workflow',
      body: 'A redesigned path with clear human checkpoints.',
      size: 'md' as const,
    },
    {
      title: 'Tools & technical approach',
      body: 'Suggested stack and how it fits systems you already use.',
      size: 'sm' as const,
    },
    {
      title: 'Risks & human checkpoints',
      body: 'Dependencies, exceptions, and where judgment stays with people.',
      size: 'sm' as const,
    },
    {
      title: 'Session recording',
      body: 'A record of the working session for your team.',
      size: 'sm' as const,
    },
    {
      title: 'Optional implementation proposal',
      body: 'If you want BitBlabs to build, a clear next scope.',
      size: 'sm' as const,
    },
  ] as const,
} as const

export const WORKFLOW_EXAMPLES = {
  headline: 'Workflows teams ask us to fix',
  tabs: [
    {
      id: 'sales',
      label: 'Sales',
      workflows: [
        'Lead intake and qualification',
        'Follow-up sequencing',
        'CRM updates after conversations',
        'Handoff from sales to delivery',
      ],
      before: ['Enquiry', 'Shared inbox', 'Manual qualification', 'Delayed follow-up', 'CRM update'],
      after: ['Enquiry', 'Immediate qualification', 'Routed follow-up', 'Human decision', 'CRM updated'],
    },
    {
      id: 'recruitment',
      label: 'Recruitment and HR',
      workflows: [
        'Candidate status updates',
        'Interviewer coordination',
        'Document collection',
        'Offer follow-through',
      ],
      before: ['Candidate', 'Recruiter inbox', 'Spreadsheet', 'Interviewer chase', 'Manual status'],
      after: [
        'Candidate',
        'Coordinated workflow',
        'Interviewer prompt',
        'Human decision',
        'Candidate updated',
      ],
    },
    {
      id: 'support',
      label: 'Customer Support',
      workflows: [
        'Repeated question handling',
        'Ticket triage and routing',
        'Escalation with context',
        'Knowledge retrieval',
      ],
      before: ['Ticket', 'Shared queue', 'Manual triage', 'Ask around', 'Late reply'],
      after: ['Ticket', 'Routed with context', 'Suggested answer', 'Human review', 'Resolved'],
    },
    {
      id: 'delivery',
      label: 'Service Delivery',
      workflows: [
        'Kickoff information gathering',
        'Status reporting',
        'Client update loops',
        'Exception handling',
      ],
      before: ['Request', 'Email thread', 'Spreadsheet', 'Status chase', 'Late update'],
      after: ['Request', 'Structured intake', 'Visible status', 'Human checkpoint', 'Client updated'],
    },
    {
      id: 'ops',
      label: 'Internal Operations',
      workflows: [
        'Recurring report assembly',
        'Cross-team handoffs',
        'Approval routing',
        'Tool-to-tool data movement',
      ],
      before: ['Trigger', 'Inbox', 'Copy between tools', 'Manual chase', 'Report'],
      after: ['Trigger', 'Connected steps', 'Automated assembly', 'Human approval', 'Report ready'],
    },
  ] as const,
} as const

export const CASE_STUDY = {
  eyebrow: 'One workflow we have already improved',
  headline: 'Recruitment coordination without the endless chase.',
  narrative:
    'An enterprise recruitment team moved work across candidates, recruiters, interviewers, and internal systems. Progress depended on people checking status, pinging the next person, and pushing the process forward by hand.',
  builtForLabel: 'BitBlabs redesigned the workflow and built a system to:',
  capabilities: [
    'Know the candidate’s current stage',
    'Collect required information',
    'Tell each person the next step',
    'Coordinate follow-ups',
    'Record important details',
    'Escalate only what needs human attention',
  ] as const,
  closing:
    'Not a chatbot demo. A connected path for the work to move.',
  cta: 'Book Your Strategy Session',
  beforeNodes: ['Candidate', 'Inbox', 'Spreadsheet', 'Chase', 'Update'],
  afterNodes: ['Candidate', 'Workflow', 'Prompt', 'Human approval', 'Updated'],
} as const

export const PRINCIPLES = {
  headline: 'We will not sell you AI for its own sake.',
  items: [
    {
      title: 'We examine the full process.',
      body: 'Fixing one task fails if the surrounding handoffs stay broken.',
    },
    {
      title: 'We design around your operation.',
      body: 'Your team, customers, tools, rules, and constraints shape the solution.',
    },
    {
      title: 'We keep people in control.',
      body: 'Reviews, approvals, and escalations sit where judgment matters.',
    },
    {
      title: 'We build past the demo.',
      body: 'The system has to work with real users, messy inputs, exceptions, and existing tools.',
    },
  ] as const,
} as const

export const FIT = {
  headline: 'Is this worth booking?',
  goodTitle: 'Book if:',
  badTitle: 'Skip if:',
  good: [
    'You lead a growing service business',
    'Your team is roughly 20–80 people',
    'Key processes still run on email, spreadsheets, or manual follow-ups',
    'Growth is creating more coordination work',
    'You want a practical roadmap tied to business value',
    'You may want a partner to implement after the plan',
  ] as const,
  bad: [
    'You only want a list of popular AI tools',
    'You want a free introductory consult',
    'The process has no clear owner',
    'You expect AI to replace every human decision',
    'You are not ready to explain how the work happens today',
  ] as const,
} as const

export const JOURNEY = {
  headline: 'What happens after you book',
  steps: [
    {
      title: 'Complete the assessment',
      body: 'Tell us about the business, the workflow, current tools, and where work stalls.',
    },
    {
      title: 'Join the strategy session',
      body: 'We examine and redesign one priority workflow together.',
    },
    {
      title: 'Receive your roadmap',
      body: 'We turn the session into a structured implementation plan.',
    },
    {
      title: 'Choose how to proceed',
      body: 'Run the roadmap internally or ask BitBlabs to build it.',
    },
    {
      title: 'Build and deploy',
      body: 'If we implement, we scope, build, test, and introduce the system into daily use.',
    },
  ] as const,
} as const

export const ABOUT = {
  headline: 'Who you are trusting with this workflow',
  paragraphs: [
    'BitBlabs turns operational problems into working systems.',
    'We combine process design, conversational AI, workflow automation, and custom product work for problems off-the-shelf tools handle poorly.',
    'That includes voice and workflow systems in live operations, including enterprise recruitment coordination.',
    'We care what happens after the demo, when real people use the system.',
  ] as const,
} as const

export const FAQ = {
  headline: 'Questions that usually come up before booking',
  supportCta: 'Book Your Strategy Session',
  items: [
    {
      id: 'know-what',
      question: 'Do I need to know what I want to automate?',
      answer:
        'No. Show us how an important workflow runs today. We help decide what is worth improving first.',
    },
    {
      id: 'entire-business',
      question: 'Can we cover my entire business in one session?',
      answer:
        'We focus on one high-impact workflow so the roadmap stays usable. Broader mapping can follow.',
    },
    {
      id: 'only-recruitment',
      question: 'Is this only for recruitment?',
      answer:
        'No. Recruitment is one workflow we have already improved. The same approach applies to sales, support, delivery, and internal ops.',
    },
    {
      id: 'implementation-included',
      question: 'Is implementation included in the $2,000?',
      answer:
        'No. The $2,000 covers the strategy session and roadmap. Implementation is scoped separately if you want BitBlabs to build.',
    },
    {
      id: 'credit',
      question: 'Is the strategy fee credited toward implementation?',
      answer:
        'Yes. Start a BitBlabs implementation within 30 days and your $2,000 fee is credited toward that project.',
    },
    {
      id: 'ai-not-right',
      question: 'What if AI is not the right solution?',
      answer:
        'We will say so. The session finds the right fix: process design, ordinary automation, or a clearer human workflow.',
    },
    {
      id: 'existing-tools',
      question: 'Will you work with our existing tools?',
      answer:
        'Yes. Fit with tools you already use is one of the questions we answer before recommending anything new.',
    },
    {
      id: 'implementation-cost',
      question: 'How much does implementation cost?',
      answer:
        'It depends on the workflow, integrations, and safeguards. The roadmap clarifies scope before you commit to a build.',
    },
    {
      id: 'who-attends',
      question: 'Who should attend the session?',
      answer:
        'Usually the owner or ops leader who owns the workflow, plus anyone who can explain day-to-day reality.',
    },
    {
      id: 'prep',
      question: 'What do you need before the session?',
      answer:
        'A short assessment: your business, the workflow to improve, current tools, and where work gets stuck.',
    },
  ] as const,
} as const

export const FINAL_CTA = {
  intro: 'Your team already knows where work feels heavier than it should.',
  feel: 'Delayed replies. Repeated follow-ups. Spreadsheets that need one more pass. Requests lost between people and systems.',
  headline: 'Don’t automate the whole company. Start with the right workflow.',
  body: 'Bring one important workflow. We will show what slows it down, where AI belongs, and what to do next.',
  primaryCta: 'Book Your Strategy Session',
  secondaryCta: 'See What You’ll Receive',
  microcopy: '90 minutes · $2,000 · Practical roadmap included',
} as const

export const FOOTER = {
  positioning: 'AI workflow strategy and implementation for growing service businesses.',
  emailPlaceholder: 'Business email (to be confirmed)',
} as const
