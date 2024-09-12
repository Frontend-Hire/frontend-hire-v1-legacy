import CustomHeading from '@/components/CustomHeading';
import { getMetadata } from '@/lib/getMetadata';

export const metadata = getMetadata({
  title: 'Request Content | Frontend Hire',
  description:
    'Have a question or course request? Provide us with rough details and we will work on it.',
  canonical: '/request-content',
});

export default function RequestContentPage() {
  return (
    <article className="flex flex-col gap-5">
      <CustomHeading
        title="Request Content"
        subTitle="Have a question or course request? Provide us with rough details and we will work on it."
      />

      <iframe
        src="https://app.youform.com/forms/9qqun4yk"
        loading="lazy"
        width="100%"
        height="700"
        title="Request Content Form"
        marginHeight={0}
        marginWidth={0}
      ></iframe>
    </article>
  );
}
