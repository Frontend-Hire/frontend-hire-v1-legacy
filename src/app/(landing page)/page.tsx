import Hero from './_components/Hero';
import Features from './_components/Features';
import Pricing from './_components/Pricing';
import Testimonials from './_components/Testimonials';

export const dynamic = 'force-static';

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
    </main>
  );
}
