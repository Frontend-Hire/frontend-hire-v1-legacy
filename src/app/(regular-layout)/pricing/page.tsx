import FAQSection from '@/components/FAQSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { getMetadata } from '@/lib/getMetadata';

export const metadata = getMetadata({
  title: 'Pricing | Frontend Hire',
  description: 'Our Pricing for Pro Content on Frontend Hire',
});

export default function PricingPage() {
  return (
    <article className="flex flex-col gap-5">
      <PricingSection />
      <FAQSection />
      <TestimonialsSection />
    </article>
  );
}
