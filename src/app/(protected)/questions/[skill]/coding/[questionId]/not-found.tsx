import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { SearchXIcon } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-full flex-col px-2">
      <Header />
      <div className="flex grow flex-col items-center justify-center gap-10">
        <div className="flex items-center gap-5">
          <SearchXIcon size={40} />
          Question not found
        </div>
        <Button asChild>
          <Link href={'/questions'}>Back to all questions</Link>
        </Button>
      </div>
    </div>
  );
}
