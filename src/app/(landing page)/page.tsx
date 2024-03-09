import HeroSection from './_components/HeroSection';

export const dynamic = 'force-static';

export default function Home() {
  return (
    <main className="flex flex-col gap-[10px] py-2">
      <HeroSection />
    </main>
  );
}
