import { component$, Slot } from '@builder.io/qwik';

import {
  type AccordionItemProps,
  type AccordionTriggerProps,
  type ContentProps as AccordionContentProps,
  AccordionRoot,
  AccordionItem as AccordionItemPrimitive,
  AccordionTrigger as AccordionTriggerPrimitive,
  AccordionContent as AccordionContentPrimitive,
  AccordionHeader as AccordionHeaderPrimitive,
} from '@qwik-ui/headless';
import { LuChevronDown } from "@qwikest/icons/lucide";

import { cn } from '~/utils/cn';

export const Accordion = AccordionRoot;

export const AccordionItem = component$<AccordionItemProps>(({ class: className, ...props }) => (
  <AccordionItemPrimitive {...props} class={cn('border-b', className)}>
    <Slot />
  </AccordionItemPrimitive>
));

export const AccordionTrigger = component$<AccordionTriggerProps>(
  ({ class: className, ...props }) => (
    <AccordionHeaderPrimitive class="flex">
      <AccordionTriggerPrimitive
        {...props}
        class={cn(
          'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
          className
        )}
      >
        <Slot />
        <LuChevronDown class="h-4 w-4 shrink-0 transition-transform duration-200" />
      </AccordionTriggerPrimitive>
    </AccordionHeaderPrimitive>
  )
);

export const AccordionContent = component$<AccordionContentProps>(
  ({ class: className, ...props }) => (
    <AccordionContentPrimitive
      {...props}
      class={cn('overflow-hidden text-sm transition-all', className)}
    >
      <div class="pb-4 pt-0">
        <Slot />
      </div>
    </AccordionContentPrimitive>
  )
);
