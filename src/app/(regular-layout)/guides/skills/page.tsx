import CardLinkItem from '@/components/CardLinkItem';
import VisuallyHidden from '@/components/ui/visually-hidden';

import ReactLogo from '@/assets/toollogos/react.png';
import Image from 'next/image';
import { Metadata } from 'next';
import CustomHeading from '@/components/CustomHeading';
import { GraduationCapIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Skill Guides | Frontend Hire',
  description: 'All the resources to be confident in a skill',
  openGraph: {
    title: 'Skill Guides | Frontend Hire',
    description: 'All the resources to be confident in a skill',
  },
};

export default function SkillGuides() {
  return (
    <article className="flex flex-col gap-[20px]">
      <CustomHeading
        title="Skill Guides"
        subTitle="All the resources to be confident in a skill"
        icon={<GraduationCapIcon size={60} />}
      />

      <VisuallyHidden>Skill Guides List</VisuallyHidden>
      <ul className="flex flex-col gap-[20px]">
        <li>
          <CardLinkItem
            type="link"
            title="Learning React"
            link="/guides/skills/react"
            leftIcon={<Image src={ReactLogo} alt="" />}
          />
        </li>
      </ul>
    </article>
  );
}
