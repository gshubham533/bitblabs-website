'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense, useState } from 'react'
import { APPLY_FORM } from '@/lib/landing'
import { cn } from '@/lib/utils'

type FieldKey = 'company' | 'role' | 'email' | 'workflows'

const EMPTY: Record<FieldKey, string> = {
  company: '',
  role: '',
  email: '',
  workflows: '',
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validate(values: Record<FieldKey, string>) {
  const errors: Partial<Record<FieldKey, string>> = {}
  if (values.company.trim().length < 2) errors.company = 'Enter your company name.'
  if (values.role.trim().length < 2) errors.role = 'Enter your role.'
  if (!isValidEmail(values.email.trim())) errors.email = 'Enter a valid work email.'
  if (values.workflows.trim().length < 12) {
    errors.workflows = 'Describe 1–2 workflows that hurt.'
  }
  return errors
}

const fieldClass =
  'mt-2 w-full rounded-2xl border bg-zinc-50 px-4 py-3.5 font-body text-base text-zinc-950 outline-none transition-colors placeholder:text-zinc-400 focus:border-brand focus:bg-white'

export function ApplyForm({ className }: { className?: string }) {
  return (
    <Suspense fallback={null}>
      <ApplyFormFields className={className} />
    </Suspense>
  )
}

function ApplyFormFields({ className }: { className?: string }) {
  const searchParams = useSearchParams()
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({})
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    searchParams.get('applied') === '1' ? 'success' : 'idle'
  )
  const [serverMessage, setServerMessage] = useState('')

  function update(field: FieldKey, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current }
        delete next[field]
        return next
      })
    }
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    setServerMessage('')

    if (Object.keys(nextErrors).length > 0) {
      const first = Object.keys(nextErrors)[0]
      document.getElementById(`apply-${first}`)?.focus()
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          company: values.company.trim(),
          role: values.role.trim(),
          email: values.email.trim(),
          workflows: values.workflows.trim(),
          website: honeypot,
        }),
      })

      const data = (await response.json()) as {
        ok?: boolean
        errors?: Partial<Record<FieldKey, string>>
        message?: string
      }

      if (!response.ok || !data.ok) {
        if (data.errors) setErrors(data.errors)
        setServerMessage(data.message ?? 'Could not submit right now. Please try again.')
        setStatus('error')
        return
      }

      setStatus('success')
    } catch {
      setServerMessage('Could not submit right now. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        className={cn('rounded-4xl bg-zinc-50 px-6 py-8 md:px-8', className)}
        role="status"
        aria-live="polite"
      >
        <p className="font-display text-2xl font-semibold tracking-tight text-zinc-950">
          {APPLY_FORM.successTitle}
        </p>
        <p className="mt-3 font-body text-base leading-relaxed text-zinc-600">
          {APPLY_FORM.successBody}
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      action="/api/apply"
      method="post"
      className={cn('space-y-5', className)}
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="apply-company"
          label={APPLY_FORM.companyLabel}
          value={values.company}
          error={errors.company}
          autoComplete="organization"
          onChange={(value) => update('company', value)}
        />
        <Field
          id="apply-role"
          label={APPLY_FORM.roleLabel}
          value={values.role}
          error={errors.role}
          autoComplete="organization-title"
          onChange={(value) => update('role', value)}
        />
      </div>

      <Field
        id="apply-email"
        label={APPLY_FORM.emailLabel}
        type="email"
        value={values.email}
        error={errors.email}
        autoComplete="email"
        onChange={(value) => update('email', value)}
      />

      <div>
        <label htmlFor="apply-workflows" className="font-heading text-sm font-medium text-zinc-900">
          {APPLY_FORM.workflowsLabel}
        </label>
        <textarea
          id="apply-workflows"
          name="workflows"
          rows={5}
          value={values.workflows}
          onChange={(event) => update('workflows', event.target.value)}
          aria-invalid={Boolean(errors.workflows)}
          aria-describedby={errors.workflows ? 'apply-workflows-error' : undefined}
          className={cn(fieldClass, 'min-h-[8rem] resize-y', errors.workflows ? 'border-red-500' : 'border-zinc-300')}
        />
        {errors.workflows ? (
          <p id="apply-workflows-error" className="mt-2 font-body text-sm text-red-600" role="alert">
            {errors.workflows}
          </p>
        ) : null}
      </div>

      <div className="hidden" aria-hidden>
        <label htmlFor="apply-website">Website</label>
        <input
          id="apply-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      {status === 'error' && serverMessage ? (
        <p className="font-body text-sm text-red-600" role="alert">
          {serverMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brand px-8 py-3 font-heading text-sm font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,0.22)] transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === 'submitting' ? 'Submitting…' : APPLY_FORM.submitLabel}
      </button>
    </form>
  )
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = 'text',
  autoComplete,
}: {
  id: string
  label: string
  value: string
  error?: string
  onChange: (value: string) => void
  type?: string
  autoComplete?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="font-heading text-sm font-medium text-zinc-900">
        {label}
      </label>
      <input
        id={id}
        name={id.replace('apply-', '')}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldClass, error ? 'border-red-500' : 'border-zinc-300')}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 font-body text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
