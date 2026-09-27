import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const KIT_API = 'https://api.kit.com/v4'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()

function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) hits.clear()
  return recent.length > MAX_PER_WINDOW
}

type Status = 'subscribed' | 'invalid' | 'unavailable' | 'error' | 'rate_limited'

const reply = (status: Status, code = 200) => NextResponse.json({ status }, { status: code })

export async function POST(request: Request) {
  let body: { email?: unknown; company?: unknown; referrer?: unknown }
  try {
    body = await request.json()
  } catch {
    return reply('invalid', 400)
  }

  // Honeypot: bots fill every field; pretend success so they move on.
  if (typeof body.company === 'string' && body.company.trim() !== '') {
    return reply('subscribed')
  }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
  if (!EMAIL_RE.test(email) || email.length > 254) return reply('invalid', 400)

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (rateLimited(ip)) return reply('rate_limited', 429)

  const apiKey = process.env.KIT_API_KEY
  const formId = process.env.KIT_FORM_ID
  if (!apiKey || !formId) return reply('unavailable', 503)

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-Kit-Api-Key': apiKey,
  }
  const referrer = typeof body.referrer === 'string' ? body.referrer.slice(0, 500) : undefined

  try {
    // Kit only adds existing subscribers to a form, so upsert first. `inactive` keeps
    // double opt-in intact: Kit activates them after they confirm the form's email.
    const upsert = await fetch(`${KIT_API}/subscribers`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ email_address: email, state: 'inactive' }),
      cache: 'no-store',
    })
    if (!upsert.ok) {
      console.error('[subscribe] kit upsert failed', upsert.status)
      return reply('error', 502)
    }

    const add = await fetch(`${KIT_API}/forms/${encodeURIComponent(formId)}/subscribers`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ email_address: email, ...(referrer ? { referrer } : {}) }),
      cache: 'no-store',
    })
    if (!add.ok) {
      console.error('[subscribe] kit form add failed', add.status)
      return reply('error', 502)
    }

    return reply('subscribed')
  } catch (err) {
    console.error('[subscribe] kit request error', err)
    return reply('error', 502)
  }
}
