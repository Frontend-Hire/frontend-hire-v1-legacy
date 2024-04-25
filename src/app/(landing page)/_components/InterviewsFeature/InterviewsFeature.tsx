import { Badge } from '@/components/ui/badge';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { ChevronRightIcon, PhoneCallIcon, UserIcon } from 'lucide-react';
import InterviewItem from './InterviewItem';
import Link from 'next/link';

export default function InterviewsFeature() {
  return (
    <>
      <VisuallyHidden>List of Interviews</VisuallyHidden>
      <ul className="flex flex-col gap-4">
        <li>
          <Link prefetch={false} href="/interviews/simulated-phone-screening">
            <InterviewItem
              title="Simulated Phone Screening"
              leftIcon={<PhoneCallIcon size={30} />}
              rightIcon={<ChevronRightIcon size={30} />}
            />
          </Link>
        </li>
        <li>
          <Link prefetch={false} href="/interviews/mock-personal-interview">
            <InterviewItem
              title={
                <>
                  Mock In-Person Interview{' '}
                  <Badge className="text-center">20% Off</Badge>
                </>
              }
              leftIcon={<UserIcon size={30} />}
              rightIcon={<ChevronRightIcon size={30} />}
            />
          </Link>
        </li>
      </ul>
    </>
  );
}
