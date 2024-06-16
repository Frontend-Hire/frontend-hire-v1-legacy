import FAQSection from '@/components/FAQSection';
import PricingSection from '@/components/PricingSection';
import { openGraphShared } from '@/app/shared-metadata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | Frontend Hire',
  description: 'Our Pricing for Pro Content on Frontend Hire',
  openGraph: {
    ...openGraphShared,
    title: 'Pricing | Frontend Hire',
    description: 'Our Pricing for Pro Content on Frontend Hire',
  },
};

export default function PricingPage() {
  return (
    <article className="flex flex-col gap-5">
      <PricingSection />
      <FAQSection />
    </article>
  );
}
