import { Button } from '@/components/ui/button';
import { ListIcon } from 'lucide-react';
import Link from 'next/link';

export default function ShowAllQuestions() {
  return (
    <Button>
      <Link className="flex items-center gap-2" href="/questions">
        <ListIcon /> Show All Questions
      </Link>
    </Button>
  );
}
