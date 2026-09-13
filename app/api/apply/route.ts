import { NextResponse } from 'next/server'

const MAX_COMPANY = 200
const MAX_ROLE = 200
const MAX_EMAIL = 254
const MAX_WORKFLOWS = 4000

export type ApplyPayload = {
  company: string
  role: string
  email: string
  workflows: string
}

function asTrimmedString(value: unknown, max: number) {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, max)
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validate(body: ApplyPayload) {
  const errors: Partial<Record<keyof ApplyPayload, string>> = {}

  if (body.company.length < 2) errors.company = 'Enter your company name.'
  if (body.role.length < 2) errors.role = 'Enter your role.'
  if (!isValidEmail(body.email)) errors.email = 'Enter a valid work email.'
  if (body.workflows.length < 12) {
    errors.workflows = 'Describe 1–2 workflows that hurt.'
  }

  return errors
}

async function forwardApplication(payload: ApplyPayload) {
  const formspreeId = process.env.FORMSPREE_FORM_ID
  const webhookUrl = process.env.APPLY_WEBHOOK_URL

  if (formspreeId) {
    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        company: payload.company,
        role: payload.role,
        email: payload.email,
        workflows: payload.workflows,
        _subject: `AI Strategy Session application — ${payload.company}`,
      }),
    })

    if (!response.ok) {
      throw new Error(`Formspree responded ${response.status}`)
    }
    return 'formspree'
  }

  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...payload,
        source: 'bitblabs-apply',
        submittedAt: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      throw new Error(`Apply webhook responded ${response.status}`)
    }
    return 'webhook'
  }

  console.info('[apply] Strategy session application', {
    company: payload.company,
    role: payload.role,
    email: payload.email,
    workflows: payload.workflows,
    submittedAt: new Date().toISOString(),
  })
  return 'log'
}

export async function POST(request: Request) {
  let json: Record<string, unknown>

  try {
    json = (await request.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid request.' }, { status: 400 })
  }

  if (typeof json.website === 'string' && json.website.length > 0) {
    return NextResponse.json({ ok: true })
  }

  const payload: ApplyPayload = {
    company: asTrimmedString(json.company, MAX_COMPANY),
    role: asTrimmedString(json.role, MAX_ROLE),
    email: asTrimmedString(json.email, MAX_EMAIL),
    workflows: asTrimmedString(json.workflows, MAX_WORKFLOWS),
  }

  const errors = validate(payload)
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 })
  }

  try {
    const destination = await forwardApplication(payload)
    return NextResponse.json({ ok: true, destination })
  } catch (error) {
    console.error('[apply] Failed to forward application', error)
    return NextResponse.json(
      { ok: false, message: 'Could not submit right now. Please try again.' },
      { status: 502 }
    )
  }
}
