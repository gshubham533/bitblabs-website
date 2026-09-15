/** Homepage copy locked to the design brief. Do not invent metrics or SLAs. */

export const LANDING_SEO = {
  title: 'AI Workflow Strategy & Automation Consulting | BitBlabs',
  description:
    'BitBlabs helps growing service businesses find operational bottlenecks, redesign workflows, and build practical AI systems. Book a 90-minute strategy session.',
  ogTitle: 'Find the Work Your Team Shouldn’t Still Be Doing Manually',
  ogDescription:
    'Map one critical workflow, uncover what is slowing it down, and get a practical plan for using AI to improve it.',
} as const

export const HERO = {
  eyebrow: 'AI workflow strategy + implementation',
  headline: 'Your business doesn’t need another AI tool. It needs a better way of working.',
  supporting: [
    'If your team is still chasing updates, copying information between systems, answering the same questions, or keeping important processes alive through spreadsheets and follow-ups, there is probably a better way.',
    'We help growing service businesses find the work slowing them down, redesign the workflow, and build practical AI systems around it.',
  ] as const,
  primaryCta: 'Book Your Strategy Session',
  secondaryCta: 'See How It Works',
  microcopy: '90 minutes · $2,000 · Your fee can be credited toward implementation',
} as const

export const FRICTION = {
  eyebrow: 'Does any of this sound familiar?',
  headline: 'Your team is busy. Important work still gets stuck.',
  cards: [
    {
      title: 'Slow lead response',
      body: 'A new enquiry arrives, but the follow-up depends on someone noticing it.',
    },
    {
      title: 'Repeated coordination',
      body: 'Candidates, clients, or teammates keep asking what happens next.',
    },
    {
      title: 'Disconnected systems',
      body: 'People copy the same information between inboxes, spreadsheets, and software.',
    },
    {
      title: 'Buried knowledge',
      body: 'The answer exists, but finding it requires asking the right person.',
    },
    {
      title: 'Manual reporting',
      body: 'Managers spend hours assembling updates that should already be visible.',
    },
    {
      title: 'Growth creates admin',
      body: 'More customers create more coordination instead of more leverage.',
    },
  ] as const,
  closing:
    'The problem is not that your team is not working hard enough. The workflow is making them work harder than they should.',
} as const

export const POINT_OF_VIEW = {
  headline: 'You probably don’t need more AI. You need to know where it belongs.',
  lead: 'The question is not, “What can we automate?”',
  better: 'The better questions are:',
  questions: [
    'Which process is actually costing us time or money?',
    'Where does work repeatedly slow down?',
    'What still needs human judgment?',
    'How will a new system fit into the tools we already use?',
    'Will building it create meaningful value?',
  ] as const,
  closing: 'We start with the workflow, not the technology.',
} as const

export const METHOD = {
  eyebrow: 'What we actually do',
  headline: 'We find where work gets stuck. Then we design a better way for it to move.',
  supporting:
    'BitBlabs helps you understand, prioritise, design, and implement AI-powered workflows.',
  stages: [
    {
      title: 'Understand',
      body: 'Show us how the work happens today.',
      example: 'Maps of owners, tools, and handoffs',
    },
    {
      title: 'Prioritise',
      body: 'Identify the bottleneck worth solving first.',
      example: 'One high-impact workflow selected',
    },
    {
      title: 'Redesign',
      body: 'Decide what AI, automation, and people should each handle.',
      example: 'Clear human checkpoints',
    },
    {
      title: 'Build',
      body: 'Create, connect, test, and deploy the working system.',
      example: 'Live system in your operation',
    },
  ] as const,
  closing:
    'You do not need to arrive with a fully formed AI idea. You can simply show us how the work happens today.',
} as const

export const HOW_WE_WORK = {
  headline: 'Here’s how we work together.',
  steps: [
    {
      number: '01',
      title: 'Discover the real bottleneck',
      body: 'We look closely at how work currently moves through your business: who starts it, which tools are involved, where information comes from, where it slows down, and what requires human judgment.',
      outcome: 'The right problem, clearly defined.',
    },
    {
      number: '02',
      title: 'Design the better workflow',
      body: 'We decide what AI can handle, what ordinary automation can handle, what your team should continue controlling, and where safeguards or approvals are required.',
      outcome: 'A practical future-state workflow.',
    },
    {
      number: '03',
      title: 'Build and deploy it',
      body: 'If you want us to implement the plan, we design, integrate, test, and deploy the system into your real operation.',
      outcome: 'A working system, not another slide deck.',
    },
  ] as const,
} as const

export const OFFER = {
  eyebrow: 'Not sure what to automate first?',
  headline: 'Start with one important workflow.',
  body: 'The AI Workflow Strategy Session is a focused 90-minute working session for business owners and operational leaders who know something needs to improve but do not want to waste money building the wrong thing.',
  duringLabel: 'During the session, we will:',
  steps: [
    'Select one high-impact workflow',
    'Map how it currently operates',
    'Identify delays, repetitive work, and operational leaks',
    'Evaluate where AI and automation can help',
    'Separate quick wins from complex projects',
    'Design a recommended future workflow',
    'Establish the next implementation steps',
  ] as const,
  price: '$2,000',
  duration: '90 minutes',
  primaryCta: 'Book Your Strategy Session',
  microcopy: '90 minutes · Practical roadmap included · Secure payment through PayPal',
  creditNote:
    'If you start a BitBlabs implementation within 30 days, your $2,000 strategy fee is credited toward that project.',
  deliverablesSummary: [
    'Current workflow map',
    'Bottleneck analysis',
    'Ranked opportunities',
    'Future-state design',
    '30/60/90-day roadmap',
  ] as const,
} as const

export const DELIVERABLES = {
  headline: 'What will you leave with?',
  supporting:
    'You are paying for a usable plan, whether you implement it with BitBlabs, your internal team, or another partner.',
  items: [
    {
      title: 'Current workflow map',
      body: 'How work actually moves today — owners, tools, and handoffs.',
      size: 'lg' as const,
    },
    {
      title: '30/60/90-day roadmap',
      body: 'A sequenced plan you can run without waiting for a second discovery cycle.',
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
  headline: 'Workflows teams ask us to improve',
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
  headline: 'From repetitive recruitment coordination to a connected workflow.',
  narrative:
    'An enterprise recruitment team was coordinating work across candidates, recruiters, interviewers, and internal systems. Important updates depended on people repeatedly checking information, contacting the next person, and moving the process forward manually.',
  builtForLabel: 'BitBlabs helped rethink the workflow and build a system designed to:',
  capabilities: [
    'Understand the candidate’s current stage',
    'Collect required information',
    'Communicate the next step',
    'Coordinate follow-ups',
    'Record important details',
    'Escalate situations requiring human attention',
  ] as const,
  closing:
    'The result was not simply another chatbot. It was a more connected way for the work to move.',
  cta: 'Discuss a Similar Workflow',
  beforeNodes: ['Candidate', 'Inbox', 'Spreadsheet', 'Chase', 'Update'],
  afterNodes: ['Candidate', 'Workflow', 'Prompt', 'Human approval', 'Updated'],
} as const

export const PRINCIPLES = {
  headline: 'We are not here to sell you AI for the sake of AI.',
  items: [
    {
      title: 'We examine the complete process.',
      body: 'Automating one isolated task does not help if the rest of the workflow remains broken.',
    },
    {
      title: 'We design around your business.',
      body: 'Your team, customers, tools, rules, and constraints shape the solution.',
    },
    {
      title: 'We keep people in control.',
      body: 'We deliberately design reviews, approvals, and escalation points where judgment matters.',
    },
    {
      title: 'We build beyond the demo.',
      body: 'The system must work with real users, imperfect information, exceptions, and existing tools.',
    },
  ] as const,
} as const

export const FIT = {
  headline: 'Is this the right starting point for you?',
  goodTitle: 'This is likely a good fit if:',
  badTitle: 'It may not be the right fit if:',
  good: [
    'You lead a growing service business',
    'Your team has approximately 20–80 employees',
    'Important processes depend on email, spreadsheets, or manual follow-ups',
    'Growth is creating more coordination work',
    'You want a practical roadmap connected to business value',
    'You may need a technical partner to implement the solution',
  ] as const,
  bad: [
    'You only want a list of popular AI tools',
    'You are looking for a free introductory consultation',
    'You want to automate a process with no clear owner',
    'You expect AI to replace every human decision',
    'You are not ready to explain how the work currently happens',
  ] as const,
} as const

export const JOURNEY = {
  headline: 'What happens after you book',
  steps: [
    {
      title: 'Complete the assessment',
      body: 'Tell us about your business, workflow, current tools, and operational challenges.',
    },
    {
      title: 'Join the strategy session',
      body: 'We examine and redesign one priority workflow together.',
    },
    {
      title: 'Receive your roadmap',
      body: 'We turn the work into a structured implementation plan.',
    },
    {
      title: 'Choose how to proceed',
      body: 'Use the roadmap internally or ask BitBlabs to implement it.',
    },
    {
      title: 'Build and deploy',
      body: 'If we work together, we scope, build, test, and introduce the system into your operation.',
    },
  ] as const,
} as const

export const ABOUT = {
  headline: 'You should know who you are trusting with your workflow.',
  paragraphs: [
    'BitBlabs is an AI consultancy and development partner focused on turning operational problems into working systems.',
    'We combine process thinking, conversational AI, workflow automation, and custom product development to solve problems that off-the-shelf tools cannot handle properly.',
    'Our experience includes building voice and workflow AI for real operational environments, including enterprise recruitment coordination.',
    'We care about what happens after the demo, when real people begin using the system.',
  ] as const,
} as const

export const FAQ = {
  headline: 'Questions before you book',
  supportCta: 'Book Your Strategy Session',
  items: [
    {
      id: 'know-what',
      question: 'Do I need to know what I want to automate?',
      answer:
        'No. You need to be able to show us how an important workflow operates today. We help you decide what is worth improving first.',
    },
    {
      id: 'entire-business',
      question: 'Can we examine my entire business during the session?',
      answer:
        'The session focuses on one high-impact workflow so the roadmap stays practical. Broader mapping can follow if needed.',
    },
    {
      id: 'only-recruitment',
      question: 'Is this only for recruitment automation?',
      answer:
        'No. Recruitment is one area we have already improved. The same approach applies to sales, support, delivery, and internal operations.',
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
        'Yes. If you start a BitBlabs implementation within 30 days, your $2,000 fee is credited toward that project.',
    },
    {
      id: 'ai-not-right',
      question: 'What if AI is not the right solution?',
      answer:
        'Then we will say so. The session is meant to find the right fix — which may be process design, ordinary automation, or a clearer human workflow.',
    },
    {
      id: 'existing-tools',
      question: 'Will you work with our existing tools?',
      answer:
        'Yes. Fit with the tools you already use is one of the questions we answer before recommending anything new.',
    },
    {
      id: 'implementation-cost',
      question: 'How much does implementation cost?',
      answer:
        'It depends on the workflow, integrations, and safeguards required. The roadmap clarifies scope before you commit to a build.',
    },
    {
      id: 'who-attends',
      question: 'Who should attend the session?',
      answer:
        'Usually the owner or operational leader who owns the workflow, plus anyone who can explain how the work happens day to day.',
    },
    {
      id: 'prep',
      question: 'What information do you need before the session?',
      answer:
        'A short assessment covering your business, the workflow you want to improve, current tools, and where work gets stuck.',
    },
  ] as const,
} as const

export const FINAL_CTA = {
  intro: 'Your team already knows where the work feels harder than it should.',
  feel: 'They feel it in every delayed response. Every repeated follow-up. Every spreadsheet that needs another update. Every request that gets lost between people and systems.',
  headline: 'You do not need to automate your entire company. You need to find the right place to begin.',
  body: 'Bring us one important workflow. We will help you understand what is slowing it down, where AI belongs, and what you should do next.',
  primaryCta: 'Book Your AI Workflow Strategy Session',
  secondaryCta: 'See What You’ll Receive',
  microcopy: '90 minutes · $2,000 · Practical roadmap included',
} as const

export const FOOTER = {
  positioning: 'AI workflow strategy and implementation for growing service businesses.',
  emailPlaceholder: 'Business email — to be confirmed',
} as const
