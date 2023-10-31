import BetaAlert from '@/components/BetaAlert';
import Heading from '@/components/Heading';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-full">
      <section className="flex h-full flex-col items-center justify-center gap-8 text-center">
        <Heading variant="h1">Practice Frontend Development</Heading>
        <BetaAlert />
        <Button asChild>
          <Link href={'/questions'}>Check out Questions</Link>
        </Button>
      </section>
    </main>
  );
}
