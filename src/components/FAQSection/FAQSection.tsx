import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQ } from '@/constants/faq';

export default function FAQSection() {
  return (
    <section className="container flex flex-col gap-10 pb-20">
      <h2 className="text-center text-3xl font-black">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col items-center justify-center gap-4">
        <Accordion
          className="mx-auto w-full max-w-[800px] space-y-4 text-xl font-medium text-muted"
          type="single"
          collapsible
        >
          {FAQ.map((faq, index) => (
            <AccordionItem
              key={index}
              className="overflow-hidden rounded border-0"
              value={`item-${index}`}
            >
              <AccordionTrigger className="bg-card px-5 py-2 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="space-y-2 bg-[#1A1A1A] px-5 py-2 text-lg leading-[150%]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
