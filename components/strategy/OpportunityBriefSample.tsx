import { OPPORTUNITY_BRIEF_SAMPLE } from '@/lib/strategy'

export function OpportunityBriefSample() {
  const sample = OPPORTUNITY_BRIEF_SAMPLE

  return (
    <div className="rounded-[var(--radius-story-card)] border border-rule bg-paper p-6 shadow-[var(--shadow-story-float)] md:p-8">
      <p className="font-body text-xs font-medium uppercase tracking-[0.12em] text-muted">
        {sample.label}
      </p>
      <h3 className="mt-3 font-[family-name:var(--font-story-serif)] text-xl font-normal text-ink md:text-2xl">
        {sample.title}
      </h3>
      <dl className="mt-6 grid gap-3 border-b border-rule pb-6 font-body text-sm text-ink-2">
        <div className="grid gap-1 sm:grid-cols-[8rem_1fr]">
          <dt className="text-muted">Prepared for</dt>
          <dd>{sample.client}</dd>
        </div>
        <div className="grid gap-1 sm:grid-cols-[8rem_1fr]">
          <dt className="text-muted">Date</dt>
          <dd>{sample.date}</dd>
        </div>
        <div className="grid gap-1 sm:grid-cols-[8rem_1fr]">
          <dt className="text-muted">Workflow</dt>
          <dd>{sample.workflow}</dd>
        </div>
      </dl>

      <div className="mt-6 space-y-8">
        {sample.sections.map((section) => (
          <div key={section.heading}>
            <h4 className="font-display text-sm font-bold text-ink md:text-base">{section.heading}</h4>
            {'body' in section && section.body ? (
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-2">{section.body}</p>
            ) : null}
            {'items' in section && section.items ? (
              <ul className="mt-4 space-y-3">
                {section.items.map((item) => (
                  <li
                    key={item.rank}
                    className="rounded-card border border-rule bg-paper-2 p-4"
                  >
                    <p className="font-display text-sm font-bold text-ink">
                      {item.rank}. {item.name}
                    </p>
                    <p className="mt-2 font-body text-xs text-ink-2">
                      Impact: {item.impact} · Feasibility: {item.feasibility} · Effort:{' '}
                      {item.effort}
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}
