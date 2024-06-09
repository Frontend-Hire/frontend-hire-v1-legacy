import ComingSoonSection from './_components/ComingSoonSection';
import FeaturesSection from './_components/FeaturesSection';
import HeroSection from './_components/HeroSection';
import PricingSection from '../../components/PricingSection';
import FAQSection from '@/components/FAQSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <ComingSoonSection />
      <PricingSection />
      <FAQSection />
    </main>
  );
}
