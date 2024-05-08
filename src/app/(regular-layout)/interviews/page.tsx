import CardLinkItem from '@/components/CardLinkItem';
import CustomHeading from '@/components/CustomHeading';
import { Badge } from '@/components/ui/badge';
import VisuallyHidden from '@/components/ui/visually-hidden';
import {
  ChevronRightIcon,
  LaptopIcon,
  PhoneCallIcon,
  UserIcon,
} from 'lucide-react';
import { openGraphShared } from '@/app/shared-metadata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interviews | Frontend Hire',
  description: 'Simulated and Real Interviews for Frontend Developers',
  openGraph: {
    ...openGraphShared,
    title: 'Interviews | Frontend Hire',
    description: 'Simulated and Real Interviews for Frontend Developers',
  },
};

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
            title="Simulated Phone Screening"
            link="/interviews/simulated-phone-screening"
            leftIcon={<PhoneCallIcon size={40} />}
            rightIcon={<ChevronRightIcon size={40} />}
          />
        </li>
        <li>
          <CardLinkItem
            type="link"
            title={
              <>
                Mock In-Person Interview{' '}
                <Badge className="text-center">20% Off</Badge>
              </>
            }
            link="/interviews/mock-personal-interview"
            leftIcon={<UserIcon size={40} />}
            rightIcon={<ChevronRightIcon size={40} />}
          />
        </li>
        {/* <li>
          <CardLinkItem
            type="comingSoon"
            title="Online Assessment"
            leftIcon={<LaptopIcon size={40} />}
          />
        </li> */}
      </ul>
    </article>
  );
}
