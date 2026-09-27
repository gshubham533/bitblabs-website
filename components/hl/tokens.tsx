import type { ReactElement } from 'react'
import type { IconKey, StepOwner, Tone } from '@/lib/landing'
import {
  IconBell,
  IconBriefcase,
  IconCheck,
  IconClock,
  IconCopy,
  IconEye,
  IconFile,
  IconGitBranch,
  IconHeadset,
  IconHelp,
  IconInbox,
  IconLayers,
  IconLightbulb,
  IconRepeat,
  IconRoute,
  IconSheet,
  IconShield,
  IconSparkles,
  IconTruck,
  IconUserCheck,
  IconUsers,
} from './icons'

export const toneBg: Record<Tone, string> = {
  orange: 'bg-hl-orange',
  green: 'bg-hl-green',
  blue: 'bg-hl-blue',
  pink: 'bg-hl-pink',
  azure: 'bg-hl-azure',
  violet: 'bg-hl-violet',
  red: 'bg-hl-red',
  teal: 'bg-hl-teal',
}

export const toneText: Record<Tone, string> = {
  orange: 'text-hl-orange',
  green: 'text-hl-green',
  blue: 'text-hl-blue',
  pink: 'text-hl-pink',
  azure: 'text-hl-azure',
  violet: 'text-hl-violet',
  red: 'text-hl-red',
  teal: 'text-hl-teal',
}

export const toneHex: Record<Tone, string> = {
  orange: '#ff4c00',
  green: '#12a70a',
  blue: '#0022ff',
  pink: '#ff00a1',
  azure: '#0059ff',
  violet: '#9000ff',
  red: '#ff0000',
  teal: '#0283a7',
}

/** Pastel card fills used inside dashboard mockups (the template's routine-stack colors). */
export const toneSoft: Record<Tone, string> = {
  orange: 'bg-orange-100 border-orange-200',
  green: 'bg-green-100 border-green-300',
  blue: 'bg-indigo-100 border-indigo-200',
  pink: 'bg-pink-100 border-pink-200',
  azure: 'bg-sky-100 border-sky-200',
  violet: 'bg-purple-100 border-purple-200',
  red: 'bg-red-100 border-red-200',
  teal: 'bg-teal-100 border-teal-200',
}

const iconMap: Record<IconKey, (p: { className?: string }) => ReactElement> = {
  clock: IconClock,
  sheet: IconSheet,
  repeat: IconRepeat,
  inbox: IconInbox,
  copy: IconCopy,
  file: IconFile,
  help: IconHelp,
  userCheck: IconUserCheck,
  shield: IconShield,
  route: IconRoute,
  eye: IconEye,
  bell: IconBell,
  lightbulb: IconLightbulb,
  briefcase: IconBriefcase,
  users: IconUsers,
  headset: IconHeadset,
  truck: IconTruck,
  sparkles: IconSparkles,
  gitBranch: IconGitBranch,
  layers: IconLayers,
  check: IconCheck,
}

export function KeyIcon({ name, className }: { name: IconKey; className?: string }) {
  const Icon = iconMap[name]
  return <Icon className={className} />
}

/** Step owner markers: AI (violet gradient), a simple rule (ink), a person (orange). */
export const ownerBg: Record<StepOwner, string> = {
  ai: 'bg-gradient-to-br from-hl-violet to-hl-pink',
  rule: 'bg-zinc-900',
  human: 'bg-hl-orange',
}

const ownerIcon: Record<StepOwner, (p: { className?: string }) => ReactElement> = {
  ai: IconSparkles,
  rule: IconCheck,
  human: IconUserCheck,
}

export function OwnerIcon({ owner, className }: { owner: StepOwner; className?: string }) {
  const Icon = ownerIcon[owner]
  return <Icon className={className} />
}

export function img(name: string) {
  return `/images/redesign/${name}.webp`
}
