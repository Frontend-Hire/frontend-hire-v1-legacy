import FeaturesSection from './_components/FeaturesSection';
import HeroSection from './_components/HeroSection';

export const dynamic = 'force-static';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
