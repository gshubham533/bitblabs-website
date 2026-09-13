import type { StorySlide } from './story-slide'

export interface PortfolioProject {
  id: string
  slug: string
  title: string
  tagline: string
  description: string
  role: string
  duration: string
  year: string
  category: 'ai' | 'web' | 'mobile' | 'data' | 'other'
  tech: string[]
  highlights: string[]
  metrics?: {
    label: string
    value: string
  }[]
  /** Optional override for the project metrics section heading copy. */
  metricsSection?: {
    eyebrow: string
    headline: string
  }
  images: {
    thumbnail: string
    /** Preferred image for work listing cards and hero previews */
    cover?: string
    /** Work listing cover when case study should stay image-free */
    workCover?: string
    /** Optional looping hero video (case study header). Poster falls back to cover. */
    coverVideo?: string
    /** CSS aspect-ratio for cover image, e.g. "1024/490" */
    coverAspect?: string
    /** Screenshot frame background — dark UI products use a black frame instead of white. */
    screenshotFrame?: 'light' | 'dark'
    /** Default frame style for this project's screenshots. */
    screenshotStyle?: 'minimal' | 'device'
    gallery?: string[]
  }
  links: {
    live?: string
    github?: string
    case_study?: string
    /** Custom CTA label when linking to live (e.g. "Live Page") */
    ctaLabel?: string
  }
  color: string
  featured?: boolean
  slides?: StorySlide[]
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '7',
    slug: 'digipropass',
    title: 'DigiProPass',
    tagline: 'EU Digital Product Passport ops for brands that need product-level compliance',
    description:
      'Brands selling into Europe need product-level sustainability data, QR passports, and a clear split between admin, business, and consumer access. DigiProPass turns that compliance burden into a repeatable create–manage–publish workflow.',
    role: 'Platform delivery',
    duration: '6 months',
    year: '2024',
    category: 'web',
    tech: ['Django', 'Django REST Framework', 'PostgreSQL', 'AWS', 'Docker', 'JWT', 'OAuth'],
    highlights: [
      'Alignment with upcoming EU compliance requirements',
      'Product-level transparency, not just brand-level claims',
      'Scalable QR-based digital passport generation',
      'Clean separation of admin, business, and consumer layers',
      'Sustainability scoring baked directly into product workflows',
    ],
    metrics: [
      { label: 'Products Tracked', value: '10K+' },
      { label: 'Compliance Rate', value: '100%' },
      { label: 'Brand Partners', value: '50+' },
    ],
    images: {
      thumbnail: '/dpplogo.svg',
      cover: '/dpp-dashboard.png',
      coverVideo: '/Digi1.mp4',
      coverAspect: '1024/490',
      screenshotStyle: 'device',
    },
    links: {
      live: 'https://digipropass.com/',
    },
    color: '#6366F1',
    featured: true,
    slides: [
      {
        id: 1,
        type: 'intro',
        title: 'Compliance as an ops workflow',
        content:
          'DigiProPass helps consumer-goods brands meet upcoming EU Digital Product Passport rules. The job is operational: capture product data, score sustainability, generate QR passports, and keep brand teams and shoppers on the same record.',
        highlight: 'Regulatory compliance handled as a product workflow, not a one-off spreadsheet export.',
      },
      {
        id: 2,
        type: 'problem',
        title: 'Where the process broke',
        content:
          'Most brands could not track sustainability at product level, keep origin and materials current, or issue and update QR passports at volume. Compliance sat in documents; consumers saw brand claims, not product proof.',
        highlight: 'No shared system between compliance teams, product managers, and the public passport view.',
        backgroundVideo: '/Digi2.mp4',
      },
      {
        id: 3,
        type: 'solution',
        title: 'What we put in the stack',
        content:
          'BitBLabs built a three-layer platform: internal admin, brand business dashboard, and public passport after QR scan. Brands onboard, bulk-import products, attach sustainability data, and publish passports from one place.',
        highlight: 'Admin, brand ops, and consumer views stay separated — same passport data, different access.',
        backgroundVideo: '/Digi3.mp4',
      },
      {
        id: 4,
        type: 'process',
        title: 'Passport workflow',
        content: 'From product intake to a scannable passport consumers can trust.',
        steps: [
          { number: 1, title: 'Ingest products', description: 'Add items singly or bulk-upload via CSV with categories and tags' },
          { number: 2, title: 'Enrich sustainability data', description: 'Materials, ingredients, origin, and environmental inputs' },
          { number: 3, title: 'Score & generate passport', description: 'Sustainability scoring feeds the QR-backed digital passport' },
          { number: 4, title: 'Publish to consumers', description: 'Shoppers scan and see origin, materials, and impact on the public view' },
        ],
      },
      {
        id: 5,
        type: 'scene',
        title: 'Brand dashboard in use',
        content:
          'Day-to-day ops live in the business dashboard: onboarding, product edits, multi-passport linking, and live readouts for CO₂, water, and eco scores.',
        highlight: 'Compliance work stays inside the product workflow brands already run.',
        image: '/dpp-dashboard.png',
      },
      {
        id: 6,
        type: 'scene',
        title: 'Product & brand control',
        content:
          'Product lists, brand profile, users, and subscription status sit in one hub so compliance and commercial teams share the same source of truth.',
        highlight: 'Product-level passports — not just brand-level claims.',
        image: '/dpp-products.png',
      },
      {
        id: 7,
        type: 'conclusion',
        title: 'What changed',
        content:
          'Brands move from ad-hoc sustainability files to a repeatable passport pipeline ready for pilot onboarding. MVP core is live; deeper ecommerce and regulatory export hooks remain on the roadmap.',
        highlight: 'EU DPP readiness as an operating system for product transparency.',
        backgroundVideo: '/Digi4.mp4',
      },
      {
        id: 8,
        type: 'gallery',
        title: 'Platform gallery',
        content: 'Sign-in, dashboard, products, brand profile, and sustainability news feed.',
        galleryImages: [
          '/dpp-login.png',
          '/dpp-dashboard.png',
          '/dpp-products.png',
          '/dpp-my-brand.png',
          '/dpp-news-feed.png',
        ],
      },
    ],
  },
  {
    id: '8',
    slug: 'healthy-fasal',
    title: 'Healthy Fasal',
    tagline: 'Demand-first grocery ops: vendors order, then farms and centers fulfill',
    description:
      'Healthy Fasal runs farm-to-vendor grocery procurement without pre-stocking. Vendors order on wallet credit; collection centers procure and dispatch only after demand is confirmed — live volume with over a crore in monthly turnover.',
    role: 'Platform delivery',
    duration: '4 months',
    year: '2025',
    category: 'web',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Express', 'AWS', 'Docker'],
    highlights: [
      'Zero-inventory model - procurement only after confirmed demand',
      'Multi-panel architecture for scalable operations',
      'Wallet-based ordering system for vendors',
      'Real-time order tracking and fulfillment',
      'Generating ₹1 Crore+ monthly turnover',
    ],
    metrics: [
      { label: 'Monthly Revenue', value: '₹1Cr+' },
      { label: 'Collection Centers', value: 'Multi' },
      { label: 'Order Volume', value: 'High' },
    ],
    images: {
      thumbnail: '/hf-logo.png',
      cover: '/hf-work-cover.png',
      coverVideo: '/farm5.mp4',
      coverAspect: '1024/490',
      screenshotStyle: 'device',
    },
    links: {
      live: 'https://healthyfasal.com/',
    },
    color: '#22C55E',
    featured: true,
    slides: [
      {
        id: 1,
        type: 'intro',
        title: 'Fresh produce without inventory guesswork',
        content:
          'Healthy Fasal is a farm-to-vendor grocery platform built so procurement follows confirmed vendor demand — not warehouses of produce waiting to go stale.',
        highlight: 'Demand first. Procurement second. Dispatch when the order is real.',
      },
      {
        id: 2,
        type: 'problem',
        title: 'Where the process broke',
        content:
          'Produce reached shops late and soft. Middle layers added delay and waste. Vendors had no structured ordering path; farmers had no clean signal of what was actually needed.',
        highlight: 'Traditional grocery supply stacked inventory before knowing demand.',
        backgroundVideo: '/farm4.mp4',
      },
      {
        id: 3,
        type: 'solution',
        title: 'What we put in the stack',
        content:
          'BitBLabs delivered four synced panels: super admin for multi-city control, collection centers for procure-and-dispatch, vendor ordering with wallets, and sales for on-ground shop onboarding.',
        highlight: 'One ops system for cities, centers, vendors, and field sales.',
      },
      {
        id: 4,
        type: 'process',
        title: 'Order-to-delivery flow',
        content: 'Every order runs without holding stock ahead of time.',
        steps: [
          { number: 1, title: 'Vendor orders', description: 'Shop orders against wallet balance in Hindi/Marathi-friendly UI' },
          { number: 2, title: 'Center receives demand', description: 'Order routes to the assigned collection center' },
          { number: 3, title: 'Farm procurement', description: 'Center buys fresh produce against confirmed demand' },
          { number: 4, title: 'Pack & deliver', description: 'Challans, invoices, and delivery status close the loop' },
        ],
      },
      {
        id: 5,
        type: 'scene',
        title: 'Vendor & wallet ops',
        content:
          'Vendors browse, cart, and checkout on credit. Admins top up wallets, see locked vs available balances, and keep checkout friction low across centers.',
        highlight: 'Wallet credits remove payment delays from daily ordering.',
        image: '/hf-vendor.png',
      },
      {
        id: 6,
        type: 'scene',
        title: 'Orders & sales onboarding',
        content:
          'Ops track dispatched and delivered orders in real time. Sales capture trade inquiries from shop visits; admins approve vendors before they go live.',
        highlight: 'Field sales and digital ordering share one approval trail.',
        image: '/hf-orders.png',
      },
      {
        id: 7,
        type: 'stats',
        title: 'Live volume',
        content: 'The zero-inventory model runs in production across collection centers.',
        stats: [
          { value: '₹1Cr+', label: 'Monthly turnover' },
          { value: 'Live', label: 'In production' },
          { value: 'Multi', label: 'Collection centers' },
        ],
        highlight: 'Real city ops — not a pilot slide deck.',
      },
      {
        id: 8,
        type: 'conclusion',
        title: 'What changed',
        content:
          'Procurement follows demand. Vendors order digitally, centers fulfill fresh, and leadership sees the same order and wallet truth across cities.',
        highlight: 'From farm to vendor with less waste and clearer margins.',
        backgroundVideo: '/farm6.mp4',
      },
      {
        id: 9,
        type: 'gallery',
        title: 'Platform gallery',
        content: 'Login, vendor ordering, orders, wallets, and trade inquiries.',
        galleryImages: [
          '/hf-login.png',
          '/hf-vendor.png',
          '/hf-orders.png',
          '/hf-wallet.png',
          '/hf-trade-inquiries.png',
        ],
      },
    ],
  },
  {
    id: '9',
    slug: 'natvoiz-ai',
    title: 'Natvoiz AI Voice Bot',
    tagline: 'Recruitment follow-ups on voice — then the same stack for other high-volume calls',
    description:
      'For Natsoft (2,000+ employees), BitBLabs replaced manual recruitment follow-ups with a CRM-triggered voice system. Manual follow-ups dropped 35–45%; conversation latency landed near ~300ms. The same platform later covered insurance, sales, and support flows.',
    role: 'AI systems delivery',
    duration: '8 months',
    year: '2023',
    category: 'ai',
    tech: ['Python', 'FastAPI', 'OpenAI', 'Deepgram', 'ElevenLabs', 'WebSockets', 'React', 'PostgreSQL'],
    highlights: [
      'Reduced latency from ~2s to ~300ms for human-like conversations',
      'Configurable STT, LLM, and TTS providers per flow',
      'Visual drag-and-drop voice flow builder',
      'RAG support with knowledge base integration',
      '35-45% reduction in manual follow-ups at Natsoft',
    ],
    metrics: [
      { label: 'Latency', value: '~300ms' },
      { label: 'Call Logs', value: '500+' },
      { label: 'Voice Flows', value: '8+' },
    ],
    images: {
      thumbnail: '/nv-logo.svg',
      coverAspect: '1024/490',
      screenshotFrame: 'dark',
      screenshotStyle: 'device',
    },
    links: {
      live: 'https://natsoft.com/',
    },
    color: '#7C3AED',
    featured: true,
    slides: [
      {
        id: 1,
        type: 'intro',
        title: 'Fewer manual follow-ups after offer rollout',
        content:
          'Natvoiz started as recruitment voice automation for Natsoft, a US consulting enterprise with 2,000+ employees. The business goal was clear: cut repetitive candidate follow-ups and write structured outcomes back into the CRM.',
        highlight: 'Lead with hiring ops outcomes — then reuse the platform for other call workflows.',
      },
      {
        id: 2,
        type: 'problem',
        title: 'Where the process broke',
        content:
          'Recruiters burned cycles on the same follow-ups. Candidates dropped after offer rollout. Rejection reasons never landed in a structured field. Manual calling meant delay, inconsistent notes, and burnout.',
        highlight: 'High volume, low leverage work sitting outside the CRM.',
      },
      {
        id: 3,
        type: 'solution',
        title: 'What we put in the stack',
        content:
          'BitBLabs built a configurable voice platform: visual flow builder for ops teams, CRM-triggered outbound calls, transcripts and sentiment synced back, and swappable STT / LLM / TTS per flow.',
        highlight: 'Not a one-off bot — an orchestration layer HR and ops can adapt without engineering every change.',
      },
      {
        id: 4,
        type: 'process',
        title: 'CRM → call → write-back',
        content: 'Offer release becomes an automated voice loop with structured feedback.',
        steps: [
          { number: 1, title: 'CRM trigger', description: 'Offer letter release fires an API call to the voice system' },
          { number: 2, title: 'Outbound call', description: 'Bot dials the candidate and runs the configured flow' },
          { number: 3, title: 'Conversation', description: 'Confirms status, explains next steps, collects feedback' },
          { number: 4, title: 'CRM sync', description: 'Recording, transcript, and sentiment land back in the CRM' },
        ],
      },
      {
        id: 5,
        type: 'stats',
        title: 'What changed in hiring',
        content: 'Measured outcomes after the recruitment workflow went live.',
        stats: [
          { value: '35–45%', label: 'Fewer manual follow-ups' },
          { value: '~300ms', label: 'Conversation latency' },
          { value: '500+', label: 'Call logs' },
          { value: '8+', label: 'Voice flows' },
        ],
        highlight: 'Recruiters spend time on judgment calls; the system handles the chase.',
      },
      {
        id: 6,
        type: 'insight',
        title: 'Same platform, more workflows',
        content:
          'Because the stack was configurable — flows, languages, knowledge bases, providers — Natsoft expanded beyond recruitment into insurance, sales, and customer support without rebuilding the core.',
        highlight: 'Recruitment proved the pattern; other high-volume voice jobs reused it.',
      },
      {
        id: 7,
        type: 'conclusion',
        title: 'Enterprise voice ops',
        content:
          'Multi-org isolation, role-based access, RAG on SOPs, and full call audit trails keep the platform governable as use cases multiply.',
        highlight: 'From hiring follow-ups to a reusable enterprise voice layer.',
      },
    ],
  },
  {
    id: '10',
    slug: 'setoo-voice-ai',
    title: 'Setoo AI Voice Bot',
    tagline: 'Modular voice APIs reused across Setoo, BU Bhandari, and Vani Connect',
    description:
      'Backend voice automation APIs for Setoo — sales, support, and lead engagement — designed to plug into existing stacks. The same modular system went live for BU Bhandari, then Vani Connect, without rebuilding from scratch.',
    role: 'Backend & AI delivery',
    duration: '3 months',
    year: '2025',
    category: 'ai',
    tech: ['Python', 'FastAPI', 'OpenAI', 'Deepgram', 'ElevenLabs', 'WebSockets', 'PostgreSQL'],
    highlights: [
      'Backend-only architecture for enterprise integration',
      'Deployed for BU Bhandari enterprise client',
      'Sales calls, customer support, and lead engagement',
      'Modular architecture reused across Vani Connect',
      'Born from a café conversation - real inbound opportunity',
    ],
    metrics: [
      { label: 'Deployments', value: '3+' },
      { label: 'Use Cases', value: 'Sales, Support' },
      { label: 'Architecture', value: 'Modular' },
    ],
    images: {
      thumbnail: '/setu-logo.svg',
      coverAspect: '1024/490',
      screenshotFrame: 'dark',
    },
    links: {},
    color: '#EF4444',
    featured: true,
    slides: [
      {
        id: 1,
        type: 'intro',
        title: 'Voice APIs that fit the client stack',
        content:
          'Setoo needed backend voice automation they could own inside their infrastructure — not a black-box demo. The engagement started from a real technical conversation and became multi-org delivery.',
        highlight: 'Backend-only APIs for sales, support, and lead engagement.',
      },
      {
        id: 2,
        type: 'problem',
        title: 'Where the process broke',
        content:
          'Outbound sales, support routing, and lead follow-ups still depended on people repeating the same call patterns. Off-the-shelf voice tools did not drop cleanly into Setoo’s existing systems.',
        highlight: 'High-volume calling without a reusable integration layer.',
      },
      {
        id: 3,
        type: 'solution',
        title: 'What we put in the stack',
        content:
          'BitBLabs delivered modular voice APIs — STT, LLM, TTS, and call control — wired for Setoo’s stack first, then packaged so the same core could be stood up for other orgs.',
        highlight: 'Build once as APIs; deploy again without a full rewrite.',
      },
      {
        id: 4,
        type: 'architecture',
        title: 'Three organizations, one core',
        content: 'The modular backend moved across clients with configuration, not a rebuild.',
        layers: [
          { name: 'Setoo', description: 'Primary deployment and platform development', icon: '1', color: '#EF4444' },
          { name: 'BU Bhandari', description: 'Enterprise client live via Setoo', icon: '2', color: '#DC2626' },
          { name: 'Vani Connect', description: 'Same architecture reused for a new org', icon: '3', color: '#B91C1C' },
        ],
        highlight: 'Setoo → BU Bhandari → Vani Connect on shared modular voice APIs.',
      },
      {
        id: 5,
        type: 'process',
        title: 'Workflows the APIs cover',
        content: 'Same backend primitives, different call jobs.',
        steps: [
          { number: 1, title: 'Sales calls', description: 'Automated outbound sales conversations' },
          { number: 2, title: 'Customer support', description: 'AI-assisted support handling and routing' },
          { number: 3, title: 'Lead engagement', description: 'Qualification and follow-up calling' },
          { number: 4, title: 'CRM sync', description: 'Outcomes and analytics back into existing systems' },
        ],
      },
      {
        id: 6,
        type: 'stats',
        title: 'Reuse, not rebuild',
        content: 'Deployment footprint after the modular APIs shipped.',
        stats: [
          { value: '3+', label: 'Organizations' },
          { value: 'Sales, Support', label: 'Primary use cases' },
          { value: 'API', label: 'Integration style' },
        ],
        highlight: 'Same core platform, customized per org.',
      },
      {
        id: 7,
        type: 'conclusion',
        title: 'What changed',
        content:
          'Setoo got voice automation that plugs into their stack. BU Bhandari and Vani Connect inherited the same modular system instead of starting over — proof that backend depth compounds across clients.',
        highlight: 'One modular voice layer. Three organizations live.',
      },
    ],
  },
  {
    id: '11',
    slug: 'axion-plan',
    title: 'Axion Plan',
    tagline: 'Excel financial models turned into a shared forecasting workspace',
    description:
      'Axion Plan takes proven investment-banking style forecasts out of fragile spreadsheets. Leaders model revenue, costs, PBT, and cash flow in a shared web workspace — with OCR P&L intake and AI explanations for non-finance operators.',
    role: 'Platform & AI delivery',
    duration: '5 months',
    year: '2025',
    category: 'ai',
    tech: ['React', 'Node.js', 'PostgreSQL', 'OpenAI', 'OCR', 'RAG', 'Stripe'],
    highlights: [
      'Converted proven Excel financial models into scalable SaaS',
      'OCR-based P&L statement ingestion with auto-categorization',
      'AI financial insights with natural language querying',
      'Token-based monetization system',
      'RAG-powered support chatbot',
    ],
    metrics: [
      { label: 'AI Features', value: '3+' },
      { label: 'Industry', value: 'FinTech' },
      { label: 'Audience', value: 'Enterprise' },
    ],
    metricsSection: {
      eyebrow: 'Project Snapshot',
      headline: 'Enterprise financial planning, powered by AI.',
    },
    images: {
      thumbnail: '/axion-logo.png',
      cover: '/axion-work-cover.png',
      coverVideo: '/Axion1.mp4',
      coverAspect: '1024/490',
      screenshotFrame: 'dark',
    },
    links: {
      live: 'https://axionplan.com/',
    },
    color: '#A855F7',
    featured: true,
    slides: [
      {
        id: 1,
        type: 'intro',
        title: 'Forecasting without spreadsheet chaos',
        content:
          'Axion Plan helps enterprise leaders model revenues, costs, profitability, and cash flows in a productized workspace — the same methodology that used to live only in custom Excel.',
        highlight: 'Consulting-grade forecasting, delivered as shared software.',
      },
      {
        id: 2,
        type: 'problem',
        title: 'Where the process broke',
        content:
          'Clients paid for the Excel models, but collaboration was painful, non-finance leaders struggled with the learning curve, and AI explanations or scenario questions were not part of the workflow.',
        highlight: 'Expertise trapped in files that could not scale past 1:1 engagements.',
        backgroundVideo: '/Axion2.mp4',
      },
      {
        id: 3,
        type: 'solution',
        title: 'What we put in the stack',
        content:
          'BitBLabs translated the financial logic into a two-front platform: operator admin plus company workspaces for projects, monthly distributions, PBT, and cash flow — with roles for owners, analysts, editors, and viewers.',
        highlight: 'Domain models first; UI and AI layered on accurate finance logic.',
      },
      {
        id: 4,
        type: 'scene',
        title: 'Portfolio & KPI view',
        content:
          'Leaders see revenue, profitability, and OPEX across projects without opening individual workbooks — KPI cards and recent activity in one executive view.',
        highlight: 'Portfolio health readable without spreadsheet archaeology.',
        image: '/axion-portfolio.png',
        imageAspect: '1024/490',
      },
      {
        id: 5,
        type: 'process',
        title: 'From statement to forecast',
        content: 'How planning moves inside Axion Plan.',
        steps: [
          { number: 1, title: 'Ingest or enter data', description: 'Upload P&L via OCR or input revenue and cost structures' },
          { number: 2, title: 'Model the year', description: 'Monthly distribution, targets, and scenario assumptions' },
          { number: 3, title: 'Generate forecasts', description: 'PBT, profitability, and cash position over time' },
          { number: 4, title: 'Ask in plain language', description: 'AI insights on project data; token wallet meters usage' },
        ],
        backgroundVideo: '/Axion3.mp4',
      },
      {
        id: 6,
        type: 'scene',
        title: 'Token wallet & access',
        content:
          'Usage-based tokens cover AI insights, projections, and cashflow updates. Profile and role settings keep identity, security, and billing in one place.',
        highlight: 'Monetization and collaboration built into the same workspace.',
        image: '/axion-wallet-framed.png',
        imageAspect: '1024/490',
        imageFrame: 'none',
        imageFit: 'cover',
      },
      {
        id: 7,
        type: 'conclusion',
        title: 'What changed',
        content:
          'The founder’s forecasting method became a SaaS product: faster client onboarding, shared models, OCR intake, and AI that explains the numbers instead of replacing judgment.',
        highlight: 'Excel expertise productized — finance logic intact.',
        backgroundVideo: '/Axion4.mp4',
      },
      {
        id: 8,
        type: 'gallery',
        title: 'Product surfaces',
        content: 'Sign-in, portfolio, KPIs, profile, and token wallet.',
        galleryImages: [
          '/axion-login-framed.png',
          '/axion-portfolio.png',
          '/axion-kpi.png',
          '/axion-profile.png',
          '/axion-wallet-framed.png',
        ],
      },
    ],
  },
  {
    id: '12',
    slug: 'course-companion',
    title: 'Course Companion',
    tagline: 'Professor-owned course AI with privacy boundaries universities can accept',
    description:
      'Course Companion lets professors publish a controlled teaching companion grounded in their materials — without training on student chats or exposing course content to platform admins. Built for institutional trust; currently in active development.',
    role: 'Platform & AI delivery',
    duration: 'Ongoing',
    year: '2025',
    category: 'ai',
    tech: ['React', 'Node.js', 'PostgreSQL', 'OpenAI', 'RAG', 'Vector DB'],
    highlights: [
      'Privacy-first by design with minimal data exposure',
      'Professor-controlled AI behavior and content',
      'Zero data lock-in, no model training on student data',
      'Institution-friendly architecture',
      'Three-front platform: Professor, Student, Super Admin',
    ],
    metrics: [
      { label: 'Status', value: 'In Dev' },
      { label: 'Domain', value: 'EdTech' },
      { label: 'Focus', value: 'Privacy' },
    ],
    metricsSection: {
      eyebrow: 'Project Snapshot',
      headline: 'A privacy-first teaching platform in active development.',
    },
    images: {
      thumbnail: '/cc-logo.png',
      cover: '/cc-work-cover.png',
      coverVideo: '/Course.mp4',
      coverAspect: '1024/492',
      screenshotStyle: 'device',
    },
    links: {},
    color: '#14B8A6',
    featured: true,
    slides: [
      {
        id: 1,
        type: 'intro',
        title: 'A teaching companion professors control',
        content:
          'Course Companion is a privacy-first AI layer for universities: professors ground the companion in their materials, students ask course-scoped questions, and institutions keep IP and student data inside clear boundaries.',
        highlight: 'Amplify teaching hours — without handing the course to a generic chatbot.',
      },
      {
        id: 2,
        type: 'problem',
        title: 'Where the process broke',
        content:
          'Faculty hesitate to adopt consumer AI. Universities restrict tools over privacy, IP leakage, and lock-in. Generic chatbots are not professor-centric and rarely fit institutional policy.',
        highlight: 'Professors want a trusted extension of their course — not another opaque AI product.',
        backgroundVideo: '/Course3.mp4',
      },
      {
        id: 3,
        type: 'solution',
        title: 'What we put in the stack',
        content:
          'BitBLabs is building three fronts with hard separation: professor configuration, student chat, and a deliberately minimal super admin. Privacy is architectural — not a policy footnote.',
        highlight: 'Professor-owned scope, tone, and materials; admin sees aggregates, not conversations.',
      },
      {
        id: 4,
        type: 'process',
        title: 'Professor → student workflow',
        content: 'How a course companion goes live.',
        steps: [
          { number: 1, title: 'Upload materials', description: 'Notes, PDFs, and readings that ground answers' },
          { number: 2, title: 'Set behavior', description: 'Tone, teaching style, and what the AI may discuss' },
          { number: 3, title: 'Share course link', description: 'Students join a branded, course-scoped chat' },
          { number: 4, title: 'Keep privacy boundaries', description: 'No training on student data; no cross-course leakage' },
        ],
      },
      {
        id: 5,
        type: 'scene',
        title: 'Teacher dashboard & courses',
        content:
          'Professors see course and student counts, conversation metrics, and course spaces with tutor persona and document controls in one portal.',
        highlight: 'Institution-aware branding with professor-owned course configuration.',
        image: '/cc-dashboard.png',
      },
      {
        id: 6,
        type: 'architecture',
        title: 'Privacy by front',
        content: 'Clear responsibility boundaries across the three fronts.',
        layers: [
          { name: 'Professor', description: 'Owns materials, persona, and shareable course links', icon: 'P', color: '#14B8A6' },
          { name: 'Student', description: 'Chat only within that course’s grounded scope', icon: 'S', color: '#0D9488' },
          { name: 'Super admin', description: 'Platform totals only — no chats or course content', icon: 'A', color: '#0F766E' },
        ],
        highlight: 'Visibility limited by design, not by trust alone.',
        backgroundVideo: '/Course1.mp4',
      },
      {
        id: 7,
        type: 'conclusion',
        title: 'Status & intent',
        content:
          'Core architecture and privacy model are locked; early builds are in progress. Course Companion sits where AI capability meets academic trust — systems institutions can allow, not just demos faculty try once.',
        highlight: 'Building AI people are comfortable trusting inside a course.',
        backgroundVideo: '/Course2.mp4',
      },
      {
        id: 8,
        type: 'gallery',
        title: 'Portal gallery',
        content: 'Login, dashboard, course view, students, and branding.',
        galleryImages: [
          '/cc-login.png',
          '/cc-dashboard.png',
          '/cc-course.png',
          '/cc-students.png',
          '/cc-branding.png',
        ],
      },
    ],
  },
]
