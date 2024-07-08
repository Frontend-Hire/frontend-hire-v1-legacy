import React from 'react';
import ComingSoonSection from './_components/ComingSoonSection';
import FeaturesSection from './_components/FeaturesSection';
import HeroSection from './_components/HeroSection';
import PricingSection from '../../components/PricingSection';
import FAQSection from '@/components/FAQSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <ComingSoonSection />
      <PricingSection />
      <FAQSection />
      <TestimonialsSection />
    </main>
  );
}
