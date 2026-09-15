import type { StorySlide } from '@/lib/story-slide'
import type { CaseStudyProject } from '@/lib/case-study-project'

export function slideChapterLabel(type: StorySlide['type']) {
  const labels: Record<string, string> = {
    intro: 'Context',
    problem: 'The Problem',
    solution: 'The Solution',
    scene: 'Platform',
    features: 'Capabilities',
    stats: 'Impact',
    process: 'Workflow',
    architecture: 'System',
    gallery: 'Gallery',
    conclusion: 'Outcome',
    insight: 'Insight',
    testimonial: 'Voices',
  }
  return labels[type] ?? 'Chapter'
}

export function heroImage(project: CaseStudyProject): string | undefined {
  if (project.cover) return project.cover

  const scene = project.slides?.find((s) => s.image && s.type === 'scene')
  if (scene?.image) return scene.image

  const any = project.slides?.find((s) => s.image)
  if (any?.image) return any.image

  const gallery = project.slides?.find((s) => s.galleryImages?.length)
  if (gallery?.galleryImages?.[0]) return gallery.galleryImages[0]

  return project.thumbnail
}

/** Hero media for case study pages. Excludes logo/thumbnail-only fallback. */
export function caseStudyHeroMedia(project: CaseStudyProject): string | undefined {
  if (project.cover) return project.cover

  const scene = project.slides?.find((s) => s.image && s.type === 'scene')
  if (scene?.image) return scene.image

  const any = project.slides?.find((s) => s.image)
  if (any?.image) return any.image

  const gallery = project.slides?.find((s) => s.galleryImages?.length)
  if (gallery?.galleryImages?.[0]) return gallery.galleryImages[0]

  return undefined
}

export function stickySourceSlide(slides: StorySlide[]): StorySlide | undefined {
  const withSteps = slides.filter((s) => s.steps && s.steps.length >= 3)
  if (withSteps.length > 0) {
    return withSteps.sort((a, b) => (b.steps?.length ?? 0) - (a.steps?.length ?? 0))[0]
  }
  return slides.find((s) => s.layers && s.layers.length > 0)
}

export function stickyStoryFromSlides(slides: StorySlide[]) {
  const source = stickySourceSlide(slides)
  if (!source) return null

  if (source.steps?.length) {
    return {
      eyebrow: slideChapterLabel(source.type),
      title: source.title ?? 'How it works',
      intro: source.content,
      steps:
        source.steps.map((step) => ({
          title: step.title,
          description: step.description,
        })) ?? [],
    }
  }

  if (source.layers?.length) {
    return {
      eyebrow: slideChapterLabel(source.type),
      title: source.title ?? 'Architecture',
      intro: source.content,
      steps:
        source.layers.map((layer) => ({
          title: layer.name,
          description: layer.description,
        })) ?? [],
    }
  }

  return null
}

/** War-room tonal steps: canvas / board / surface (maps legacy dark|light). */
export type SceneTheme = 'dark' | 'light' | 'canvas' | 'board' | 'surface'

function resolveTone(theme: SceneTheme): 'canvas' | 'board' | 'surface' {
  if (theme === 'light' || theme === 'surface') return 'surface'
  if (theme === 'board') return 'board'
  // legacy 'dark' → board field for subtle section rhythm
  return theme === 'dark' ? 'board' : 'canvas'
}

export function sceneThemeClasses(theme: SceneTheme = 'board') {
  const tone = resolveTone(theme)

  const section =
    tone === 'surface'
      ? 'bg-[var(--bb-surface)]'
      : tone === 'board'
        ? 'bg-[var(--bb-board)]'
        : 'bg-[var(--bb-canvas)]'

  return {
    section,
    sectionAlt: tone === 'board' ? 'bg-[var(--bb-canvas)]' : 'bg-[var(--bb-board)]',
    border: 'border-[var(--bb-line)]',
    borderStrong: 'border-[var(--bb-rail)]',
    heading: 'text-[var(--bb-ink)]',
    body: 'text-[var(--bb-ink-muted)]',
    pullQuote: 'text-[var(--bb-ink)]',
    metaValue: 'text-[var(--bb-ink)]',
    card: 'border-[var(--bb-rail)] bg-[var(--bb-surface)] shadow-[var(--bb-chip-shadow)]',
    imageFrame:
      'border-[var(--bb-rail)] bg-[var(--bb-surface)] shadow-[var(--bb-chip-shadow)]',
    heroFrame:
      'border-[var(--bb-rail)] bg-[var(--bb-surface)] shadow-[var(--bb-chip-shadow)]',
    galleryFrame:
      'border-[var(--bb-rail)] bg-[var(--bb-surface)] shadow-[var(--bb-chip-shadow)]',
    stepBadge:
      'bg-[var(--bb-brand-soft)] text-[var(--bb-brand-dark)] border-[var(--bb-brand)]',
  }
}
