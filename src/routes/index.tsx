import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '~/components/accordion';

const faqs = [
  {
    question: 'What is Qwik?',
    answer: 'Qwik is a new way to build web apps. It is a collection of open source tools that help you build web apps faster and with less code.'
  },
  {
    question: 'What is Qwik City?',
    answer: 'Qwik City is a collection of open source tools that help you build web apps faster and with less code.'
  }
]

export default component$(() => {
  return (
    <section class="space-y-8">
      <h3 class="text-3xl font-semibold text-center">Faqs</h3>

      <Accordion behavior='single' collapsible class="max-w-4xl mx-auto py-12">
        {faqs.map(faq => (
          <AccordionItem key={faq.question}>
            <AccordionTrigger class="text-xl font-bold py-6">{faq.question}</AccordionTrigger>
            <AccordionContent class="text-base">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
