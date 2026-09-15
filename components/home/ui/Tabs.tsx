'use client'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn } from '@/lib/utils'
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from 'react'

export const Tabs = TabsPrimitive.Root

export const TabsList = forwardRef<
  ElementRef<typeof TabsPrimitive.List>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List ref={ref} className={cn('flex flex-col gap-2', className)} {...props} />
))
TabsList.displayName = TabsPrimitive.List.displayName

export const TabsTrigger = forwardRef<
  ElementRef<typeof TabsPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'rounded-2xl border px-4 py-3.5 text-left text-sm font-semibold transition',
      'border-[var(--bb-line)] bg-white text-[var(--bb-ink)] hover:bg-[var(--bb-brand-soft)]',
      'data-[state=active]:border-transparent data-[state=active]:bg-[var(--bb-brand)] data-[state=active]:text-white data-[state=active]:shadow-[var(--bb-shadow)]',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bb-brand)] focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

export const TabsContent = forwardRef<
  ElementRef<typeof TabsPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bb-brand)] focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName
