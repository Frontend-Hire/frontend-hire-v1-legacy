import CardLinkItem from '@/components/CardLinkItem';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { openGraphShared } from '@/app/shared-metadata';
import ReactLogo from '@/assets/toollogos/react.webp';
import Image from 'next/image';
import { Metadata } from 'next';
import CustomHeading from '@/components/CustomHeading';
import { GraduationCapIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Skill Guides | Frontend Hire',
  description: 'All the resources to be confident in a skill',
  openGraph: {
    ...openGraphShared,
    title: 'Skill Guides | Frontend Hire',
    description: 'All the resources to be confident in a skill',
  },
};

export default function SkillGuides() {
  return (
    <article className="flex flex-col gap-4">
      <CustomHeading
        title="Skill Guides"
        subTitle="All the resources to be confident in a skill"
        icon={<GraduationCapIcon size={60} />}
      />

      <VisuallyHidden>Skill Guides List</VisuallyHidden>
      <ul className="flex flex-col gap-4">
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
