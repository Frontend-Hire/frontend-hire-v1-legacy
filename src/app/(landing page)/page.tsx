import FAQSection from '@/components/FAQSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WhoIsBuildingFrontendHire from '@/components/WhoIsBuildingFrontendHire';
import PricingSection from '../../components/PricingSection';
import ComingSoonSection from './_components/ComingSoonSection';
import FeaturesSection from './_components/FeaturesSection';
import HeroSection from './_components/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <ComingSoonSection />
      <PricingSection />
      <FAQSection />
      <WhoIsBuildingFrontendHire />
      <TestimonialsSection />
    </main>
  );
}
