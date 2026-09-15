import { WorkflowDiagram } from '@/components/home/visuals/WorkflowDiagram'
import { ABOUT } from '@/lib/landing'
import { founders } from '@/lib/founders'
import { LEGAL_NAME } from '@/lib/site'

export function AboutSection() {
  return (
    <section id="about" className="bb-home-section">
      <div className="bb-home-container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="bb-panel overflow-hidden bg-gradient-to-br from-[var(--bb-surface-soft)] to-white p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--bb-ink-muted)]">
              Project wall
            </p>
            <div className="mt-4 space-y-3">
              <WorkflowDiagram
                compact
                variant="connected"
                nodes={[
                  { label: 'Workflow map', tone: 'brand' },
                  { label: 'Human checkpoint', tone: 'brand' },
                  { label: 'Deployed', tone: 'mint' },
                ]}
              />
              <WorkflowDiagram
                compact
                variant="fragmented"
                nodes={[
                  { label: 'Recruitment', tone: 'amber' },
                  { label: 'Coordination', tone: 'amber' },
                  { label: 'Connected', tone: 'mint' },
                ]}
              />
            </div>
          </div>

          <div>
            <h2 className="text-[clamp(2rem,3.8vw,3.25rem)] font-semibold leading-[1.08] tracking-tight">
              {ABOUT.headline}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--bb-ink-muted)]">
              {ABOUT.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {founders.map((founder) => (
                <li key={founder.id} className="bb-card p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[var(--bb-brand-soft)] text-sm font-bold text-[var(--bb-brand-dark)]">
                    {founder.initials}
                  </div>
                  <p className="mt-3 font-semibold text-[var(--bb-ink)]">{founder.name}</p>
                  <p className="mt-1 text-sm text-[var(--bb-ink-muted)]">{founder.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--bb-ink-muted)]">
                    {founder.bio}
                  </p>
                  <a
                    href={founder.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-semibold text-[var(--bb-brand-dark)] hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-[var(--bb-ink-muted)]">
              Operated by {LEGAL_NAME}. Based in Pune, India. Working with service businesses
              internationally.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
