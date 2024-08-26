import Heading from '@/components/Heading';
import InclusionsExclusions from '@/components/InclusionsExclusions';
import { Button } from '@/components/ui/button';
import { PhoneIcon } from 'lucide-react';
import Link from 'next/link';

export default function Benefits() {
  return (
    <div className="flex w-fit flex-col space-y-4 rounded bg-card p-10">
      <Heading variant="h2">Here are your benefits</Heading>
      <InclusionsExclusions />
    </div>
  );
}
