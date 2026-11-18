// All copy is sourced from BITBLABS.md, the two LinkedIn recommendations in
// /public (digi1.png, digi2.png) and the contact details in lib/site.ts.
// Do not add metrics, quotes, URLs or people here that are not in those sources.

import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  LEGAL_NAME,
} from './site';

export const BOOKING_URL = 'https://tidycal.com/shubhamgupta/demo';
/** Same calendar, loaded inside the booking modal iframe. */
export const BOOKING_EMBED_URL = 'https://tidycal.com/shubhamgupta/demo';
/** One label for the one action, everywhere. */
export const BOOK_LABEL = 'Book a call';
/** Opens the booking modal (handled by BookingModal click interceptor). */
export const BOOKING_HASH = '#book';

export const contact = {
  email: CONTACT_EMAIL,
  emailHref: CONTACT_EMAIL_HREF,
  phone: CONTACT_PHONE,
  phoneDisplay: CONTACT_PHONE_DISPLAY,
  legalName: LEGAL_NAME,
  location: 'Pune, India · working remote, worldwide',
};

/** Nav label === the eyebrow printed above the section it points to. */
export const nav = [
  { label: 'Work', href: '/#work' },
  { label: 'Voice AI', href: '/services/voice' },
  { label: 'Approach', href: '/#approach' },
  { label: 'Impact', href: '/#impact' },
  { label: 'Voices', href: '/#voices' },
  { label: 'Studio', href: '/#studio' },
];

/** The header bar shows only these; the menu overlay and footer list everything in `nav`. */
export const primaryNav = nav.filter((n) => ['Work', 'Voice AI', 'Approach', 'Studio'].includes(n.label));

/** Teams we've built for. Natsoft is the client behind Natvoiz. */
export const clientLogos = [
  { src: '/dpplogo.svg', alt: 'DigiProPass', h: 26 },
  { src: '/brand/clients/healthy-fasal.png', alt: 'Healthy Fasal', h: 26 },
  { src: '/brand/clients/natsoft.png', alt: 'Natsoft', h: 30 },
  { src: '/brand/clients/setoo.png', alt: 'Setoo', h: 22 },
  { src: '/brand/clients/axion-plan.png', alt: 'Axion Plan', h: 34 },
  { src: '/brand/clients/course-companion.png', alt: 'Course Companion', h: 36 },
];

/** Every number names the product it came from. */
export const stats = [
  { value: '$120K+', label: 'monthly turnover, live in production', source: 'Healthy Fasal' },
  { value: '~300ms', label: 'voice response, down from ~2s', source: 'Natvoiz for Natsoft' },
  { value: '35–45%', label: 'fewer manual recruiter follow-ups', source: 'Natvoiz for Natsoft' },
  { value: '1,000+', label: 'orders processed', source: 'Healthy Fasal' },
  { value: '3', label: 'organizations on one voice backend', source: 'Setoo, BU Bhandari, Vani Connect' },
  { value: '5', label: 'products shipped, one in development', source: 'Portfolio' },
];

export const systemsProof = [
  {
    k: 'Built once, deployed three times',
    v: 'The Setoo voice backend now runs for Setoo, BU Bhandari and Vani Connect, customized per client.',
  },
  {
    k: 'Latency is product',
    v: 'Natvoiz went from ~2s to ~300ms with streaming pipelines and async orchestration.',
  },
  {
    k: 'Separate surfaces',
    v: 'Admin, operator and end user each get their own interface, from DigiProPass passports to Healthy Fasal’s four panels.',
  },
];

export type Status = 'Live' | 'Deployed' | 'Pilot-ready' | 'In development';

export type Project = {
  slug: string;
  name: string;
  industry: string;
  status: Status;
  line: string;
  /** Real public URL only (from BITBLABS.md). */
  live?: string;
  /** Shown in the card's browser-chrome URL bar; only for real public domains. */
  host?: string;
  bg: string;
  /** Static product / landing preview (not a live iframe). */
  shot?: string;
  /** Backend-only product: render the voice pipeline instead of a screen. */
  pipeline?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'digipropass',
    name: 'DigiProPass',
    industry: 'Sustainability',
    status: 'Pilot-ready',
    line: 'Digital Product Passports for EU compliance, one QR scan away.',
    live: 'https://digipropass.com/',
    host: 'digipropass.com',
    bg: 'linear-gradient(160deg,#2a1a6e 0%,#6d4aff 100%)',
    shot: '/media/digipropass-landing.webp',
  },
  {
    slug: 'healthy-fasal',
    name: 'Healthy Fasal',
    industry: 'AgriTech',
    status: 'Live',
    line: 'Zero-inventory farm-to-vendor supply, $120K+ a month.',
    live: 'https://healthyfasal.com/',
    host: 'healthyfasal.com',
    bg: 'linear-gradient(160deg,#0b2e1a 0%,#1f7a45 100%)',
    shot: '/media/healthy-fasal-landing.webp',
  },
  {
    slug: 'natvoiz',
    name: 'Natvoiz',
    industry: 'Voice AI',
    status: 'Deployed',
    line: 'Enterprise voice automation for Natsoft, brought from ~2s to ~300ms.',
    bg: 'linear-gradient(160deg,#070d24 0%,#1d3a8a 100%)',
    shot: '/media/nv-dashboard.webp',
  },
  {
    slug: 'axion-plan',
    name: 'Axion Plan',
    industry: 'FinTech',
    status: 'Live',
    line: 'An investment banker’s Excel method, productized with AI.',
    live: 'https://axionplan.com/',
    host: 'axionplan.com',
    bg: 'linear-gradient(160deg,#120a26 0%,#4b2a9a 100%)',
    shot: '/media/axion-work-cover.webp',
  },
  {
    slug: 'course-companion',
    name: 'Course Companion',
    industry: 'EdTech',
    status: 'In development',
    line: 'A privacy-first AI teaching assistant professors can trust.',
    bg: 'linear-gradient(160deg,#2a0812 0%,#8c1d3a 100%)',
    shot: '/media/cc-work-cover.webp',
  },
  {
    slug: 'setoo',
    name: 'Setoo',
    industry: 'Enterprise AI',
    status: 'Deployed',
    line: 'One voice backend, deployed across three organizations.',
    bg: 'linear-gradient(160deg,#1a0a0a 0%,#5a1a1a 100%)',
    pipeline: true,
  },
];

export const phases = [
  {
    n: '01',
    title: 'Discover',
    text: 'We map the product vision, users and constraints before writing code. In practice: discovery calls, reverse-engineering a founder’s Excel, sitting inside an existing workflow.',
  },
  {
    n: '02',
    title: 'Design',
    text: 'Interfaces, flows and architecture shaped together. Separate surfaces for each kind of user, and tools non-engineers can run.',
  },
  {
    n: '03',
    title: 'Build',
    text: 'Full-stack across AI, web and cloud, shipped in tight loops: React, Node or Django, PostgreSQL, AWS, and swappable STT, LLM and TTS providers.',
  },
  {
    n: '04',
    title: 'Deliver',
    text: 'Production-ready, then refined. “Delivered” has meant live revenue, a pilot-ready MVP, and a backend reused across clients.',
  },
];

export const featuredInsight = {
  href: '/insights/high-volume-hiring',
  tag: 'Case study · Recruitment',
  title: 'How generative AI is transforming high-volume hiring.',
  meta: 'Jan 29, 2026 · 12 min read',
  points: [
    { v: '60–70%', k: 'less resume screening time' },
    { v: '2–3×', k: 'recruiter capacity' },
    { v: 'Days → minutes', k: 'feedback turnaround' },
  ],
};

/**
 * Voices. Only entries with `verified: true` are published as quotes.
 * The DigiProPass quotes are real LinkedIn recommendations (April 24, 2025).
 * The other entries are DRAFTS written by us from BITBLABS.md outcomes; the
 * named people never said them. Get written approval from each person
 * (ideally their own wording) before flipping `verified` to true.
 */
export type Voice = {
  id: string;
  verified?: boolean;
  /** Phrase inside `text` to emphasise on the page. */
  highlight?: string;
  text: string;
  name: string;
  role: string;
  company: string;
  photo: string;
  /** Optional attribution shown under the card (LinkedIn, etc.). */
  source?: string;
  about?: string;
};

export const voices: Voice[] = [
  {
    id: 'digipropass-shubham',
    verified: true,
    highlight: 'quick to understand complex requirements',
    text: 'Technically strong and quick to understand complex requirements, he knew exactly what was needed, asked insightful questions, and consistently delivered on time, often contributing smart suggestions that elevated the final outcome.',
    name: 'Keshika Mahesh',
    role: 'Founder & CEO',
    company: 'DigiProPass',
    photo: '/brand/avatars/keshika-photo.png',
    source: 'LinkedIn recommendation, April 24, 2025',
    about: 'on Shubham',
  },
  {
    id: 'digipropass-shlok',
    verified: true,
    highlight: 'how effortless communication was',
    text: 'Shlok approaches his work with genuine care, showing a strong sense of commitment and attention to detail. I also appreciated how effortless communication was. He was always responsive, engaged, and clear in his updates.',
    name: 'Keshika Mahesh',
    role: 'Founder & CEO',
    company: 'DigiProPass',
    photo: '/brand/avatars/keshika-photo.png',
    source: 'LinkedIn recommendation, April 24, 2025',
    about: 'on Shlok',
  },
  {
    id: 'healthy-fasal',
    text: 'Our zero-inventory model needed software that could keep up: vendor wallets, collection centers, sales onboarding, all in sync. The platform now runs real volume across cities with over $120K in monthly turnover.',
    name: 'Mr. Kamlesh',
    role: 'Founder',
    company: 'Healthy Fasal',
    photo: '/brand/avatars/kamlesh.png',
  },
  {
    id: 'natvoiz',
    text: 'Recruitment follow-ups were burning out our team. BitBLabs built a voice platform our ops staff could configure themselves, with latency down to around 300ms, and manual follow-ups dropped by 35 to 45 percent.',
    name: 'Natsoft Leadership',
    role: 'Enterprise Operations',
    company: 'Natsoft',
    photo: '/brand/clients/natsoft.png',
  },
  {
    id: 'setoo',
    text: 'We needed backend voice APIs that plugged into our stack, not a black-box demo. The same modular system went live for us, then BU Bhandari, then Vani Connect, without rebuilding from scratch.',
    name: 'Harish Boke',
    role: 'Founder',
    company: 'Setoo',
    photo: '/brand/avatars/harish.png',
  },
  {
    id: 'axion-plan',
    text: 'My forecasting lived in Excel and worked, but it could not scale. They translated years of financial logic into a SaaS product with OCR ingestion and AI insights executives can actually query in plain English.',
    name: 'Dr. Steven',
    role: 'Founder',
    company: 'Axion Plan',
    photo: '/brand/avatars/steven.png',
  },
  {
    id: 'course-companion',
    text: 'Universities will not adopt generic AI tools. We needed professor-controlled companions with strict privacy, no student data training, and no lock-in. BitBLabs understood that from day one and built the architecture around it.',
    name: 'Zoheb',
    role: 'Founder',
    company: 'Course Companion',
    photo: '/brand/avatars/zoheb.png',
  },
];

/** How each engagement started, in BitBLabs' own words (not quotes). */
export const stories = [
  {
    slug: 'setoo',
    who: 'Harish Boke, Setoo',
    logo: '/brand/clients/setoo.png',
    logoH: 18,
    text: 'Overheard us talking through speech pipelines in a café, called back from the car, and closed the engagement the same day.',
    outcome: '3 organizations on one voice backend',
  },
  {
    slug: 'healthy-fasal',
    who: 'Mr. Kamlesh, Healthy Fasal',
    logo: '/brand/clients/healthy-fasal.png',
    logoH: 20,
    text: 'A farmer who also runs a logistics business, referred in through a trusted network, with a supply chain that wasted produce.',
    outcome: '$120K+ monthly turnover, live',
  },
  {
    slug: 'axion-plan',
    who: 'Dr. Steven, Axion Plan',
    logo: '/brand/clients/axion-plan.png',
    logoH: 28,
    text: 'Brought investment-banking models clients already paid for. We reverse-engineered every formula until the software matched.',
    outcome: 'A 1:1 coaching method, now a product',
  },
  {
    slug: 'natvoiz',
    who: 'Natsoft',
    logo: '/brand/clients/natsoft.png',
    logoH: 26,
    text: 'Recruiters buried in follow-up calls. We proposed a configurable voice platform instead of a single-purpose bot.',
    outcome: '~300ms latency, 35–45% fewer follow-ups',
  },
];

export const fitFor = [
  'Founders with deep domain knowledge (finance, agriculture, regulation, academia) who need it turned into a product.',
  'Operators replacing high-volume manual work with AI: recruitment, support, sales calls.',
  'Teams that want one studio from architecture to deployment, not staff augmentation or a template.',
];

export const engagement = [
  { k: 'Length', v: '2–6 months' },
  { k: 'Shape', v: 'Four phases, one team' },
  { k: 'Standard', v: 'Production-ready' },
  { k: 'Where', v: 'Remote, worldwide' },
];

/** Studio products (Made at BitBLabs) — own products, not client engagements. */
export type StudioProduct = {
  slug: string;
  name: string;
  tagline: string;
  line: string;
  href: string;
  host: string;
  shot: string;
  alt: string;
  bg: string;
};

export const studioProducts: StudioProduct[] = [
  {
    slug: 'rezonna',
    name: 'Rezonna',
    tagline: '24/7 AI sales caller for real estate leads',
    line: 'Rezonna calls back new leads in under 15 seconds, qualifies budget and intent in 14 languages, books site visits, and updates your CRM around the clock.',
    href: 'https://www.rezonna.com/',
    host: 'rezonna.com',
    shot: '/rezonna-slide-hero.png',
    alt: 'Rezonna hero: 24/7 AI sales caller for real estate leads with live call interface',
    bg: 'linear-gradient(160deg,#1a0c08 0%,#c45a2a 100%)',
  },
  {
    slug: 'ryft',
    name: 'Ryft',
    tagline: 'The workout tracker built by friends, for friends',
    line: 'Build routines, log workouts, earn XP and PRs, and stay consistent with your squad. Lightweight tracking with social accountability.',
    href: 'https://ryft.bitblabs.com/',
    host: 'ryft.bitblabs.com',
    shot: '/ryft-slide-hero.png',
    alt: 'Ryft hero: workout tracker built by friends, with progress and squad app screens',
    bg: 'linear-gradient(160deg,#0a1220 0%,#2a6bff 100%)',
  },
];
