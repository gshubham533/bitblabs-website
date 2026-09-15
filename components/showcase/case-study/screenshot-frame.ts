import { cn } from '@/lib/utils'

export type ImageFrameVariant = 'none' | 'minimal' | 'device' | 'rezonna'

const WAR_ROOM_SHELL =
  'overflow-hidden rounded-[0.85rem] border border-[var(--bb-rail)] bg-[var(--bb-surface)] shadow-[var(--bb-chip-shadow)]'

export function isPreFramedAsset(src: string): boolean {
  return /-framed\.(png|jpe?g|webp|svg)$/i.test(src)
}

export function resolveImageFrameVariant(options: {
  src: string
  layout: 'inline' | 'gallery' | 'cinematic'
  slideFrame?: ImageFrameVariant
  projectStyle?: ImageFrameVariant
}): ImageFrameVariant {
  if (options.slideFrame) return options.slideFrame
  if (isPreFramedAsset(options.src)) return 'none'
  if (options.layout === 'cinematic' || options.layout === 'gallery') return 'minimal'
  if (options.projectStyle) return options.projectStyle
  return 'minimal'
}

export function frameShellClass(
  variant: ImageFrameVariant,
  _sectionTheme: 'light' | 'dark',
  _frameTheme: 'light' | 'dark'
): string {
  if (variant === 'none') {
    return cn(WAR_ROOM_SHELL)
  }
  return WAR_ROOM_SHELL
}

export function frameContentClass(
  variant: ImageFrameVariant,
  frameTheme: 'light' | 'dark',
  _sectionTheme: 'light' | 'dark' = 'dark'
): string {
  if (variant === 'none') return 'bg-transparent'
  if (frameTheme === 'dark') return 'bg-[var(--bb-ink)]'
  return 'bg-[var(--bb-board)]'
}

export function frameContentRingClass(
  _variant: ImageFrameVariant,
  _sectionTheme: 'light' | 'dark'
): string {
  return 'ring-1 ring-inset ring-[rgba(20,24,32,0.06)]'
}

export function liveUrlLabel(liveUrl?: string, fallback = 'app.example.com'): string {
  if (!liveUrl) return fallback
  try {
    return new URL(liveUrl).hostname.replace(/^www\./, '')
  } catch {
    return liveUrl
  }
}
