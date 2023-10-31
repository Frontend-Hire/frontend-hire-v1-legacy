import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ListIcon } from 'lucide-react';

interface Props {
  submitted: number;
  total: number;
}

export default function SubmittedQuestions({ submitted, total }: Props) {
  return (
    <div className="flex h-full flex-col items-center justify-between gap-4 rounded-sm bg-gray-300 p-2 text-center">
      <p className="text-lg font-medium">Questions Submitted</p>
      <p className="text-6xl sm:text-7xl">
        <span className="font-semibold">{submitted}</span>
        <span className="relative font-black">/</span>
        <span className="relative font-semibold">{total}</span>
      </p>
      <Button asChild className="font-semibold" variant="link">
        <Link className="flex items-center gap-2" href="/questions">
          <ListIcon /> Show All Questions
        </Link>
      </Button>
    </div>
  );
}
