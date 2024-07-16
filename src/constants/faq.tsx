import CopyEmailOnClick from '@/components/CopyEmailOnClick';

export const FAQ: { question: React.ReactNode; answer: React.ReactNode }[] = [
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
      'I am an Indian student studying abroad. Do I still have to pay in USD?',
    answer: (
      <>
        <p>
          No, you can pay in INR or USD or local currency. Since, you are a
          student, you will also get a discounted price along with the regional
          Indian price.
        </p>
        <p>
          Please email us at <CopyEmailOnClick email="info@frontendhire.com" />
          to get Indian payment options or discount code for USD payments.
        </p>
      </>
    ),
  },
  {
    question: 'Do you offer student discounts?',
    answer: (
      <>
        <p>Yes, we do offer student discounts.</p>
        <p>
          Please email us at <CopyEmailOnClick email="info@frontendhire.com" />{' '}
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
          <CopyEmailOnClick email="info@frontendhire.com" /> for any queries.
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
