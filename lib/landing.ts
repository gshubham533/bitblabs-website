/**
 * Homepage copy, one export per section, in page order.
 * Do not invent metrics, logos, ratings, or testimonials: every number here is a session fact.
 * Customer proof lives in lib/proof.ts behind approval flags.
 */

import { BOOK_CTA_LABEL, CONTACT_EMAIL } from './site'

export type Tone = 'orange' | 'green' | 'blue' | 'pink' | 'azure' | 'violet' | 'red' | 'teal'

export type IconKey =
  | 'clock'
  | 'sheet'
  | 'repeat'
  | 'inbox'
  | 'copy'
  | 'file'
  | 'help'
  | 'userCheck'
  | 'shield'
  | 'route'
  | 'eye'
  | 'bell'
  | 'lightbulb'
  | 'briefcase'
  | 'users'
  | 'headset'
  | 'truck'
  | 'sparkles'
  | 'gitBranch'
  | 'layers'
  | 'check'

/** How a workflow step is owned in a redesigned workflow. */
export type StepOwner = 'ai' | 'rule' | 'human'

const BOOK_LABEL = BOOK_CTA_LABEL

export const LANDING_SEO = {
  title: 'AI Workflow Strategy & Implementation for Service Businesses | BitBlabs',
  description:
    'BitBlabs finds where AI can improve the workflows your business already runs, then designs and implements it. Start with a 90-minute AI Workflow Strategy Session ($2,000).',
  ogTitle: 'Find where work gets stuck. Put AI where it actually helps.',
  ogDescription:
    'Your business already has workflows. We make them AI-powered, from identifying the right opportunities to designing and implementing AI inside your existing processes.',
} as const

export const HERO = {
  badgeTag: 'New',
  badgeText: 'AI workflow strategy + implementation',
  headlineTop: 'Find where work gets stuck.',
  headlineBottom: 'Put AI where it actually helps.',
  subhead:
    'We identify repetitive, manual, and inefficient workflows in your business, then design and implement practical AI solutions around them.',
  primaryCta: BOOK_LABEL,
  primaryNote: 'A fit check. The $2,000 session is booked after.',
  secondaryCta: 'See how it works',
  illustrationLabel: 'Example workflow',
  leftCard: { title: 'Lead waiting', value: '2 days' },
  board: {
    time: 'Mon, 09:12',
    title: 'Lead follow-up',
    subtitle: '3 AI opportunities found',
    badge: 'AI review',
    rows: [
      { title: 'Enquiry received', meta: 'Web form', status: 'Flowing', tone: 'green' as Tone, done: true },
      { title: 'Logged in CRM', meta: 'Copied by hand', status: 'AI: extract', tone: 'violet' as Tone, done: false },
      { title: 'First reply sent', meta: 'Waits on shared inbox', status: 'AI: draft', tone: 'violet' as Tone, done: false },
      { title: 'Quote follow-up', meta: 'No clear owner', status: 'AI: nudge', tone: 'violet' as Tone, done: false },
    ],
  },
  rightCard: {
    title: 'Human checkpoints',
    subtitle: 'kept in this workflow',
    items: [
      { icon: 'userCheck' as IconKey, label: 'Approve' },
      { icon: 'eye' as IconKey, label: 'Review' },
      { icon: 'route' as IconKey, label: 'Escalate' },
    ],
  },
} as const

export const INTRO = {
  // Rendered as: before [image chips] middle [icon] after
  lead: 'Your team is busy. The work still stalls.',
  before: 'You don’t need AI',
  middle: 'everywhere. You need it in the right',
  after: 'workflows.',
  sub: 'Built for service teams where growth adds manual work.',
  tags: ['#Owners', '#OpsLeads', '#ServiceTeams', '#Recruiters'],
  marquee: [
    { label: 'Lead waiting 2 days', icon: 'clock' as IconKey, tone: 'teal' as Tone, image: 'strip-sticky' },
    { label: 'Status lives in a sheet', icon: 'sheet' as IconKey, tone: 'orange' as Tone, image: 'strip-laptop' },
    { label: 'Same update, five times', icon: 'repeat' as IconKey, tone: 'green' as Tone, image: 'strip-meeting' },
    { label: 'Shared inbox triage', icon: 'inbox' as IconKey, tone: 'blue' as Tone, image: 'strip-reports' },
    { label: 'Copy-paste between tools', icon: 'copy' as IconKey, tone: 'red' as Tone, image: 'strip-call' },
    { label: 'Weekly report rebuild', icon: 'file' as IconKey, tone: 'violet' as Tone, image: 'strip-planner' },
    { label: 'Who owns this step?', icon: 'help' as IconKey, tone: 'azure' as Tone, image: 'strip-sales' },
    { label: 'Approval stuck in email', icon: 'userCheck' as IconKey, tone: 'pink' as Tone, image: 'strip-whiteboard' },
  ],
  laptop: {
    title: 'From workflow to AI-powered workflow',
    subtitle: 'How a BitBlabs engagement runs',
    note: 'Strategy → Build',
    steps: [
      { label: 'Existing workflow', meta: 'Mapped as it runs today', tone: 'teal' as Tone, icon: 'gitBranch' as IconKey },
      { label: 'Identify AI opportunities', meta: 'Manual effort, slow decisions', tone: 'violet' as Tone, icon: 'sparkles' as IconKey },
      { label: 'Redesign with AI + automation', meta: 'Every step gets an owner', tone: 'blue' as Tone, icon: 'layers' as IconKey },
      { label: 'Implement', meta: 'Built into your tools', tone: 'orange' as Tone, icon: 'check' as IconKey, highlight: true },
      { label: 'AI\u2011powered workflow', meta: 'Live, with human checkpoints', tone: 'green' as Tone, icon: 'route' as IconKey },
    ],
  },
  body:
    'We analyze how your team works today, identify where AI can remove manual effort or improve decision-making, and turn those opportunities into working solutions.',
  primaryCta: BOOK_LABEL,
  secondaryCta: 'See how it works',
} as const

export const SESSION = {
  eyebrow: 'Inside the session',
  headline: 'Find the right workflow. Then make it AI\u2011powered.',
  lead:
    'In 90 minutes we map your existing workflow, identify AI opportunities, prioritize the highest-impact use cases, design the future-state workflow, and define how it gets implemented.',
  checkpoints: {
    title: 'AI opportunities, step by step',
    body: 'We mark every step: where AI takes over, where a simple rule is enough, and where a person stays in the loop.',
    cardTitle: '3 AI opportunities found',
    cardBody: 'One step stays human, by design',
    steps: [
      { label: 'Intake', owner: 'ai' as StepOwner },
      { label: 'Qualify', owner: 'ai' as StepOwner },
      { label: 'Route', owner: 'rule' as StepOwner },
      { label: 'Approve', owner: 'human' as StepOwner },
      { label: 'Reply', owner: 'ai' as StepOwner },
    ],
    legend: [
      { owner: 'ai' as StepOwner, label: 'AI' },
      { owner: 'rule' as StepOwner, label: 'Rule' },
      { owner: 'human' as StepOwner, label: 'Person' },
    ],
    pills: [
      { label: 'AI drafts the first reply', tone: 'violet' as Tone, icon: 'sparkles' as IconKey },
      { label: 'AI extracts RFQ details', tone: 'blue' as Tone, icon: 'file' as IconKey },
      { label: 'AI qualifies inbound calls', tone: 'teal' as Tone, icon: 'headset' as IconKey },
      { label: 'Person approves before send', tone: 'orange' as Tone, icon: 'userCheck' as IconKey },
      { label: 'AI summarizes weekly status', tone: 'green' as Tone, icon: 'eye' as IconKey },
      { label: 'Exceptions go to a person', tone: 'azure' as Tone, icon: 'help' as IconKey },
      { label: 'Refunds stay human', tone: 'pink' as Tone, icon: 'shield' as IconKey },
    ],
  },
  mapped: {
    title: 'Your existing workflow, mapped',
    body: 'We trace one process end to end: who starts it, which tools touch it, where it waits, and which steps are still manual.',
    cardTitle: 'Lead follow-up',
    cardSubtitle: 'Example map · current state',
    badge: '2 stalls',
    badgeLabel: 'Found',
    rows: [
      { time: 'Hour 0', title: 'Enquiry received', meta: 'Web form', ok: true },
      { time: 'Hour 2', title: 'Logged in CRM', meta: 'Copied by hand', ok: true },
      { time: 'Day 2', title: 'First reply sent', meta: 'Waits on inbox', ok: false },
      { time: 'Day 5', title: 'Quote follow-up', meta: 'No clear owner', ok: false },
    ],
  },
  grouped: {
    title: 'The future-state workflow, designed',
    body: 'Each stage gets an owner: an AI agent, a simple rule, or a person. You see exactly how the new workflow runs before anything is built.',
    cta: 'Design your AI workflow',
    footnote: '*Example design. Your blueprint reflects your real process.',
    window: {
      title: 'Who owns each stage',
      subtitle: 'Future-state design',
      badge: '4 stages',
      groups: [
        { label: 'Intake', meta: 'Details read from form and inbox', count: 'AI agent', tone: 'violet' as Tone },
        { label: 'Qualify', meta: 'Fit scored, edge cases flagged', count: 'AI + review', tone: 'blue' as Tone },
        { label: 'Kickoff', meta: 'Owner assigned, brief created', count: 'Rule', tone: 'green' as Tone },
        { label: 'Approve', meta: 'Scope and pricing sign-off', count: 'Person', tone: 'orange' as Tone },
      ],
    },
    floating: {
      title: 'Intake',
      badge: 'AI agent',
      items: [
        { label: 'Read enquiry details', done: true },
        { label: 'Log it to the CRM', done: true },
        { label: 'Draft the first reply', done: false },
      ],
    },
  },
  roadmap: {
    title: 'A prioritized implementation plan',
    body: 'Opportunities ranked by impact and effort, then sequenced into a 30/60/90-day build.',
    cardTitle: 'Your plan at a glance',
    rings: [
      { value: '30', label: 'Quick wins', progress: 0.34, tone: 'orange' as Tone },
      { value: '60', label: 'Core AI build', progress: 0.67, tone: 'violet' as Tone, large: true },
      { value: '90', label: 'Scale & review', progress: 1, tone: 'orange' as Tone },
    ],
    stats: [
      {
        label: 'Deliverables\nyou keep',
        value: '5',
        note: 'Workflow map, AI opportunities, priorities, future-state design, implementation plan',
      },
      { label: 'Session length\nin minutes', value: '90', note: 'Recorded for your team' },
    ],
  },
  honest: {
    title: 'Where AI doesn’t belong',
    body: 'If AI isn’t the right fix for a step, we say so and recommend a simple rule or a process change instead.',
    meta: 'Recommendation · Step 3',
    cardTitle: 'Keep this step human',
    cardBody: 'Refund approvals need judgment. Let AI draft the reminder, not make the decision.',
    accept: 'Makes sense',
    later: 'Discuss',
  },
} as const

export const WORKFLOWS = {
  eyebrow: 'Concrete AI use cases',
  headlineTop: 'AI inside the workflows',
  headlineBottom: 'your team already runs',
  tabs: [
    {
      id: 'sales',
      label: 'Sales',
      icon: 'briefcase' as IconKey,
      image: 'tab-sales',
      alt: 'Sales lead on a call at his laptop',
      text: 'New leads get called back, qualified, and logged without anyone copying details.',
      flow: [
        { label: 'Lead qualification', owner: 'rule' as StepOwner },
        { label: 'AI voice agent', owner: 'ai' as StepOwner },
        { label: 'CRM update', owner: 'ai' as StepOwner },
        { label: 'Follow-up', owner: 'human' as StepOwner },
      ],
    },
    {
      id: 'operations',
      label: 'Operations',
      icon: 'layers' as IconKey,
      image: 'tab-delivery',
      alt: 'Two operations leads planning at a whiteboard',
      text: 'RFQs stop waiting in an inbox for someone to read the attachment.',
      flow: [
        { label: 'RFQ received', owner: 'rule' as StepOwner },
        { label: 'AI extracts requirements', owner: 'ai' as StepOwner },
        { label: 'Qualifies and scores', owner: 'ai' as StepOwner },
        { label: 'Team reviews', owner: 'human' as StepOwner },
      ],
    },
    {
      id: 'support',
      label: 'Customer support',
      icon: 'headset' as IconKey,
      image: 'tab-support',
      alt: 'Support agent with a headset at his desk',
      text: 'Routine questions arrive with a drafted answer. Your team approves instead of typing.',
      flow: [
        { label: 'Customer query', owner: 'rule' as StepOwner },
        { label: 'AI classifies', owner: 'ai' as StepOwner },
        { label: 'Retrieves information', owner: 'ai' as StepOwner },
        { label: 'Drafts response', owner: 'ai' as StepOwner },
        { label: 'Human approval', owner: 'human' as StepOwner },
      ],
    },
    {
      id: 'hr',
      label: 'HR & hiring',
      icon: 'users' as IconKey,
      image: 'tab-recruitment',
      alt: 'Recruiter reviewing candidate paperwork',
      text: 'Recruiters spend their time on the right candidates, not the pile.',
      flow: [
        { label: 'Applications', owner: 'rule' as StepOwner },
        { label: 'AI screening', owner: 'ai' as StepOwner },
        { label: 'Candidate qualification', owner: 'ai' as StepOwner },
        { label: 'Interview scheduling', owner: 'human' as StepOwner },
      ],
    },
  ],
  flowLabel: 'Example AI workflow',
  rhythmLabel: 'And any workflow with manual effort in it',
  rhythm: ['#reporting', '#onboarding', '#approvals', '#document-intake', '#client-updates', '#internal-ops'],
} as const

/** `logo` is a file in /public/logos/stack; items without one render as a text wordmark. */
export type StackItem = { name: string; logo?: string }

export const STACK = {
  eyebrow: 'Tools we build with',
  headline: 'Model\u2011agnostic. Stack\u2011agnostic.',
  body: 'We pick the model and tools that fit your workflow, data and budget, and build around the systems your team already runs.',
  footnote: 'A sample of what we work with, not a limit. Logos are trademarks of their owners. No partnership implied.',
  groups: [
    {
      label: 'AI models',
      items: [
        { name: 'OpenAI', logo: 'openai' },
        { name: 'Google Gemini', logo: 'googlegemini' },
        { name: 'Anthropic Claude', logo: 'claude' },
        { name: 'Deepgram', logo: 'deepgram' },
        { name: 'ElevenLabs', logo: 'elevenlabs' },
      ],
    },
    {
      label: 'AI orchestration and data',
      items: [
        { name: 'LangChain / LangGraph', logo: 'langchain' },
        { name: 'LlamaIndex' },
        { name: 'PostgreSQL + pgvector', logo: 'postgresql' },
        { name: 'Pinecone' },
        { name: 'Supabase', logo: 'supabase' },
      ],
    },
    {
      label: 'Build and deploy',
      items: [
        { name: 'Python', logo: 'python' },
        { name: 'Django', logo: 'django' },
        { name: 'FastAPI', logo: 'fastapi' },
        { name: 'Next.js', logo: 'nextdotjs' },
        { name: 'React', logo: 'react' },
        { name: 'Node.js', logo: 'nodedotjs' },
        { name: 'Docker', logo: 'docker' },
        { name: 'AWS', logo: 'amazonwebservices' },
      ],
    },
    {
      label: 'Connects to your systems',
      items: [
        { name: 'HubSpot', logo: 'hubspot' },
        { name: 'Salesforce', logo: 'salesforce' },
        { name: 'Slack', logo: 'slack' },
        { name: 'Google Workspace', logo: 'google' },
        { name: 'Microsoft 365', logo: 'microsoft' },
      ],
    },
  ] as { label: string; items: StackItem[] }[],
  anySystem: '+ Any system with an API',
}

export const RESULTS = {
  headline: 'Workflows teams have made AI\u2011powered',
  trustLabel: 'Trusted by operators',
} as const

export const OFFER_STATS = {
  eyebrow: 'Strategy, then implementation',
  headlineTop: 'Start with one session.',
  headlineBottom: 'Then we build it.',
  price: '$2,000',
  badge: 'Credited toward your build within 30 days',
  stats: [
    { value: '90', unit: 'min', unitTone: 'violet' as Tone, label: 'Focused working session' },
    { value: '5', label: 'Deliverables you keep' },
    { value: '30', unit: 'days', unitTone: 'blue' as Tone, label: 'To use your fee as build credit' },
  ],
  buildTitle: 'Need us to build it?',
  buildBody: 'We take the workflow you identified from blueprint to a working AI implementation.',
  cta: BOOK_LABEL,
  payCta: 'Already ready? Book and pay for the session',
  footnote:
    'The 20-minute call confirms fit. You pay $2,000 on TidyCal before the 90-minute session. Implementation is scoped separately.',
} as const

export const ASSIST = {
  eyebrow: 'What BitBlabs does',
  headlineTop: 'Your business already has workflows.',
  headlineBottom: 'We make them AI\u2011powered.',
  body:
    'From identifying the right opportunities to designing and implementing AI inside your existing processes, BitBlabs turns manual workflows into AI-powered ones.',
  cta: 'See what’s inside the session',
  window: {
    title: 'Lead follow-up',
    subtitle: 'Future state, AI-powered',
    badge: 'AI-powered',
    rows: [
      { title: 'Enquiry qualified', meta: 'AI agent, on arrival', state: 'done' as const, tag: 'AI' },
      { title: 'First reply drafted', meta: 'AI drafts, a person approves', state: 'human' as const, tag: 'Checkpoint' },
      { title: 'Routed to owner', meta: 'By service type', state: 'todo' as const, tag: 'Rule' },
      { title: 'CRM updated', meta: 'Written by the agent', state: 'todo' as const, tag: 'AI' },
    ],
  },
  suggestions: [
    { title: 'AI drafts the first reply', action: 'Suggested', dark: true },
    { title: 'AI voice agent for missed calls', action: 'Plan: day 30' },
    { title: 'Keep refund approval human', action: 'Human checkpoint' },
  ],
  illustrationLabel: 'Example recommendations',
  cards: [
    { title: 'AI voice agents', body: 'Answer, qualify, and log inbound calls.', icon: 'headset' as IconKey, tone: 'blue' as Tone },
    { title: 'Document extraction', body: 'Pull requirements out of RFQs, CVs, and forms.', icon: 'file' as IconKey, tone: 'red' as Tone },
    { title: 'Drafted replies', body: 'AI writes the response, your team approves it.', icon: 'sparkles' as IconKey, tone: 'violet' as Tone },
    { title: 'Smart routing', body: 'Classifies requests and sends them to the right owner.', icon: 'route' as IconKey, tone: 'green' as Tone },
  ],
} as const

export const STORIES = {
  eyebrow: 'A closer look',
  headlineTop: 'Inside the systems',
  headlineBottom: 'we’ve built',
  sub: 'The industries behind our builds, and what we shipped in each.',
  linkLabel: 'View project',
  clips: [
    {
      id: 'digipropass',
      project: 'DigiProPass',
      industry: 'Sustainable fashion',
      summary: 'Digital product passports with QR codes and sustainability scoring',
      video: '/videos/redesign/clip-digipropass.mp4',
      poster: '/images/redesign/clip-digipropass.webp',
      href: '/projects/digipropass',
    },
    {
      id: 'healthy-fasal',
      project: 'Healthy Fasal',
      industry: 'Agri supply chain',
      summary: 'Farm-to-vendor ordering, wallets, and collection centres in one platform',
      video: '/videos/redesign/clip-healthy-fasal.mp4',
      poster: '/images/redesign/clip-healthy-fasal.webp',
      href: '/projects/healthy-fasal',
    },
    {
      id: 'axion-plan',
      project: 'Axion Plan',
      industry: 'Financial planning',
      summary: 'Excel forecasting logic turned into an AI-assisted planning product',
      video: '/videos/redesign/clip-axion-plan.mp4',
      poster: '/images/redesign/clip-axion-plan.webp',
      href: '/projects/axion-plan',
    },
    {
      id: 'course-companion',
      project: 'Course Companion',
      industry: 'Higher education',
      summary: 'A privacy-first AI teaching assistant for professors',
      video: '/videos/redesign/clip-course-companion.mp4',
      poster: '/images/redesign/clip-course-companion.webp',
      href: '/projects/course-companion',
    },
    {
      id: 'ryft',
      project: 'Ryft',
      industry: 'Fitness',
      summary: 'A social workout tracker with streaks, XP, and squads',
      video: '/videos/redesign/clip-ryft.mp4',
      poster: '/images/redesign/clip-ryft.webp',
      href: 'https://ryft.bitblabs.com/',
    },
  ],
} as const

export const FAQ = {
  eyebrow: 'Common Questions',
  headline: 'Frequently asked questions',
  contactTitle: 'Can’t find your answer?',
  contactCta: 'Email us',
  items: [
    {
      id: 'fit-call',
      question: 'What happens on the 20-minute fit call?',
      answer:
        'We confirm your role, company size, the workflow that gets stuck, and whether a $2,000 session is the right spend. The call does not map the workflow or produce a roadmap.',
    },
    {
      id: 'when-pay',
      question: 'When do I pay the $2,000?',
      answer:
        'After the fit call, if we both agree the session is the right next step. You book and pay on TidyCal before the 90 minutes. The fee covers the session and blueprint, and it is credited toward a BitBlabs implementation started within 30 days.',
    },
    {
      id: 'know-what',
      question: 'Do I need to know where AI fits?',
      answer:
        'No. Show us how an important workflow runs today. We find where AI can remove manual effort or improve decisions.',
    },
    {
      id: 'implement',
      question: 'Do you implement, or only advise?',
      answer:
        'Both. The session produces the blueprint. BitBlabs can then build the AI into your existing tools and processes.',
    },
    {
      id: 'entire-business',
      question: 'Can we cover my entire business in one session?',
      answer:
        'We focus on one high-impact workflow so the plan stays usable. More workflows can follow.',
    },
    {
      id: 'only-recruitment',
      question: 'Is this only for recruitment?',
      answer:
        'No. Recruitment is one workflow we have already put AI into. The same approach applies to sales, operations, customer support, and HR.',
    },
    {
      id: 'implementation-included',
      question: 'Is implementation included in the $2,000?',
      answer:
        'No. The $2,000 covers the strategy session and blueprint. If you want us to build it, implementation is scoped separately.',
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
        'We will say so. For some steps the right fix is a simple rule, a process change, or a clearer handoff between people.',
    },
    {
      id: 'existing-tools',
      question: 'Will you work with our existing tools?',
      answer:
        'Yes. We put AI into the tools you already use wherever we can, and only recommend something new when it clearly earns its place.',
    },
    {
      id: 'implementation-cost',
      question: 'How much does implementation cost?',
      answer:
        'It depends on the workflow, integrations, and safeguards. The plan clarifies scope before you commit to a build.',
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
  ],
} as const

export const FINAL_CTA = {
  headline: 'Make one workflow AI\u2011powered',
  body: 'Bring the process. Leave with the AI opportunities, the future-state design, and an implementation plan.',
  primaryCta: BOOK_LABEL,
  secondaryCta: `Email ${CONTACT_EMAIL}`,
  qrTitle: 'Scan the QR code to book a fit call',
  laptop: {
    greeting: 'Your implementation plan',
    name: 'Lead follow-up',
    phases: [
      { label: 'Days 1–30', title: 'Quick wins', tone: 'green' as Tone, items: ['AI drafts first replies', 'One owner per lead'] },
      { label: 'Days 31–60', title: 'Core AI build', tone: 'violet' as Tone, items: ['AI voice agent + CRM sync', 'Human approval step'] },
      { label: 'Days 61–90', title: 'Scale & review', tone: 'orange' as Tone, items: ['AI weekly status summary', 'Pick the next workflow'] },
    ],
  },
} as const
