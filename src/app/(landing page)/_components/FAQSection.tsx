import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

const FAQ: { question: React.ReactNode; answer: React.ReactNode }[] = [
  {
    question: 'Why just one-time payment option?',
    answer:
      'We believe this approach is the best way to provide maximum value when selling premium content that evolves over time. It also helps us fund our early operations, allowing us to invest in and deliver better content in the future.',
  },
  {
    question: 'Do you offer student discounts?',
    answer: (
      <>
        <p>
          Yes, we do offer student discounts and discounts for individuals
          impacted by layoffs.
        </p>
        <p>
          Please email us at{' '}
          <Link
            prefetch={false}
            className="text-link underline"
            href="mailto:info@frontendhire.com"
          >
            info@frontendhire.com
          </Link>{' '}
          to obtain discount codes.
        </p>
      </>
    ),
  },
  {
    question: 'Do you offer refunds?',
    answer: (
      <>
        <p>
          Yes, but only under a <strong>fair-use policy</strong>. If we notice
          that you have accessed more than 20% of the premium content, we will
          not provide a refund. Refund requests must be submitted within 7 days
          of purchase.
        </p>
        <p>
          Please email us at{' '}
          <Link
            prefetch={false}
            className="text-link underline"
            href="mailto:info@frontendhire.com"
          >
            info@frontendhire.com
          </Link>{' '}
          to request a refund.
        </p>
      </>
    ),
  },
  {
    question: 'Who do I contact in case of issues?',
    answer: (
      <p>
        Email us at{' '}
        <Link
          prefetch={false}
          className="text-link underline"
          href="mailto:info@frontendhire.com"
        >
          info@frontendhire.com
        </Link>{' '}
        for any queries.
      </p>
    ),
  },
  {
    question:
      'What do you mean by “Hiring Profiles”? Why is it not part of the Pro plan?',
    answer: (
      <>
        <p>
          We want to solve issues with interviews from both the candidate's and
          the company's perspectives.
        </p>
        <p>
          Creating hiring profiles is part of our initial approach to addressing
          this problem. Given the recent changes in the job market, we plan to
          conduct further studies before implementing a solution.
        </p>
      </>
    ),
  },
];

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
              <AccordionTrigger className="bg-card px-5 py-[10px] text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="space-y-2 bg-[#1A1A1A] px-5 py-[10px] text-lg leading-[150%]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
