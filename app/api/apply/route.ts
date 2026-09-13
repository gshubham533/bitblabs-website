import { NextResponse } from 'next/server'
import { APPLY_WEBHOOK_URL } from '@/lib/site'

export const runtime = 'nodejs'

const REQUIRED = [
  'name',
  'role',
  'email',
  'companyScale',
  'serviceType',
  'workflow',
  'workflowNote',
  'timeline',
] as const

function readField(form: FormData | Record<string, unknown>, key: string) {
  const value = form instanceof FormData ? form.get(key) : form[key]
  return typeof value === 'string' ? value.trim() : ''
}

function wantsHtml(request: Request) {
  const accept = request.headers.get('accept') || ''
  const contentType = request.headers.get('content-type') || ''
  return !accept.includes('application/json') && contentType.includes('application/x-www-form-urlencoded')
}

function originFrom(request: Request) {
  try {
    return new URL(request.url).origin
  } catch {
    return ''
  }
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || ''
    const body: FormData | Record<string, unknown> = contentType.includes('application/json')
      ? ((await request.json()) as Record<string, unknown>)
      : await request.formData()

    const payload = Object.fromEntries(REQUIRED.map((key) => [key, readField(body, key)]))
    const missing = REQUIRED.filter((key) => !payload[key])
    if (missing.length) {
      if (wantsHtml(request)) {
        return NextResponse.redirect(new URL('/#apply', request.url), 303)
      }
      return NextResponse.json({ ok: false, error: `Missing: ${missing.join(', ')}` }, { status: 400 })
    }

    if (APPLY_WEBHOOK_URL) {
      const webhookRes = await fetch(APPLY_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...payload,
          source: readField(body, 'source') || 'strategy-session-lp',
          submittedAt: new Date().toISOString(),
        }),
      })
      if (!webhookRes.ok) {
        throw new Error(`Webhook failed (${webhookRes.status})`)
      }
    } else {
      console.info('[strategy-session-apply]', payload)
    }

    if (wantsHtml(request)) {
      return NextResponse.redirect(new URL('/?applied=1#apply', originFrom(request) || request.url), 303)
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[strategy-session-apply]', error)
    if (wantsHtml(request)) {
      return NextResponse.redirect(new URL('/#apply', request.url), 303)
    }
    return NextResponse.json({ ok: false, error: 'Could not send application.' }, { status: 500 })
  }
}
