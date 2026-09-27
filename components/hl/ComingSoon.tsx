import { FinalCta } from './FinalCta'
import { NewsletterForm } from './NewsletterForm'
import { PageShell } from './PageShell'

/** The template's Waitlist page, used for sections that aren't published yet. */
export function ComingSoon({ title, description }: { title: string; description: string }) {
  return (
    <PageShell>
      <section className="pb-6 pt-32 md:pb-16 md:pt-40 lg:pt-50">
        <div className="hl-container">
          <div className="mx-auto text-center md:max-w-2xl">
            <span className="mb-4.5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-medium text-zinc-800">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-hl-orange opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-hl-orange" />
              </span>
              Coming soon
            </span>
            <h1 className="mb-2.5 text-4xl font-medium tracking-tight text-zinc-900 md:text-5xl lg:text-[90px] lg:leading-[1.1]">
              {title}
            </h1>
            <p className="mx-auto mb-5 text-base md:mb-7.5 md:text-xl">{description}</p>
          </div>
          <div className="mx-auto md:max-w-2xl lg:max-w-lg">
            <NewsletterForm />
          </div>
        </div>
      </section>
      <FinalCta />
    </PageShell>
  )
}
