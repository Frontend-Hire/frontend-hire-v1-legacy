import CardLinkItem from '@/components/CardLinkItem';
import CustomHeading from '@/components/CustomHeading';
import { Badge } from '@/components/ui/badge';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { ChevronRightIcon, PhoneCallIcon, UserIcon } from 'lucide-react';
import { getMetadata } from '@/lib/getMetadata';

export const metadata = getMetadata({
  title: 'Interviews | Frontend Hire',
  description: 'Simulated and Real Interviews for Frontend Developers',
  canonical: '/interviews',
});

export default async function Projects() {
  return (
    <article className="flex flex-col gap-4">
      <CustomHeading
        title="Interviews"
        subTitle="Simulated and Real Interviews for anytime practice"
      />

      <VisuallyHidden>Interview Types</VisuallyHidden>
      <ul className="flex flex-col gap-4">
        <li>
          <CardLinkItem
            type="link"
            title="Mock In-Person Interview"
            link="/interviews/mock-personal-interview"
            leftIcon={<UserIcon size={40} />}
            rightIcon={<ChevronRightIcon size={40} />}
          />
        </li>
        <li>
          <CardLinkItem
            type="link"
            title="Simulated Phone Screening"
            link="/interviews/simulated-phone-screening"
            leftIcon={<PhoneCallIcon size={40} />}
            rightIcon={<ChevronRightIcon size={40} />}
          />
        </li>
      </ul>
    </article>
  );
}
