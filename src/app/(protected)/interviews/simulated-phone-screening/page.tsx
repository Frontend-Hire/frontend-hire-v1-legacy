import CardLinkItem from '@/components/CardLinkItem';
import Heading from '@/components/Heading';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { PhoneCallIcon } from 'lucide-react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Simulated Phone Screening | Frontend Hire',
  description: 'Simulated and Real Interviews for Frontend Developers',
};

export default async function Projects() {
  return (
    <main className="flex flex-col gap-[20px] p-[10px] md:px-[100px] md:py-[20px] lg:px-[200px] xl:px-[250px]">
      <div className="flex flex-col gap-[15px] py-[10px]">
        <Heading variant="h1">Simulated Phone Screening</Heading>
        <p className="text-sm text-muted">
          One of the first rounds, so first impression should be great
        </p>
      </div>
    </main>
  );
}
