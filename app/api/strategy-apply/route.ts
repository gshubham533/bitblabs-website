import { NextResponse } from 'next/server'
import { parseStrategyApply, type StrategyApplyPayload } from '@/lib/strategy-apply'

export const runtime = 'nodejs'

const WINDOW_MS = 60 * 60 * 1000
const MAX_PER_WINDOW = 5
const submissions = new Map<string, number[]>()

function clientKey(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0]?.trim() || 'unknown'
  return request.headers.get('x-real-ip') || 'unknown'
}

function isRateLimited(key: string): boolean {
  const now = Date.now()
  const recent = (submissions.get(key) ?? []).filter((time) => now - time < WINDOW_MS)
  if (recent.length >= MAX_PER_WINDOW) {
    submissions.set(key, recent)
    return true
  }
  recent.push(now)
  submissions.set(key, recent)
  return false
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function applicationHtml(data: StrategyApplyPayload): string {
  const rows: Array<[string, string]> = [
    ['Name', data.name],
    ['Email', data.email],
    ['Role', data.role],
    ['Company', data.company],
    ['Website', data.website],
    ['Company size', data.companySize],
    ['Workflow', data.workflow],
    ['Teams involved', data.teams],
    ['Primary bottleneck', data.bottleneck],
    ['Desired outcome', data.outcome],
    ['Why now', data.whyNow],
    ['Implementation authority', data.authority],
  ]

  if (data.campaign) {
    rows.push(['Campaign', JSON.stringify(data.campaign)])
  }

  const body = rows
    .map(
      ([label, value]) =>
        `<p><strong>${escapeHtml(label)}</strong><br>${escapeHtml(value).replaceAll('\n', '<br>')}</p>`
    )
    .join('')

  return `<h1>AI Workflow Strategy Session application</h1>${body}`
}

async function deliverApplication(data: StrategyApplyPayload): Promise<{ delivered: boolean; mode: string }> {
  const webhook = process.env.STRATEGY_APPLY_WEBHOOK_URL
  const resendKey = process.env.RESEND_API_KEY
  const to = process.env.STRATEGY_APPLY_TO
  const from = process.env.STRATEGY_APPLY_FROM ?? 'BitBLabs <beth.t@example.com>'

  if (webhook) {
    const response = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'strategy_apply', data }),
    })
    if (!response.ok) {
      throw new Error(`Webhook responded ${response.status}`)
    }
    return { delivered: true, mode: 'webhook' }
  }

  if (resendKey && to) {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `Strategy Session application — ${data.company}`,
        html: applicationHtml(data),
      }),
    })
    if (!response.ok) {
      const detail = await response.text()
      throw new Error(`Resend responded ${response.status}: ${detail}`)
    }
    return { delivered: true, mode: 'resend' }
  }

  if (process.env.NODE_ENV !== 'production') {
    console.info('[strategy-apply] dry-run application', data)
    return { delivered: true, mode: 'dry-run' }
  }

  return { delivered: false, mode: 'unconfigured' }
}

export async function POST(request: Request) {
  if (isRateLimited(clientKey(request))) {
    return NextResponse.json(
      { ok: false, errors: { form: 'Too many applications from this network. Try again later.' } },
      { status: 429 }
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { ok: false, errors: { form: 'The application could not be read. Refresh and try again.' } },
      { status: 400 }
    )
  }

  if (body && typeof body === 'object' && asHoneyPot(body)) {
    return NextResponse.json({ ok: true })
  }

  const parsed = parseStrategyApply(body)
  if (!parsed.ok) {
    return NextResponse.json({ ok: false, errors: parsed.errors }, { status: 400 })
  }

  try {
    const result = await deliverApplication(parsed.data)
    if (!result.delivered) {
      return NextResponse.json(
        {
          ok: false,
          errors: {
            form: 'Applications are not being delivered yet. Call us and we will take the details directly.',
          },
        },
        { status: 503 }
      )
    }
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[strategy-apply] delivery failed', error)
    return NextResponse.json(
      {
        ok: false,
        errors: {
          form: 'We could not send the application. Wait a moment and try again, or call us.',
        },
      },
      { status: 502 }
    )
  }
}

function asHoneyPot(body: object): boolean {
  const value = (body as { companyFax?: unknown }).companyFax
  return typeof value === 'string' && value.trim().length > 0
}
