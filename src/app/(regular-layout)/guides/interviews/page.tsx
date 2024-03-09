import CardLinkItem from '@/components/CardLinkItem';
import VisuallyHidden from '@/components/ui/visually-hidden';

import { Metadata } from 'next';
import CustomHeading from '@/components/CustomHeading';
import { UserCheckIcon, UserCogIcon, UserSquareIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Interview Guides | Frontend Hire',
  description: 'Good Interview Practices for both Interviewer and Candidate',
  openGraph: {
    title: 'Interview Guides | Frontend Hire',
    description: 'Good Interview Practices for both Interviewer and Candidate',
  },
};

export default function SkillGuides() {
  return (
    <article className="flex flex-col gap-[20px]">
      <CustomHeading
        title="Interview Guides"
        subTitle="Good Interview Practices for both Interviewer and Candidate"
        icon={<UserSquareIcon size={60} />}
      />

      <VisuallyHidden>Skill Guides List</VisuallyHidden>
      <ul className="flex flex-col gap-[20px]">
        <li>
          <CardLinkItem
            type="link"
            title="Candidate"
            link="/guides/interviews/candidate"
            leftIcon={<UserCheckIcon size={40} />}
          />
        </li>
        <li>
          <CardLinkItem
            type="link"
            title="Interviewer"
            link="/guides/interviews/interviewer"
            leftIcon={<UserCogIcon size={40} />}
          />
        </li>
      </ul>
    </article>
  );
}
