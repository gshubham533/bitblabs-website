export const COMPANY_SIZE_OPTIONS = [
  'Under 50',
  '50–199',
  '200–499',
  '500–2,000',
  '2,000+',
] as const

export const AUTHORITY_OPTIONS = [
  'I can approve an implementation project',
  'I influence the decision',
  'I am exploring on behalf of a stakeholder',
  'I do not have influence yet',
] as const

export type CompanySize = (typeof COMPANY_SIZE_OPTIONS)[number]
export type Authority = (typeof AUTHORITY_OPTIONS)[number]

export interface StrategyApplyPayload {
  name: string
  email: string
  role: string
  company: string
  website: string
  companySize: CompanySize
  workflow: string
  teams: string
  bottleneck: string
  outcome: string
  whyNow: string
  authority: Authority
  campaign?: Record<string, string>
}

export type StrategyApplyField = Exclude<keyof StrategyApplyPayload, 'campaign'>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_LONG = 12
const MAX_SHORT = 200
const MAX_LONG = 2000

function asString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

function isCompanySize(value: string): value is CompanySize {
  return (COMPANY_SIZE_OPTIONS as readonly string[]).includes(value)
}

function isAuthority(value: string): value is Authority {
  return (AUTHORITY_OPTIONS as readonly string[]).includes(value)
}

export function validateStrategyApply(
  input: Partial<Record<StrategyApplyField, string>>
): Record<string, string> {
  const errors: Record<string, string> = {}

  const name = asString(input.name)
  if (!name) errors.name = 'Add your name so we know who to reply to.'
  else if (name.length > MAX_SHORT) errors.name = 'Keep the name under 200 characters.'

  const email = asString(input.email)
  if (!email) errors.email = 'Add a work email so we can send the next step.'
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'Use a valid email address.'

  const role = asString(input.role)
  if (!role) errors.role = 'Add your role.'
  else if (role.length > MAX_SHORT) errors.role = 'Keep the role under 200 characters.'

  const company = asString(input.company)
  if (!company) errors.company = 'Add the company name.'
  else if (company.length > MAX_SHORT) errors.company = 'Keep the company name under 200 characters.'

  const website = asString(input.website)
  if (!website) errors.website = 'Add a company website or LinkedIn URL.'
  else if (website.length > MAX_SHORT) errors.website = 'Keep the website under 200 characters.'

  const companySize = asString(input.companySize)
  if (!companySize) errors.companySize = 'Select a company size.'
  else if (!isCompanySize(companySize)) errors.companySize = 'Select one of the listed company sizes.'

  const workflow = asString(input.workflow)
  if (!workflow) errors.workflow = 'Describe the workflow or process you want to improve.'
  else if (workflow.length < MIN_LONG)
    errors.workflow = 'Add a little more context so we can assess fit.'
  else if (workflow.length > MAX_LONG) errors.workflow = 'Keep this under 2,000 characters.'

  const teams = asString(input.teams)
  if (!teams) errors.teams = 'Name the teams involved in the workflow.'
  else if (teams.length > MAX_LONG) errors.teams = 'Keep this under 2,000 characters.'

  const bottleneck = asString(input.bottleneck)
  if (!bottleneck) errors.bottleneck = 'Describe the primary bottleneck.'
  else if (bottleneck.length < MIN_LONG)
    errors.bottleneck = 'Add a little more context so we can assess fit.'
  else if (bottleneck.length > MAX_LONG) errors.bottleneck = 'Keep this under 2,000 characters.'

  const outcome = asString(input.outcome)
  if (!outcome) errors.outcome = 'Describe the business outcome you want.'
  else if (outcome.length < MIN_LONG)
    errors.outcome = 'Add a little more context so we can assess fit.'
  else if (outcome.length > MAX_LONG) errors.outcome = 'Keep this under 2,000 characters.'

  const whyNow = asString(input.whyNow)
  if (!whyNow) errors.whyNow = 'Tell us why this is a priority now.'
  else if (whyNow.length > MAX_LONG) errors.whyNow = 'Keep this under 2,000 characters.'

  const authority = asString(input.authority)
  if (!authority) errors.authority = 'Select how you relate to an implementation decision.'
  else if (!isAuthority(authority)) errors.authority = 'Select one of the listed options.'

  return errors
}

const CAMPAIGN_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'utm_id',
  'gclid',
  'fbclid',
] as const

export function parseStrategyApply(body: unknown):
  | { ok: true; data: StrategyApplyPayload }
  | { ok: false; errors: Record<string, string> } {
  if (!body || typeof body !== 'object') {
    return { ok: false, errors: { form: 'Submit the application as a JSON object.' } }
  }

  const raw = body as Record<string, unknown>
  const fields: Partial<Record<StrategyApplyField, string>> = {
    name: asString(raw.name),
    email: asString(raw.email),
    role: asString(raw.role),
    company: asString(raw.company),
    website: asString(raw.website),
    companySize: asString(raw.companySize),
    workflow: asString(raw.workflow),
    teams: asString(raw.teams),
    bottleneck: asString(raw.bottleneck),
    outcome: asString(raw.outcome),
    whyNow: asString(raw.whyNow),
    authority: asString(raw.authority),
  }

  const errors = validateStrategyApply(fields)
  if (Object.keys(errors).length > 0) {
    return { ok: false, errors }
  }

  const campaign: Record<string, string> = {}
  const campaignSource =
    raw.campaign && typeof raw.campaign === 'object' && !Array.isArray(raw.campaign)
      ? (raw.campaign as Record<string, unknown>)
      : raw

  for (const key of CAMPAIGN_KEYS) {
    const value = asString(campaignSource[key])
    if (value) campaign[key] = value.slice(0, 200)
  }

  return {
    ok: true,
    data: {
      name: fields.name!,
      email: fields.email!,
      role: fields.role!,
      company: fields.company!,
      website: fields.website!,
      companySize: fields.companySize as CompanySize,
      workflow: fields.workflow!,
      teams: fields.teams!,
      bottleneck: fields.bottleneck!,
      outcome: fields.outcome!,
      whyNow: fields.whyNow!,
      authority: fields.authority as Authority,
      campaign: Object.keys(campaign).length > 0 ? campaign : undefined,
    },
  }
}

export function captureCampaignParams(search?: string): Record<string, string> {
  const params = new URLSearchParams(
    search?.startsWith('?') ? search.slice(1) : search ?? ''
  )
  const campaign: Record<string, string> = {}
  for (const key of CAMPAIGN_KEYS) {
    const value = params.get(key)?.trim()
    if (value) campaign[key] = value.slice(0, 200)
  }
  return campaign
}
