'use client'

import { useId, useState, type FormEvent } from 'react'
import { trackEvent } from '@/lib/analytics'
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF } from '@/lib/site'

type State = 'idle' | 'loading' | 'subscribed' | 'invalid' | 'unavailable' | 'error' | 'rate_limited'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function NewsletterForm() {
  const [state, setState] = useState<State>('idle')
  const uid = useId()
  const inputId = `${uid}-email`
  const statusId = `${uid}-status`

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const email = String(data.get('email') ?? '').trim()
    if (!EMAIL_RE.test(email)) {
      setState('invalid')
      return
    }
    setState('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          company: data.get('company') ?? '',
          referrer: window.location.href,
        }),
      })
      const json = (await res.json().catch(() => ({}))) as { status?: State }
      const next = json.status ?? 'error'
      setState(next)
      if (next === 'subscribed') {
        trackEvent('newsletter_subscribe', { page: window.location.pathname || '/' })
        form.reset()
      }
    } catch {
      setState('error')
    }
  }

  const message: Partial<Record<State, React.ReactNode>> = {
    subscribed: 'Check your inbox to confirm your subscription.',
    invalid: 'That email doesn’t look right. Try again?',
    unavailable: 'Newsletter opens soon. Thanks for your patience.',
    rate_limited: 'Too many attempts. Give it a few minutes.',
    error: (
      <>
        Something went wrong on our side. Email{' '}
        <a href={CONTACT_EMAIL_HREF} className="font-medium text-zinc-900 underline underline-offset-4">
          {CONTACT_EMAIL}
        </a>{' '}
        and we’ll add you.
      </>
    ),
  }

  const tone = state === 'subscribed' ? 'text-hl-green' : state === 'unavailable' ? 'text-zinc-600' : 'text-hl-red'

  return (
    <div>
      <form
        onSubmit={onSubmit}
        noValidate
        className="flex flex-col items-start gap-4 lg:flex-row lg:items-center"
      >
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Enter your email"
          required
          aria-invalid={state === 'invalid'}
          aria-describedby={statusId}
          className="w-full rounded-full border border-zinc-200 bg-zinc-200 px-5 py-3 text-base text-zinc-900 transition-all placeholder:text-zinc-400 focus:border-zinc-300 focus:outline-none lg:w-auto lg:flex-1"
        />
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="absolute -left-[9999px] h-0 w-0 opacity-0"
        />
        <button
          type="submit"
          disabled={state === 'loading'}
          className="w-full whitespace-nowrap rounded-full bg-zinc-900 px-8 py-3.5 font-medium text-white transition-all hover:scale-95 disabled:opacity-60 md:w-auto"
        >
          {state === 'loading' ? 'Subscribing…' : 'Subscribe'}
        </button>
      </form>
      <p id={statusId} role="status" aria-live="polite" className={`mt-3 min-h-6 text-base ${tone}`}>
        {message[state] ?? null}
      </p>
    </div>
  )
}
