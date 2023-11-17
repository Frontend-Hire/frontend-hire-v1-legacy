import BetaAlert from '@/components/BetaAlert';
import Heading from '@/components/Heading';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import FeedbackForm from './FeedbackForm';

export default function Home() {
  return (
    <main className="h-full">
      <section className="flex h-full flex-col items-center justify-center gap-8 text-center">
        <Heading variant="h1">Practice Frontend Development</Heading>
        <BetaAlert />
        <Button asChild>
          <Link href={'/questions'}>Check out Questions</Link>
        </Button>
        <p>Feedback can be sent through the below embeded Google form.</p>
        <FeedbackForm />
      </section>
    </main>
  );
}
