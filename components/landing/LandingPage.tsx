import { Suspense } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { ApplyForm } from '@/components/landing/ApplyForm'
import { APPLY, FAQ, FIT, HERO, OFFER, PROCESS, PROOF } from '@/lib/landing'
import { APPLY_CTA_LABEL, APPLY_HREF, PAY_BOOK_URL, PORTFOLIO_SECTION_HREF } from '@/lib/site'

function ApplyLink({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <a
      href={APPLY_HREF}
      className={`inline-flex min-h-12 items-center justify-center bg-white px-5 text-sm font-semibold text-black hover:bg-zinc-200 ${className}`}
    >
      {children}
    </a>
  )
}

function Section({
  id,
  index,
  label,
  children,
}: {
  id: string
  index: string
  label: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[7.5rem_minmax(0,1fr)] lg:gap-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">
          {index}
          <span className="mt-1 block text-white/55">{label}</span>
        </p>
        <div>{children}</div>
      </div>
    </section>
  )
}

export function LandingPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white antialiased">
      <Navbar theme="dark" position="fixed" solid />

      <section className="border-b border-white/10 pt-20 sm:pt-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.7fr)] lg:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
              01 / {HERO.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl text-[clamp(2rem,6vw,4.25rem)] font-semibold leading-[1.02] tracking-tight">
              {HERO.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/65 sm:text-base">
              {HERO.subhead}
            </p>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/50">{HERO.bridge}</p>
            <div className="mt-8">
              <ApplyLink>{HERO.cta}</ApplyLink>
            </div>
          </div>

          <aside className="border border-white/15 bg-white/[0.03] p-5 sm:p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">Session</p>
            <p className="mt-3 text-4xl font-semibold tracking-tight">$2,000</p>
            <dl className="mt-6 space-y-3 text-sm text-white/65">
              <div className="flex justify-between gap-4 border-t border-white/10 pt-3">
                <dt>Length</dt>
                <dd className="text-white">90 min</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-white/10 pt-3">
                <dt>Plan</dt>
                <dd className="text-white">48 hours</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-white/10 pt-3">
                <dt>Next</dt>
                <dd className="text-white">Apply first</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-white/10 pt-3">
                <dt>Lead</dt>
                <dd className="text-right text-white">Shubham Gupta</dd>
              </div>
            </dl>
            <Link
              href={PORTFOLIO_SECTION_HREF}
              className="mt-6 inline-block text-xs text-white/35 underline-offset-4 hover:text-white/70 hover:underline"
            >
              Work archive
            </Link>
          </aside>
        </div>
      </section>

      <Section id="offer" index="02" label="Offer">
        <h2 className="text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold tracking-tight">
          {OFFER.name}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">{OFFER.promise}</p>
        <ul className="mt-8 space-y-3 text-[15px] leading-relaxed text-white/80">
          {OFFER.includes.map((item) => (
            <li key={item} className="border-l border-white/20 pl-4">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/70">{OFFER.price}</p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/45">{OFFER.next}</p>
      </Section>

      <Section id="proof" index="03" label="Proof">
        <h2 className="text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold tracking-tight">
          {PROOF.title}
        </h2>
        <article className="mt-8 border border-white/10 p-5 sm:p-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
            {PROOF.natvoiz.label}
          </p>
          <dl className="mt-5 space-y-4 text-[15px] leading-relaxed">
            <div>
              <dt className="text-white/40">Who</dt>
              <dd className="mt-1 text-white/80">{PROOF.natvoiz.who}</dd>
            </div>
            <div>
              <dt className="text-white/40">Broken</dt>
              <dd className="mt-1 text-white/80">{PROOF.natvoiz.broken}</dd>
            </div>
            <div>
              <dt className="text-white/40">Built</dt>
              <dd className="mt-1 text-white/80">{PROOF.natvoiz.built}</dd>
            </div>
            <div>
              <dt className="text-white/40">Result</dt>
              <dd className="mt-1 text-white">{PROOF.natvoiz.result}</dd>
            </div>
          </dl>
          <Link
            href={PROOF.natvoiz.href}
            className="mt-6 inline-block text-xs text-white/40 underline-offset-4 hover:text-white hover:underline"
          >
            Case notes
          </Link>
        </article>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {PROOF.also.map((item) => (
            <article key={item.name} className="border border-white/10 p-5">
              <h3 className="text-sm font-semibold">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{item.body}</p>
              <Link
                href={item.href}
                className="mt-4 inline-block text-xs text-white/40 underline-offset-4 hover:text-white hover:underline"
              >
                Case notes
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/55">{PROOF.closing}</p>
      </Section>

      <Section id="process" index="04" label="Process">
        <ol className="space-y-0">
          {PROCESS.steps.map((step, i) => (
            <li
              key={step.title}
              className="grid gap-3 border-t border-white/10 py-5 sm:grid-cols-[3rem_minmax(0,1fr)]"
            >
              <span className="font-mono text-sm text-white/35">0{i + 1}</span>
              <div>
                <p className="text-base font-semibold tracking-tight">{step.title}</p>
                {step.body ? (
                  <p className="mt-1 text-sm leading-relaxed text-white/55">{step.body}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="fit" index="05" label="Fit">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/50">
              Good fit
            </h2>
            <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-white/80">
              {FIT.good.map((item) => (
                <li key={item} className="border-l border-white/25 pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/50">
              Not a fit
            </h2>
            <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-white/55">
              {FIT.bad.map((item) => (
                <li key={item} className="border-l border-white/10 pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="faq" index="06" label="FAQ">
        <dl className="divide-y divide-white/10 border-y border-white/10">
          {FAQ.items.map((item) => (
            <div key={item.question} className="grid gap-2 py-5 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-8">
              <dt className="text-sm font-semibold text-white">{item.question}</dt>
              <dd className="text-sm leading-relaxed text-white/60">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <section id="apply" className="scroll-mt-24 border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">07 / Apply</p>
            <h2 className="mt-4 max-w-3xl text-[clamp(1.85rem,4vw,3.25rem)] font-semibold tracking-tight">
              {APPLY.headline}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60">{APPLY.subhead}</p>
            <p className="mt-4 max-w-xl text-xs leading-relaxed text-white/40">{APPLY.microcopy}</p>
            <Link
              href={PORTFOLIO_SECTION_HREF}
              className="mt-8 inline-block text-xs text-white/35 underline-offset-4 hover:text-white/70 hover:underline"
            >
              Prefer to skim shipped work first
            </Link>
          </div>
          <div className="border border-white/10 bg-white/[0.03] p-5 sm:p-7">
            <p className="text-sm font-semibold">{APPLY_CTA_LABEL}</p>
            <div className="mt-6">
              <Suspense fallback={<p className="text-sm text-white/40">Loading form…</p>}>
                <ApplyForm payBookUrl={PAY_BOOK_URL} />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter showLegalInfo />
    </main>
  )
}
