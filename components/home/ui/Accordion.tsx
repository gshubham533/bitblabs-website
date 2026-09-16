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
    className={cn('border-b border-[var(--bb-line)]', className)}
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
        'group flex flex-1 items-baseline justify-between gap-6 py-[26px] text-left text-[20px] font-bold tracking-[-0.01em] text-[var(--bb-ink)] transition-colors hover:text-[var(--bb-blue)]',
        'data-[state=open]:text-[var(--bb-blue)]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bb-blue)] focus-visible:ring-offset-2',
        className
      )}
      {...props}
    >
      {children}
      <span
        aria-hidden
        className="plus shrink-0 text-2xl font-normal leading-none text-[var(--bb-ink)] transition-transform duration-200 group-data-[state=open]:rotate-45"
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
    className={cn('bb-accordion-content overflow-hidden', className)}
    {...props}
  >
    <div className="max-w-[640px] pb-[30px] text-[17px] leading-[1.7] text-[var(--bb-body-strong)]">
      {children}
    </div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName
