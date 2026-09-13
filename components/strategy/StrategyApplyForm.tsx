'use client'

import { useRouter } from 'next/navigation'
import { useCallback, useMemo, useState, type FormEvent } from 'react'
import {
  AUTHORITY_OPTIONS,
  COMPANY_SIZE_OPTIONS,
  captureCampaignParams,
  validateStrategyApply,
  type StrategyApplyField,
} from '@/lib/strategy-apply'
import { STRATEGY_APPLIED_PATH } from '@/lib/site'
import { cn } from '@/lib/utils'

type FieldValue = Record<StrategyApplyField, string>

const INITIAL: FieldValue = {
  name: '',
  email: '',
  role: '',
  company: '',
  website: '',
  companySize: '',
  workflow: '',
  teams: '',
  bottleneck: '',
  outcome: '',
  whyNow: '',
  authority: '',
}

type Status = 'idle' | 'submitting' | 'error' | 'success'

function FieldMessage({
  id,
  error,
  hint,
}: {
  id: string
  error?: string
  hint?: string
}) {
  return (
    <p id={id} className="field-message">
      {error ? <span className="text-[var(--color-error)]">{error}</span> : hint ?? '\u00a0'}
    </p>
  )
}

export function StrategyApplyForm() {
  const router = useRouter()
  const [values, setValues] = useState<FieldValue>(INITIAL)
  const [touched, setTouched] = useState<Partial<Record<StrategyApplyField, boolean>>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [formError, setFormError] = useState<string | null>(null)
  const [honeypot, setHoneypot] = useState('')

  const errors = useMemo(() => validateStrategyApply(values), [values])

  const showError = useCallback(
    (field: StrategyApplyField) => (touched[field] ? errors[field] : undefined),
    [errors, touched]
  )

  const setField = useCallback((field: StrategyApplyField, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
  }, [])

  const onBlur = useCallback((field: StrategyApplyField) => {
    setTouched((current) => ({ ...current, [field]: true }))
  }, [])

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setTouched(
      Object.fromEntries(Object.keys(INITIAL).map((key) => [key, true])) as Record<
        StrategyApplyField,
        boolean
      >
    )

    if (Object.keys(errors).length > 0) {
      setStatus('error')
      setFormError('Review the highlighted fields, then submit again.')
      return
    }

    setStatus('submitting')
    setFormError(null)

    try {
      const campaign = captureCampaignParams(
        typeof window !== 'undefined' ? window.location.search : ''
      )
      const response = await fetch('/api/strategy-apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          companyFax: honeypot,
          campaign,
        }),
      })
      const payload = (await response.json()) as {
        ok?: boolean
        errors?: Record<string, string>
      }

      if (!response.ok || !payload.ok) {
        setStatus('error')
        setFormError(payload.errors?.form ?? 'We could not send the application. Try again.')
        return
      }

      setStatus('success')
      router.push(STRATEGY_APPLIED_PATH)
    } catch {
      setStatus('error')
      setFormError('We could not send the application. Check your connection and try again.')
    }
  }

  const submitting = status === 'submitting'

  return (
    <form className="mx-auto max-w-2xl text-left" onSubmit={onSubmit} noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="apply-name" className="field-label">
            Name
          </label>
          <input
            id="apply-name"
            name="name"
            autoComplete="name"
            className="field-control"
            value={values.name}
            aria-required="true"
            aria-invalid={showError('name') ? true : undefined}
            aria-describedby="apply-name-msg"
            onBlur={() => onBlur('name')}
            onChange={(event) => setField('name', event.target.value)}
          />
          <FieldMessage id="apply-name-msg" error={showError('name')} />
        </div>
        <div>
          <label htmlFor="apply-email" className="field-label">
            Work email
          </label>
          <input
            id="apply-email"
            name="email"
            type="email"
            autoComplete="email"
            className="field-control"
            value={values.email}
            aria-required="true"
            aria-invalid={showError('email') ? true : undefined}
            aria-describedby="apply-email-msg"
            onBlur={() => onBlur('email')}
            onChange={(event) => setField('email', event.target.value)}
          />
          <FieldMessage id="apply-email-msg" error={showError('email')} />
        </div>
        <div>
          <label htmlFor="apply-role" className="field-label">
            Role
          </label>
          <input
            id="apply-role"
            name="role"
            autoComplete="organization-title"
            className="field-control"
            value={values.role}
            aria-required="true"
            aria-invalid={showError('role') ? true : undefined}
            aria-describedby="apply-role-msg"
            onBlur={() => onBlur('role')}
            onChange={(event) => setField('role', event.target.value)}
          />
          <FieldMessage id="apply-role-msg" error={showError('role')} />
        </div>
        <div>
          <label htmlFor="apply-company" className="field-label">
            Company
          </label>
          <input
            id="apply-company"
            name="company"
            autoComplete="organization"
            className="field-control"
            value={values.company}
            aria-required="true"
            aria-invalid={showError('company') ? true : undefined}
            aria-describedby="apply-company-msg"
            onBlur={() => onBlur('company')}
            onChange={(event) => setField('company', event.target.value)}
          />
          <FieldMessage id="apply-company-msg" error={showError('company')} />
        </div>
        <div>
          <label htmlFor="apply-website" className="field-label">
            Website
          </label>
          <input
            id="apply-website"
            name="website"
            type="text"
            inputMode="url"
            autoComplete="url"
            placeholder="https://"
            className="field-control"
            value={values.website}
            aria-required="true"
            aria-invalid={showError('website') ? true : undefined}
            aria-describedby="apply-website-msg"
            onBlur={() => onBlur('website')}
            onChange={(event) => setField('website', event.target.value)}
          />
          <FieldMessage id="apply-website-msg" error={showError('website')} />
        </div>
        <div>
          <label htmlFor="apply-size" className="field-label">
            Company size
          </label>
          <select
            id="apply-size"
            name="companySize"
            className="field-control"
            value={values.companySize}
            aria-required="true"
            aria-invalid={showError('companySize') ? true : undefined}
            aria-describedby="apply-size-msg"
            onBlur={() => onBlur('companySize')}
            onChange={(event) => setField('companySize', event.target.value)}
          >
            <option value="">Select a range</option>
            {COMPANY_SIZE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldMessage id="apply-size-msg" error={showError('companySize')} />
        </div>
      </div>

      <div className="mt-1">
        <label htmlFor="apply-workflow" className="field-label">
          Workflow or process to improve
        </label>
        <textarea
          id="apply-workflow"
          name="workflow"
          className="field-control field-control--area"
          value={values.workflow}
          aria-required="true"
          aria-invalid={showError('workflow') ? true : undefined}
          aria-describedby="apply-workflow-msg"
          onBlur={() => onBlur('workflow')}
          onChange={(event) => setField('workflow', event.target.value)}
        />
        <FieldMessage
          id="apply-workflow-msg"
          error={showError('workflow')}
          hint="One operational workflow — not a full company assessment."
        />
      </div>

      <div>
        <label htmlFor="apply-teams" className="field-label">
          Teams involved
        </label>
        <textarea
          id="apply-teams"
          name="teams"
          className="field-control field-control--area"
          value={values.teams}
          aria-required="true"
          aria-invalid={showError('teams') ? true : undefined}
          aria-describedby="apply-teams-msg"
          onBlur={() => onBlur('teams')}
          onChange={(event) => setField('teams', event.target.value)}
        />
        <FieldMessage id="apply-teams-msg" error={showError('teams')} />
      </div>

      <div>
        <label htmlFor="apply-bottleneck" className="field-label">
          Primary bottleneck
        </label>
        <textarea
          id="apply-bottleneck"
          name="bottleneck"
          className="field-control field-control--area"
          value={values.bottleneck}
          aria-required="true"
          aria-invalid={showError('bottleneck') ? true : undefined}
          aria-describedby="apply-bottleneck-msg"
          onBlur={() => onBlur('bottleneck')}
          onChange={(event) => setField('bottleneck', event.target.value)}
        />
        <FieldMessage id="apply-bottleneck-msg" error={showError('bottleneck')} />
      </div>

      <div>
        <label htmlFor="apply-outcome" className="field-label">
          Desired business outcome
        </label>
        <textarea
          id="apply-outcome"
          name="outcome"
          className="field-control field-control--area"
          value={values.outcome}
          aria-required="true"
          aria-invalid={showError('outcome') ? true : undefined}
          aria-describedby="apply-outcome-msg"
          onBlur={() => onBlur('outcome')}
          onChange={(event) => setField('outcome', event.target.value)}
        />
        <FieldMessage id="apply-outcome-msg" error={showError('outcome')} />
      </div>

      <div>
        <label htmlFor="apply-why" className="field-label">
          Why address it now
        </label>
        <textarea
          id="apply-why"
          name="whyNow"
          className="field-control field-control--area"
          value={values.whyNow}
          aria-required="true"
          aria-invalid={showError('whyNow') ? true : undefined}
          aria-describedby="apply-why-msg"
          onBlur={() => onBlur('whyNow')}
          onChange={(event) => setField('whyNow', event.target.value)}
        />
        <FieldMessage id="apply-why-msg" error={showError('whyNow')} />
      </div>

      <div>
        <label htmlFor="apply-authority" className="field-label">
          Implementation authority
        </label>
        <select
          id="apply-authority"
          name="authority"
          className="field-control"
          value={values.authority}
          aria-required="true"
          aria-invalid={showError('authority') ? true : undefined}
          aria-describedby="apply-authority-msg"
          onBlur={() => onBlur('authority')}
          onChange={(event) => setField('authority', event.target.value)}
        >
          <option value="">Select one</option>
          {AUTHORITY_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <FieldMessage
          id="apply-authority-msg"
          error={showError('authority')}
          hint="Can you approve or influence a follow-on implementation project?"
        />
      </div>

      <div className="hp-field" aria-hidden="true">
        <label htmlFor="apply-fax">Company fax</label>
        <input
          id="apply-fax"
          name="companyFax"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      {formError ? (
        <p className="mb-4 font-body text-sm text-[var(--color-error)]" role="alert">
          {formError}
        </p>
      ) : null}

      <button
        type="submit"
        className={cn('btn-primary w-full sm:w-auto')}
        disabled={submitting}
        data-state={status === 'submitting' ? 'loading' : status === 'error' ? 'error' : status === 'success' ? 'success' : undefined}
      >
        {submitting ? 'Sending…' : status === 'success' ? 'Sent' : 'Submit application'}
      </button>
    </form>
  )
}
