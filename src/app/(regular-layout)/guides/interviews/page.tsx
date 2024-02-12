import CardLinkItem from '@/components/CardLinkItem';
import VisuallyHidden from '@/components/ui/visually-hidden';

import { Metadata } from 'next';
import CustomHeading from '@/components/CustomHeading';
import { HandHeartIcon, UserCheckIcon, UserSquareIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Interview Guides | Frontend Hire',
  description: 'Good Interview Practices for both Interviewer and Candidate',
};

export default function SkillGuides() {
  return (
    <main className="flex h-full flex-col gap-[20px] p-[10px] md:px-[100px] md:py-[20px] lg:px-[200px] xl:px-[250px]">
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
            title="Candidate Interview Guide"
            link="/guides/interviews/candidate"
            leftIcon={<UserCheckIcon size={40} />}
          />
        </li>
        <li>
          <CardLinkItem
            type="link"
            title="Interviewer Interview Guide"
            link="/guides/interviews/interviewer"
            leftIcon={<HandHeartIcon size={40} />}
          />
        </li>
      </ul>
    </main>
  );
}
