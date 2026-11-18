// Case-study pages. Every fact here comes from BITBLABS.md.

export type CaseStudy = {
  slug: string;
  name: string;
  summary: string;
  meta: { k: string; v: string }[];
  stack: string[];
  live?: string;
  client: { title: string; text: string };
  problem: string[];
  built: { title: string; points: string[] }[];
  results: { v: string; k: string }[];
  resultsNote?: string;
  why: string;
  gallery: { src: string; alt: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'digipropass',
    name: 'DigiProPass',
    summary:
      'A Digital Product Passport platform that helps brands meet upcoming EU rules. A shopper scans a QR code and sees origin, materials and environmental impact, no login needed.',
    meta: [
      { k: 'Year', v: '2024' },
      { k: 'Duration', v: '6 months' },
      { k: 'Role', v: 'Full stack' },
      { k: 'Industry', v: 'Sustainability' },
      { k: 'Status', v: 'MVP complete, ready for pilot brands' },
    ],
    stack: ['Django', 'Django REST Framework', 'PostgreSQL', 'AWS', 'Docker', 'JWT', 'OAuth'],
    live: 'https://digipropass.com/',
    client: {
      title: 'Keshika Mahesh, Founder & CEO',
      text: 'Keshika found us on LinkedIn. A discovery call and a requirement deep-dive turned the idea into a working web application with a technical and business roadmap.',
    },
    problem: [
      'The EU is moving toward mandatory Digital Product Passports. Most brands cannot track sustainability data at product level, keep ingredient and origin transparency, or generate QR passports at scale.',
      'DigiProPass is the system that creates, manages and distributes those passports.',
    ],
    built: [
      {
        title: 'Three separate surfaces',
        points: [
          'Super admin panel for running the platform',
          'Business dashboard for brands and manufacturers',
          'Public passport view for consumers after a scan',
        ],
      },
      {
        title: 'Brand workflow',
        points: [
          'Self-service onboarding and CSV bulk import',
          'Materials, ingredients and country of origin per product',
          'Admin and Manager roles, with custom roles planned',
        ],
      },
      {
        title: 'Scoring and passports',
        points: [
          'Brands set each ingredient’s share; a scoring engine returns an overall sustainability score',
          'Multiple passports per product, each with its own URL and QR code, per unit or per batch',
        ],
      },
    ],
    results: [
      { v: 'MVP', k: 'core platform designed, built and complete' },
      { v: '3', k: 'surfaces: admin, business, consumer' },
      { v: 'Next', k: 'Shopify and WooCommerce, analytics, regulatory exports' },
    ],
    why: 'Sustainability scoring lives inside the product workflow instead of being bolted on, and the admin, business and consumer views stay cleanly separate.',
    gallery: [
      { src: '/media/dpp-dashboard.webp', alt: 'DigiProPass business dashboard' },
      { src: '/media/dpp-products.webp', alt: 'DigiProPass product list' },
      { src: '/media/dpp-passports.webp', alt: 'DigiProPass passport management' },
      { src: '/media/dpp-consumer.webp', alt: 'DigiProPass public passport view' },
    ],
  },
  {
    slug: 'healthy-fasal',
    name: 'Healthy Fasal',
    summary:
      'A zero-inventory farm-to-vendor grocery supply platform. Produce is bought only when demand exists, then delivered fresh, without the platform holding stock.',
    meta: [
      { k: 'Year', v: '2025' },
      { k: 'Duration', v: '4 months' },
      { k: 'Role', v: 'Full stack' },
      { k: 'Industry', v: 'AgriTech' },
      { k: 'Status', v: 'Live in production' },
    ],
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'AWS', 'Docker'],
    live: 'https://healthyfasal.com/',
    client: {
      title: 'Mr. Kamlesh, farmer and logistics business owner',
      text: 'Referred through a trusted network. Running both a farm and a logistics business made the supply-chain failures obvious to him.',
    },
    problem: [
      'Groceries reached vendors late and stale because of inventory mismanagement. Middle layers added delay, waste and weak quality control.',
      'Vendors had no structured way to order, and farmers were disconnected from real demand.',
    ],
    built: [
      {
        title: 'Demand first, procurement second',
        points: [
          'Vendors order against a wallet balance',
          'The order routes to its collection center, which procures from farmers',
          'Packing lists, challans and invoices are generated, then dispatched',
        ],
      },
      {
        title: 'Four operational panels',
        points: [
          'Super admin for multi-city operations',
          'Collection center for procurement and dispatch',
          'Vendor ordering, with prices in the local language',
          'Sales panel for on-ground vendor onboarding',
        ],
      },
      {
        title: 'Fair pricing',
        points: ['Pricing tiers by shop type: canteen, outlet, franchise, restaurant'],
      },
    ],
    results: [
      { v: '₹1Cr+', k: 'monthly turnover' },
      { v: '1,000+', k: 'orders processed' },
      { v: 'Live', k: 'multiple collection centers in production' },
    ],
    why: 'A ground-level problem, a founder with domain depth, and operational logic encoded in software, validated by revenue.',
    gallery: [
      { src: '/media/hf-vendor.webp', alt: 'Healthy Fasal vendor ordering' },
      { src: '/media/hf-orders.webp', alt: 'Healthy Fasal order management' },
      { src: '/media/hf-wallet.webp', alt: 'Healthy Fasal vendor wallet' },
      { src: '/media/hf-trade-inquiries.webp', alt: 'Healthy Fasal trade inquiries' },
    ],
  },
  {
    slug: 'natvoiz',
    name: 'Natvoiz',
    summary:
      'An enterprise voice AI platform built for Natsoft, a US consulting and BPO enterprise with 2,000+ employees. It started with recruitment calls and grew to insurance, sales and support.',
    meta: [
      { k: 'Year', v: '2023' },
      { k: 'Duration', v: '8 months' },
      { k: 'Role', v: 'AI engineer and full stack' },
      { k: 'Industry', v: 'Voice AI' },
      { k: 'Status', v: 'Deployed at Natsoft' },
    ],
    stack: ['Python', 'FastAPI', 'OpenAI', 'Deepgram', 'ElevenLabs', 'WebSockets', 'React', 'PostgreSQL'],
    client: {
      title: 'Natsoft',
      text: 'Recruiters were buried in repetitive follow-ups, candidates dropped off after offers, and nobody captured why people rejected them.',
    },
    problem: [
      'Replace repetitive, high-volume human calling with AI conversations that still feel human, and send structured results back to the CRM.',
      'We proposed a configurable voice platform rather than a single-purpose bot, so HR and operations teams could adapt it without engineering.',
    ],
    built: [
      {
        title: 'Visual flow builder',
        points: ['Drag-and-drop nodes, prompts, logic paths and fallbacks, built for non-engineers'],
      },
      {
        title: 'Swappable voice stack per flow',
        points: [
          'Speech-to-text: Deepgram, Google STT, AssemblyAI, Gladia',
          'Language models: OpenAI and Google',
          'Text-to-speech: ElevenLabs and Google TTS',
          'RAG against SOPs, FAQs and policy documents',
        ],
      },
      {
        title: 'CRM loop and analytics',
        points: [
          'An offer released in the CRM triggers the outbound call',
          'Recordings, transcripts and sentiment sync back',
          'Per-call LLM and TTS latency, hang-up reasons and live transcripts',
        ],
      },
    ],
    results: [
      { v: '~300ms', k: 'end-to-end latency, down from ~2s' },
      { v: '35–45%', k: 'fewer manual follow-ups' },
      { v: '8+', k: 'voice flows, in English, Telugu and Kannada' },
    ],
    why: 'A recruitment tool that became an enterprise voice platform, because it was designed to be configured rather than rebuilt.',
    gallery: [
      { src: '/media/nv-designer.webp', alt: 'Natvoiz visual flow builder' },
      { src: '/media/nv-flows.webp', alt: 'Natvoiz voice flows' },
      { src: '/media/nv-analytics.webp', alt: 'Natvoiz call analytics' },
      { src: '/media/nv-conversation.webp', alt: 'Natvoiz live conversation view' },
    ],
  },
  {
    slug: 'axion-plan',
    name: 'Axion Plan',
    summary:
      'AI-powered financial forecasting for enterprise leaders. It productizes a forecasting method that already made money in Excel.',
    meta: [
      { k: 'Year', v: '2025' },
      { k: 'Duration', v: '5 months' },
      { k: 'Role', v: 'Full stack and AI engineer' },
      { k: 'Industry', v: 'FinTech' },
      { k: 'Status', v: 'Live' },
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'OpenAI', 'OCR', 'RAG', 'Stripe'],
    live: 'https://axionplan.com/',
    client: {
      title: 'Dr. Steven, investment banker and executive coach',
      text: 'He brought Excel models his C-suite clients were already paying for. They worked, but they did not scale past 1:1 engagements.',
    },
    problem: [
      'The domain is real finance: P&L, balance sheets, cash flow, revenue modeling. We came from software, so it took repeated deep-dives and reverse-engineering Excel formulas until the software matched the model.',
    ],
    built: [
      {
        title: 'Guided financial workflows',
        points: [
          'Revenue streams, direct and indirect, fixed and variable costs',
          'Monthly distribution, profit-before-tax and cash forecasts',
          'Target-based scenarios',
        ],
      },
      {
        title: 'AI on the client’s own numbers',
        points: [
          'OCR ingestion of P&L statements with automatic cost categorization',
          'Questions like “Why is profit dropping in month 4?”',
          'What-ifs like “What happens if revenue increases 15%?”',
        ],
      },
      {
        title: 'A business, not just a tool',
        points: [
          'Token wallets and Stripe for usage-based pricing',
          'Owner, Analyst, Editor and Viewer roles',
          'A RAG support bot that hands off to WhatsApp when unsure',
        ],
      },
    ],
    results: [
      { v: '3+', k: 'AI features doing real work on client data' },
      { v: '1:1 → product', k: 'a coaching practice that can scale' },
      { v: 'Live', k: 'at axionplan.com' },
    ],
    why: 'Financial logic translated accurately into software, with AI layered on top of a correct model, not in place of one.',
    gallery: [
      { src: '/media/axion-portfolio.webp', alt: 'Axion Plan portfolio overview' },
      { src: '/media/axion-kpi.webp', alt: 'Axion Plan KPI view' },
      { src: '/media/axion-screen3.webp', alt: 'Axion Plan forecast charts' },
      { src: '/media/axion-screen4.webp', alt: 'Axion Plan monthly figures' },
    ],
  },
  {
    slug: 'course-companion',
    name: 'Course Companion',
    summary:
      'A privacy-first AI teaching assistant for universities and professors: a trusted extension of a specific professor, not a generic chatbot.',
    meta: [
      { k: 'Year', v: '2025' },
      { k: 'Duration', v: 'Ongoing' },
      { k: 'Role', v: 'Full stack and AI engineer' },
      { k: 'Industry', v: 'EdTech' },
      { k: 'Status', v: 'In active development' },
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'OpenAI', 'RAG', 'Vector database'],
    client: {
      title: 'Zoheb, PhD in Chemistry (Northwestern), AI Fellow at Handshake',
      text: 'He saw universities restricting or banning AI tools, even among people who understand the technology.',
    },
    problem: [
      'Professors do not trust generic AI tools. Institutions worry about student data, intellectual property and vendor lock-in.',
      'Professors do not want an AI tool; they want a trusted extension of themselves.',
    ],
    built: [
      {
        title: 'Professor-controlled',
        points: [
          'Upload notes, PDFs and readings',
          'Set tone, teaching style and what the AI may discuss',
          'Brand the companion and share one course link',
        ],
      },
      {
        title: 'Privacy as architecture',
        points: [
          'No unnecessary logging, no data crossing between courses',
          'No model training on student data',
          'Super admin sees counts only, never conversations or content',
        ],
      },
    ],
    results: [
      { v: 'Locked', k: 'privacy-first architecture' },
      { v: '3', k: 'fronts with hard boundaries' },
      { v: 'Building', k: 'early builds in progress' },
    ],
    resultsNote: 'This product is still in development; no outcome metrics yet.',
    why: 'Harder than consumer AI: skeptical expert users, high-trust buyers, and no room for a black box.',
    gallery: [
      { src: '/media/cc-dashboard.webp', alt: 'Course Companion professor dashboard' },
      { src: '/media/cc-course.webp', alt: 'Course Companion course setup' },
      { src: '/media/cc-branding.webp', alt: 'Course Companion branding settings' },
      { src: '/media/cc-students.webp', alt: 'Course Companion student overview' },
    ],
  },
  {
    slug: 'setoo',
    name: 'Setoo',
    summary:
      'Backend APIs for enterprise voice automation, built for Setoo, deployed for their client BU Bhandari, and reused for Vani Connect.',
    meta: [
      { k: 'Year', v: '2025' },
      { k: 'Duration', v: '3 months' },
      { k: 'Role', v: 'Backend engineer and AI developer' },
      { k: 'Industry', v: 'Enterprise AI' },
      { k: 'Status', v: 'Deployed across 3 organizations' },
    ],
    stack: ['Python', 'FastAPI', 'OpenAI', 'Deepgram', 'ElevenLabs', 'WebSockets', 'PostgreSQL'],
    client: {
      title: 'Harish Boke, Founder of Setoo',
      text: 'He overheard us discussing speech-to-text and text-to-speech pipelines in a café, called back while driving, and closed the engagement.',
    },
    problem: [
      'Setoo needed voice automation that sits inside its existing infrastructure, so the brief was backend only.',
    ],
    built: [
      {
        title: 'Use cases',
        points: [
          'Outbound sales calls and lead qualification',
          'Support call handling and routing',
          'Scheduled callbacks, call analytics and CRM sync',
        ],
      },
      {
        title: 'Modular by design',
        points: ['Built once, deployed across clients, customized per client'],
      },
    ],
    results: [
      { v: '3', k: 'organizations: Setoo, BU Bhandari, Vani Connect' },
      { v: 'API', k: 'backend-only delivery' },
      { v: '3 mo', k: 'from café conversation to deployment' },
    ],
    why: 'Proof that the voice stack is a system, not a one-off integration.',
    gallery: [],
  },
];

export const hiringArticle = {
  slug: 'high-volume-hiring',
  title: 'How generative AI is transforming high-volume hiring.',
  dek: 'The shift from manual hiring to AI-augmented recruitment.',
  meta: 'BitB Labs · Jan 29, 2026 · 12 min read · Industry education',
  sections: [
    {
      h: 'Where traditional recruitment breaks',
      p: [
        'Companies hiring hundreds or thousands of people a year still depend on manual effort and rough judgment, even with a modern applicant tracking system. Thousands of applications, pressure to close roles, candidate drop-off and tired interviewers. Teams work harder; outcomes do not improve in proportion.',
        'Rule-based automation (filters, templates, schedulers) cut effort but did not raise quality, because it cannot read context, transferable skills or open-ended answers.',
      ],
    },
    {
      h: 'The intervention',
      p: [
        'Generative AI was inserted only where human judgment was overloaded. The principle: AI supports decisions. Humans make them.',
      ],
      list: [
        'Resume understanding: skills, experience patterns and project depth normalized into profiles',
        'Skill mapping against the role, so shortlists move from keywords to capability signals',
        'Structured, asynchronous screening interviews that grow capacity without burning out interviewers',
        'Response analysis: summaries, skill indicators and communication signals instead of raw recordings',
        'Comparison views with strengths, risks and role fit, and no final recommendation',
      ],
    },
    {
      h: 'What changed',
      p: ['The system did not remove humans. It removed chaos.'],
      list: [
        'Resume screening time reduced 60–70%',
        'Recruiter capacity up 2–3×',
        'Feedback turnaround from days to minutes',
        'Interview consistency improved, and quality rose rather than slipped',
      ],
    },
    {
      h: 'Lessons worth keeping',
      list: [
        'Generative AI works as a co-pilot, not a replacement recruiter',
        'Skills-first evaluation beats keyword screening',
        'Where AI sits in the workflow matters more than which model is used',
        'Speed and fairness can coexist if AI is placed at the bottleneck',
        'Structured roles and clear skills are a prerequisite',
      ],
      p: [
        'Companies that delay this shift will hire slower and hire worse. Judgment, not speed, is the advantage; generative AI absorbs the noise so recruiters can use it.',
      ],
    },
  ] as { h: string; p?: string[]; list?: string[] }[],
  note: 'This piece is industry education and pattern-sharing. The outcomes are described at an awareness level across multiple high-volume roles.',
};
