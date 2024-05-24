import ComingSoonSection from './_components/ComingSoonSection';
import FeaturesSection from './_components/FeaturesSection';
import HeroSection from './_components/HeroSection';
import PricingSection from './_components/PricingSection';
import FAQSection from './_components/FAQSection';

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
