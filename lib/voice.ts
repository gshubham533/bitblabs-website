// Voice AI service page. Every fact comes from BITBLABS.md (Natvoiz, Setoo)
// or Rezonna's own site (public/rezonna-slide-*.png). Do not add numbers,
// clients or integrations that are not in those sources.

export const voiceProof = [
  { v: '~300ms', k: 'end-to-end voice response, down from ~2s', src: 'Natvoiz for Natsoft' },
  { v: '85%', k: 'latency cut through streaming and async orchestration', src: 'Natvoiz for Natsoft' },
  { v: '35–45%', k: 'fewer manual recruiter follow-ups', src: 'Natvoiz for Natsoft' },
  { v: '3', k: 'organizations on one voice backend, built once', src: 'Setoo · BU Bhandari · Vani Connect' },
  { v: '<15s', k: 'to call back a new real-estate lead, 24/7', src: 'Rezonna' },
  { v: '8+', k: 'voice flows live, in English, Telugu and Kannada', src: 'Natvoiz for Natsoft' },
];

export type Deployment = {
  id: string;
  name: string;
  client: string;
  kind: string;
  meta: string;
  summary: string;
  built: string[];
  results: { v: string; k: string }[];
  href: string;
  hrefLabel: string;
  external?: boolean;
};

export const deployments: Deployment[] = [
  {
    id: 'natvoiz',
    name: 'Natvoiz',
    client: 'Natsoft, a US consulting and BPO enterprise with 2,000+ employees',
    kind: 'Enterprise voice platform',
    meta: '2023 · 8 months · AI engineering and full stack',
    summary:
      'Started as recruitment follow-up calls. We built a configurable platform instead of a single-purpose bot, so the same system went on to run insurance, sales and support calls.',
    built: [
      'Visual flow builder that HR and ops teams use without engineers',
      'CRM loop: an offer released in the CRM triggers the call, and the transcript, recording and sentiment sync back',
      'RAG over SOPs, FAQs and policy documents, so answers stay inside policy',
      'Per-call analytics: LLM latency, TTS latency, hang-up reason, live transcript',
    ],
    results: [
      { v: '~300ms', k: 'latency, from ~2s' },
      { v: '35–45%', k: 'fewer manual follow-ups' },
      { v: '500+', k: 'call logs' },
    ],
    href: '/work/natvoiz',
    hrefLabel: 'Read the Natvoiz case study',
  },
  {
    id: 'setoo',
    name: 'Setoo',
    client: 'Setoo, then their enterprise client BU Bhandari, then Vani Connect',
    kind: 'Voice backend APIs',
    meta: '2025 · 3 months · backend and AI development',
    summary:
      'A backend-only voice system that sits inside Setoo’s own infrastructure. Built once, deployed across three organizations, customized per client.',
    built: [
      'Automated outbound sales calls, lead qualification and follow-up',
      'Support call handling and routing',
      'Scheduled callbacks',
      'Call analytics and CRM sync',
    ],
    results: [
      { v: '3', k: 'organizations live' },
      { v: '3 mo', k: 'to deployment' },
      { v: '1', k: 'codebase, customized per client' },
    ],
    href: '/work/setoo',
    hrefLabel: 'Read the Setoo case study',
  },
  {
    id: 'rezonna',
    name: 'Rezonna',
    client: 'Our own product, for real-estate sales teams',
    kind: 'AI sales caller',
    meta: 'Made at BitBLabs · live at rezonna.com',
    summary:
      'Runs the first conversation with every new lead: qualifies the buyer, answers project questions and books the site visit before the sales team picks up the phone.',
    built: [
      'Calls back new leads in under 15 seconds',
      'Qualifies budget and intent in English and Hindi',
      'Books site visits and updates the CRM',
      'The same full conversation at 11 PM as at 11 AM, unlike an IVR menu',
    ],
    results: [
      { v: '<15s', k: 'lead callback' },
      { v: '24/7', k: 'coverage' },
      { v: '2', k: 'languages: English, Hindi' },
    ],
    href: 'https://www.rezonna.com/',
    hrefLabel: 'Visit rezonna.com',
    external: true,
  },
];

export const pipeline = [
  { k: 'Speech-to-text', v: ['Deepgram', 'Google STT', 'AssemblyAI', 'Gladia'] },
  { k: 'Language model + RAG', v: ['OpenAI GPT', 'Google LLMs', 'Your SOPs, FAQs, policies'] },
  { k: 'Text-to-speech', v: ['ElevenLabs', 'Google TTS', 'Voice and tone per flow'] },
];

export const latencyWork = [
  { k: 'Streaming pipelines', v: 'Speech is transcribed, reasoned over and spoken as it streams, not after each step finishes.' },
  { k: 'Async orchestration', v: 'STT, LLM and TTS run concurrently over WebSockets instead of waiting in line.' },
  { k: 'Optimized model chaining', v: 'Each hop between models is trimmed so the caller never hears the handoff.' },
  { k: 'Infrastructure tuning', v: 'Deployment and networking tuned for the round trip a phone call needs.' },
];

export const useCases = [
  { k: 'Recruitment', v: 'Offer-acceptance calls, candidate follow-ups and structured capture of why offers are rejected.', src: 'Natvoiz' },
  { k: 'Insurance', v: 'Policy and follow-up flows running on the same platform as recruitment.', src: 'Natvoiz' },
  { k: 'Outbound sales', v: 'Automated sales calls, lead qualification and follow-up.', src: 'Setoo' },
  { k: 'Customer support', v: 'Inbound call handling and routing, with answers grounded in your documents.', src: 'Natvoiz · Setoo' },
  { k: 'Scheduled callbacks', v: 'Calls that happen when the customer asked, with the result logged.', src: 'Setoo' },
  { k: 'Real-estate leads', v: 'Instant callback, budget and intent qualification, site-visit booking.', src: 'Rezonna' },
];

export const afterCall = [
  'Full transcript',
  'Call recording',
  'Structured feedback',
  'Sentiment',
  'Intent tags',
  'CRM sync',
];

export const controls = [
  { k: 'Swappable providers', v: 'Each flow picks its own STT, LLM and TTS, so you are not locked to one vendor.' },
  { k: 'Built for non-engineers', v: 'A visual builder for prompts, logic paths, fallbacks and multi-step flows.' },
  { k: 'Multi-organization', v: 'Isolated data and flows per organization, from one platform.' },
  { k: 'Role-based access', v: 'Control who can edit flows, see analytics and open call logs.' },
  { k: 'Answers inside policy', v: 'A knowledge base and RAG keep the agent to your approved material.' },
  { k: 'Audit trail', v: 'Every recording and transcript is stored for review.' },
];

export const voiceFaq = [
  {
    q: 'Can we keep the speech and voice vendors we already use?',
    a: 'Yes. Providers are configured per flow. Natvoiz runs Deepgram, Google STT, AssemblyAI or Gladia for speech-to-text, OpenAI or Google models, and ElevenLabs or Google TTS.',
  },
  {
    q: 'Does it work with our CRM?',
    a: 'Our deployments sync recordings, transcripts, sentiment and outcomes back to the CRM, and can trigger calls from CRM events, such as an offer letter being released.',
  },
  {
    q: 'Which languages have you shipped?',
    a: 'English, Telugu and Kannada flows at Natsoft, and English and Hindi on Rezonna.',
  },
  {
    q: 'Can it plug into our own platform instead of being a separate app?',
    a: 'Yes. Setoo was delivered as backend APIs inside their infrastructure, then deployed for two more organizations.',
  },
  {
    q: 'How long does it take?',
    a: 'The Setoo backend took 3 months. The full Natvoiz platform, with its flow builder and analytics, took 8. We scope yours on the first call.',
  },
];
