'use client'

import { FormEvent, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { APPLY } from '@/lib/landing'
import { APPLY_CTA_LABEL, PAY_BOOK_URL } from '@/lib/site'

type ApplyFormProps = {
  /** Accepted-path pay+book URL. Never used as the cold-traffic primary CTA. */
  payBookUrl?: string
}

const inputClass =
  'w-full border-b border-white/15 bg-transparent px-0 py-3 text-[15px] text-white outline-none placeholder:text-white/30 focus:border-white'
const labelClass = 'text-[11px] font-medium uppercase tracking-[0.16em] text-white/40'

export function ApplyForm({ payBookUrl = PAY_BOOK_URL }: ApplyFormProps) {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)
  const appliedFromRedirect = searchParams.get('applied') === '1'
  const acceptedPreview = searchParams.get('accepted') === '1'
  const isSuccess = status === 'success' || appliedFromRedirect

  const fallbackAction = useMemo(() => {
    if (typeof window === 'undefined') return '/api/apply'
    return `${window.location.origin}/api/apply`
  }, [])

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('submitting')
    setError(null)

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      })
      const data = (await res.json()) as { ok?: boolean; error?: string }
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Could not send application.')
      }
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Could not send application.')
    }
  }

  if (acceptedPreview) {
    return (
      <div className="border border-white/15 bg-white/[0.03] p-6 sm:p-8">
        <p className={labelClass}>Accepted path — preview</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
          Pay $2,000 and book in one step
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/60">
          This screen is for accepted applicants only. Cold traffic applies first — this is not
          the homepage CTA.
        </p>
        <a
          href={payBookUrl}
          className="mt-6 inline-flex min-h-12 items-center justify-center bg-white px-5 text-sm font-semibold text-black"
        >
          Pay $2,000 and book
        </a>
      </div>
    )
  }

  if (isSuccess) {
    return (
      <div className="border border-white/15 bg-white/[0.03] p-6 sm:p-8">
        <p className={labelClass}>{APPLY.successTitle}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">We’ll review fit.</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/60">{APPLY.successBody}</p>
      </div>
    )
  }

  return (
    <form action={fallbackAction} method="post" onSubmit={onSubmit} className="space-y-8">
      <input type="hidden" name="source" value="strategy-session-lp" />

      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className={labelClass}>Name</span>
          <input required name="name" autoComplete="name" className={inputClass} placeholder="Name" />
        </label>
        <label className="block space-y-2">
          <span className={labelClass}>Role</span>
          <select required name="role" defaultValue="" className={inputClass}>
            <option value="" disabled>
              CEO / COO / other
            </option>
            {APPLY.roles.map((role) => (
              <option key={role} value={role} className="bg-black text-white">
                {role}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block space-y-2">
        <span className={labelClass}>Work email</span>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          className={inputClass}
          placeholder="karen.d@example.net"
        />
      </label>

      <label className="block space-y-2">
        <span className={labelClass}>Company + roughly headcount / revenue band</span>
        <input
          required
          name="companyScale"
          className={inputClass}
          placeholder="Company · ~40 people · ~$8M"
        />
      </label>

      <label className="block space-y-2">
        <span className={labelClass}>What kind of service business (one line)</span>
        <input
          required
          name="serviceType"
          className={inputClass}
          placeholder="Staffing, recruiting, BPO, professional services…"
        />
      </label>

      <div className="space-y-4">
        <label className="block space-y-2">
          <span className={labelClass}>Workflow that hurts most</span>
          <select required name="workflow" defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select workflow
            </option>
            {APPLY.workflows.map((item) => (
              <option key={item} value={item} className="bg-black text-white">
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="block space-y-2">
          <span className={labelClass}>Short describe</span>
          <textarea
            required
            name="workflowNote"
            rows={3}
            className={`${inputClass} resize-none`}
            placeholder="What is breaking, and what have you already tried?"
          />
        </label>
      </div>

      <fieldset className="space-y-3">
        <legend className={labelClass}>Timeline</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {APPLY.timelines.map((option) => (
            <label
              key={option}
              className="flex min-h-12 cursor-pointer items-center gap-3 border border-white/10 px-3 text-sm text-white/80 has-[:checked]:border-white has-[:checked]:text-white"
            >
              <input required type="radio" name="timeline" value={option} className="accent-white" />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      {status === 'error' ? <p className="text-sm text-red-400">{error}</p> : null}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex min-h-12 w-full items-center justify-center bg-white px-5 text-sm font-semibold text-black disabled:opacity-60 sm:w-auto"
      >
        {status === 'submitting' ? 'Sending…' : APPLY_CTA_LABEL}
      </button>
    </form>
  )
}
