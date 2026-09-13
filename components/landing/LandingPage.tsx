import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { FAQ, FINAL_CTA, FIT, HERO, OFFER, PROCESS, PROOF } from '@/lib/landing'
import { BOOK_FINAL_CTA_LABEL, PAY_BOOK_URL, PORTFOLIO_SECTION_HREF } from '@/lib/site'

function BookLink({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <a
      href={PAY_BOOK_URL}
      className={`inline-flex min-h-12 items-center justify-center bg-[#111] px-5 text-sm font-semibold text-white hover:bg-black ${className}`}
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
    <section id={id} className="border-t border-[#111]/10">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 sm:px-8 sm:py-14 lg:grid-cols-[7.5rem_minmax(0,1fr)] lg:gap-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#111]/40">
          {index}
          <span className="mt-1 block text-[#111]/60">{label}</span>
        </p>
        <div>{children}</div>
      </div>
    </section>
  )
}

export function LandingPage() {
  return (
    <main className="min-h-screen bg-[#f3f2ee] text-[#111] antialiased">
      <Navbar theme="light" position="fixed" solid />

      <section className="border-b border-[#111]/10 pt-16 sm:pt-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.7fr)] lg:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#111]/45">
              01 / {HERO.eyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl text-[clamp(2rem,5.6vw,4rem)] font-semibold leading-[1.02] tracking-tight">
              {HERO.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#111]/70 sm:text-base">
              {HERO.subhead}
            </p>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#111]/50">{HERO.bridge}</p>
            <div className="mt-7 space-y-3">
              <BookLink>{HERO.cta}</BookLink>
              <p className="max-w-xl text-xs leading-relaxed text-[#111]/45">{HERO.microcopy}</p>
            </div>
          </div>

          <aside className="border border-[#111] bg-white p-5 sm:p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#111]/45">Session</p>
            <p className="mt-3 text-4xl font-semibold tracking-tight">$2,000</p>
            <dl className="mt-5 space-y-3 text-sm text-[#111]/65">
              <div className="flex justify-between gap-4 border-t border-[#111]/10 pt-3">
                <dt>Length</dt>
                <dd className="text-[#111]">90 min</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-[#111]/10 pt-3">
                <dt>Plan</dt>
                <dd className="text-[#111]">48 hours</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-[#111]/10 pt-3">
                <dt>Pay</dt>
                <dd className="text-[#111]">PayPal on book</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-[#111]/10 pt-3">
                <dt>Lead</dt>
                <dd className="text-right text-[#111]">Shubham Gupta</dd>
              </div>
            </dl>
            <Link
              href={PORTFOLIO_SECTION_HREF}
              className="mt-6 inline-block text-xs text-[#111]/40 underline-offset-4 hover:text-[#111] hover:underline"
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
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#111]/70">{OFFER.promise}</p>
        <ul className="mt-7 space-y-3 text-[15px] leading-relaxed text-[#111]/85">
          {OFFER.includes.map((item) => (
            <li key={item} className="border-l-2 border-[#111] pl-4">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-7 max-w-2xl text-sm leading-relaxed text-[#111]/70">{OFFER.price}</p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#111]/45">{OFFER.next}</p>
      </Section>

      <Section id="proof" index="03" label="Proof">
        <h2 className="text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold tracking-tight">
          {PROOF.title}
        </h2>
        <article className="mt-7 border border-[#111] bg-white p-5 sm:p-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#111]/40">
            {PROOF.natvoiz.label}
          </p>
          <dl className="mt-5 space-y-4 text-[15px] leading-relaxed">
            <div>
              <dt className="text-[#111]/40">Who</dt>
              <dd className="mt-1 text-[#111]/80">{PROOF.natvoiz.who}</dd>
            </div>
            <div>
              <dt className="text-[#111]/40">Broken</dt>
              <dd className="mt-1 text-[#111]/80">{PROOF.natvoiz.broken}</dd>
            </div>
            <div>
              <dt className="text-[#111]/40">Built</dt>
              <dd className="mt-1 text-[#111]/80">{PROOF.natvoiz.built}</dd>
            </div>
            <div>
              <dt className="text-[#111]/40">Result</dt>
              <dd className="mt-1 font-medium text-[#111]">{PROOF.natvoiz.result}</dd>
            </div>
          </dl>
          <Link
            href={PROOF.natvoiz.href}
            className="mt-6 inline-block text-xs text-[#111]/45 underline-offset-4 hover:text-[#111] hover:underline"
          >
            Case notes
          </Link>
        </article>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {PROOF.also.map((item) => (
            <article key={item.name} className="border border-[#111]/15 bg-white p-5">
              <h3 className="text-sm font-semibold">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#111]/60">{item.body}</p>
              <Link
                href={item.href}
                className="mt-4 inline-block text-xs text-[#111]/40 underline-offset-4 hover:text-[#111] hover:underline"
              >
                Case notes
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-7 max-w-2xl text-sm leading-relaxed text-[#111]/55">{PROOF.closing}</p>
      </Section>

      <Section id="process" index="04" label="Process">
        <ol className="space-y-0">
          {PROCESS.steps.map((step, i) => (
            <li
              key={step.title}
              className="grid gap-3 border-t border-[#111]/10 py-4 sm:grid-cols-[3rem_minmax(0,1fr)]"
            >
              <span className="font-mono text-sm text-[#111]/35">0{i + 1}</span>
              <div>
                <p className="text-base font-semibold tracking-tight">{step.title}</p>
                {step.body ? (
                  <p className="mt-1 text-sm leading-relaxed text-[#111]/55">{step.body}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="fit" index="05" label="Fit">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#111]/50">
              Good fit
            </h2>
            <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-[#111]/85">
              {FIT.good.map((item) => (
                <li key={item} className="border-l-2 border-[#111] pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#111]/50">
              Not a fit
            </h2>
            <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-[#111]/50">
              {FIT.bad.map((item) => (
                <li key={item} className="border-l border-[#111]/20 pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="faq" index="06" label="FAQ">
        <dl className="divide-y divide-[#111]/10 border-y border-[#111]/10">
          {FAQ.items.map((item) => (
            <div key={item.question} className="grid gap-2 py-4 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-8">
              <dt className="text-sm font-semibold text-[#111]">{item.question}</dt>
              <dd className="text-sm leading-relaxed text-[#111]/60">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <section id="book" className="border-t border-[#111]/10">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#111]/40">07 / Book</p>
          <h2 className="mt-4 max-w-3xl text-[clamp(1.85rem,4vw,3.25rem)] font-semibold tracking-tight">
            {FINAL_CTA.headline}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#111]/60">{FINAL_CTA.subhead}</p>
          <div className="mt-7 space-y-3">
            <BookLink>{BOOK_FINAL_CTA_LABEL}</BookLink>
            <p className="max-w-xl text-xs leading-relaxed text-[#111]/45">{FINAL_CTA.microcopy}</p>
          </div>
          <Link
            href={PORTFOLIO_SECTION_HREF}
            className="mt-8 inline-block text-xs text-[#111]/40 underline-offset-4 hover:text-[#111] hover:underline"
          >
            Prefer to skim shipped work first
          </Link>
        </div>
      </section>

      <SiteFooter showLegalInfo tone="light" />
    </main>
  )
}
