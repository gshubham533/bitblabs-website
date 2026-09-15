'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { cn } from '@/lib/utils'
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from 'react'

export const Accordion = AccordionPrimitive.Root

export const AccordionItem = forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b border-[var(--bb-line)] last:border-b-0', className)}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

export const AccordionTrigger = forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'group flex flex-1 items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold text-[var(--bb-ink)] transition-colors sm:px-6 sm:py-5 sm:text-base',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bb-brand)] focus-visible:ring-offset-2',
        className
      )}
      {...props}
    >
      {children}
      <span
        aria-hidden
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[var(--bb-canvas)] text-lg transition-transform duration-200 group-data-[state=open]:rotate-45"
      >
        +
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

export const AccordionContent = forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'bb-accordion-content overflow-hidden',
      className
    )}
    {...props}
  >
    <div className="px-5 pb-5 text-sm leading-relaxed text-[var(--bb-ink-muted)] sm:px-6 sm:pb-6 sm:text-[15px]">
      {children}
    </div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName
