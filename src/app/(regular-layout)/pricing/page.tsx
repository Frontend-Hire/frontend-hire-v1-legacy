import FAQSection from '@/components/FAQSection';
import PricingSection from '@/components/PricingSection';

export default function PricingPage() {
  return (
    <article className="flex flex-col gap-5">
      <PricingSection />
      <FAQSection />
    </article>
  );
}
