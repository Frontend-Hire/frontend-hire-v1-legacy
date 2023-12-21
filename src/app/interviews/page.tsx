import CardLinkItem from '@/components/CardLinkItem';
import Heading from '@/components/Heading';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { PhoneCallIcon } from 'lucide-react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interviews | Frontend Hire',
  description: 'Simulated and Real Interviews for Frontend Developers',
};

export default async function Projects() {
  return (
    <main className="flex flex-col gap-[20px] p-[10px] md:px-[100px] md:py-[20px] lg:px-[200px] xl:px-[250px]">
      <div className="flex flex-col gap-[15px] py-[10px]">
        <Heading variant="h1">Interviews</Heading>
        <p className="text-sm text-muted">
          Simulated and Real Interviews for anytime practice
        </p>
      </div>
      <VisuallyHidden>Interview Types</VisuallyHidden>
      <ul className="flex flex-col gap-[20px]">
        <li>
          <CardLinkItem
            title="Simulated Phone Screening"
            link="/interviews/simulated-phone-screening"
            icon={<PhoneCallIcon size={40} />}
          />
        </li>
      </ul>
    </main>
  );
}
