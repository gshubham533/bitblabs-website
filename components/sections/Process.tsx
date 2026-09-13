'use client'

import { BlurTextAnimation } from '@/components/ui/BlurTextAnimation'
import { cn } from '@/lib/utils'
import { MetricsShowcase } from '@/components/showcase/case-study/MetricsShowcase'
import { StickyStorySection } from '@/components/showcase/case-study/StickyStorySection'
import {
  FeatureGridScene,
  MetaItem,
  StatementScene,
} from '@/components/showcase/case-study/CaseStudyScenes'
import { HOME_PROCESS_STEPS } from '@/lib/home'
import { sceneThemeClasses } from '@/components/showcase/case-study/utils'

const steps = HOME_PROCESS_STEPS

const principles = [
  {
    title: 'Map the work',
    description:
      'Every engagement starts with how the process actually runs, not a template.',
  },
  {
    title: 'Humans in the loop',
    description:
      'The system proposes. Your team approves where it matters.',
  },
  {
    title: 'In your stack',
    description:
      'From architecture to deployment, one team ships a system that fits what you already use.',
  },
  {
    title: 'Then the next workflow',
    description:
      'Production first. Expand only after the first workflow is running.',
  },
]

const processMetrics = steps.map((step) => ({
  value: step.number,
  label: step.title,
}))

const blurText = true

interface ProcessProps {
  accent?: string
}

const processTheme = 'light' as const

export function Process({ accent = 'var(--color-accent)' }: ProcessProps) {
  const styles = sceneThemeClasses(processTheme)

  return (
    <div id="process" className="bg-white text-zinc-950 antialiased">
      {/* Scene 1 - Hero */}
      <section className="relative overflow-hidden bg-white px-6 pb-16 pt-16 md:px-12 md:pb-24 md:pt-24 lg:px-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(ellipse 70% 55% at 80% 10%, ${accent}14 0%, transparent 65%)`,
          }}
        />

        <div className="relative mx-auto max-w-[1400px]">
          <p className="font-heading text-sm uppercase tracking-[0.28em]" style={{ color: accent }}>
            <BlurTextAnimation as="span" text="How we work" variant="label" theme="light" />
          </p>
          <BlurTextAnimation
            text="One workflow first"
            className="mt-8 whitespace-nowrap md:-translate-x-3"
            textClassName="font-display font-bold text-zinc-950 text-[clamp(1.75rem,calc((100vw-3rem)/10.2),7.5rem)] md:text-[clamp(4rem,11vw,9rem)]"
            theme="light"
            variant="headline"
            startDelay={0.08}
          />
          <BlurTextAnimation
            text="Four phases from the process as it runs today to a system in production."
            className="mt-8 max-w-3xl font-body text-2xl text-zinc-600 md:text-3xl"
            theme="light"
            variant="body"
            startDelay={0.18}
          />

          <div className={cn('mt-12 grid gap-8 border-t pt-10 sm:grid-cols-2 lg:grid-cols-4', styles.borderStrong)}>
            <MetaItem label="Engagement" value="2–6 months" theme={processTheme} blurText startDelay={0.1} />
            <MetaItem label="Phases" value="4 integrated" theme={processTheme} blurText startDelay={0.14} />
            <MetaItem label="Delivery" value="Production-ready" theme={processTheme} blurText startDelay={0.18} />
              <MetaItem label="Focus" value="One workflow" theme={processTheme} blurText startDelay={0.22} />
          </div>
        </div>
      </section>

      <StatementScene
        eyebrow="The Philosophy"
        headline="Off-the-shelf tools stop. Then we build."
        body="We treat every engagement as one operational workflow: map it, design the system, ship it into your stack. No generic playbooks. No documentation dump."
        pullQuote="Each phase creates clarity, momentum, and a system your team can run."
        accent={accent}
        align="center"
        theme={processTheme}
        blurText={blurText}
      />

      <StickyStorySection
        eyebrow="The Process"
        title="Four phases. One cohesive arc."
        intro="Each phase builds on the last, from how the work runs today to a system in production."
        steps={steps.map((step) => ({
          title: step.title,
          description: step.description,
        }))}
        accent={accent}
        theme={processTheme}
        blurText={blurText}
      />

      <StatementScene
        eyebrow="In Practice"
        headline="Design and engineering in the same rhythm."
        body="We work in tight loops: validate the workflow with a real interface, refine the architecture, and ship incrementally so the process keeps moving."
        pullQuote="The same rigor you see in the work is how we build the system."
        accent={accent}
        align="center"
        theme={processTheme}
        blurText={blurText}
      />

      <FeatureGridScene
        eyebrow="What You Get"
        title="End-to-end across every layer."
        body="From the first map to a live system: one team, one standard."
        features={principles}
        accent={accent}
        theme={processTheme}
        blurText={blurText}
      />

      <MetricsShowcase
        eyebrow="The Phases"
        headline="Structured for momentum."
        subline="Each phase has a clear outcome, so you always know where we are and what comes next."
        metrics={processMetrics}
        accent={accent}
        theme={processTheme}
        blurText={blurText}
      />

      <StatementScene
        eyebrow="Next Step"
        headline="Ready when you are."
        body="When the case study ends, the conversation begins. Scroll down to connect, or look at more work."
        accent={accent}
        align="center"
        theme={processTheme}
        blurText={blurText}
      />
    </div>
  )
}
