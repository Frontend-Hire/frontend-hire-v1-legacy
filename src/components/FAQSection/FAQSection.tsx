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
    answer: (
      <>
        <p>
          We believe this payment option is the best to provide maximum value
          when selling premium content that evolves over time. It also helps us
          fund our early operations, which allows us to invest in and deliver
          better content in the future.
        </p>
        <p>
          We might offer other payment options in the future as our content
          grows.
        </p>
      </>
    ),
  },
  {
    question:
      'I am an Indian student studying in the US. Do I still have to pay in USD?',
    answer: (
      <>
        <p>
          No, you can pay in INR or USD. Since, you are a student, you will also
          get a discounted price along with the regional Indian price.
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
          to get Indian payment options or discount code for USD payments.
        </p>
      </>
    ),
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
      <p>
        Given the nature of digital content, we do not offer refunds at the
        moment. This might change in the future as our content grows.
      </p>
    ),
  },
  {
    question: 'Who do I contact in case of issues?',
    answer: (
      <>
        <p>{`If your payment is stuck at "verifying payment", refresh your page and most probably you should have the pro access if the payment was successful, this is pretty rare (you lost your network or closed the payment gateway) and our webhook should catch these kind of issues.`}</p>
        <p>
          Either way you can Email us at{' '}
          <Link
            prefetch={false}
            className="text-link underline"
            href="mailto:info@frontendhire.com"
          >
            info@frontendhire.com
          </Link>{' '}
          for any queries.
        </p>
      </>
    ),
  },
  {
    question: 'What do you mean by “Hiring Profiles”?',
    answer: (
      <>
        <p>
          We want to solve issues with interviews from both the candidate&apos;s
          and the company&apos;s perspectives.
        </p>
        <p>
          Creating hiring profiles was part of our initial approach to
          addressing this problem. However, given the recent changes in the job
          market, we plan to conduct further studies before implementing a
          solution.
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
