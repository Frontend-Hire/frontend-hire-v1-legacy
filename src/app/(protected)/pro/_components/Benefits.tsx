import Heading from '@/components/Heading';
import InclusionsExclusions from '@/components/InclusionsExclusions';
import { Button } from '@/components/ui/button';
import { PhoneIcon } from 'lucide-react';
import Link from 'next/link';

export default function Benefits() {
  return (
    <div className="flex w-fit flex-col gap-10">
      <div className="space-y-4 rounded bg-card p-10">
        <Heading variant="h2">Here are your benefits</Heading>
        <InclusionsExclusions />
      </div>
      <div className="space-y-4 rounded bg-card p-5">
        <Heading variant="h3">Free 15 minute call</Heading>
        <p className="text-muted">
          You can use this call to discuss any questions, courses, or literally
          anything! But if you have something that can be solved over text, use
          our{' '}
          <Link
            className="text-link underline"
            prefetch={false}
            href="https://discord.gg/DWAVqksVtx"
          >
            discord channel
          </Link>{' '}
          to talk to us!
        </p>
        <Button
          asChild
          size="lg"
          className="text-lg capitalize hover:scale-105"
        >
          <Link
            prefetch={false}
            href="https://cal.com/iamyhr/frontend-hire-pro-plan-free-call"
          >
            <PhoneIcon className="mr-2" /> Book a call
          </Link>
        </Button>
      </div>
    </div>
  );
}
