import FeaturesSection from './_components/FeaturesSection';
import HeroSection from './_components/HeroSection';
import dynamic from 'next/dynamic';

const PricingSection = dynamic(() => import('./_components/PricingSection'));
const ComingSoonSection = dynamic(
  () => import('./_components/ComingSoonSection'),
);

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <ComingSoonSection />
      <PricingSection />
    </main>
  );
}
