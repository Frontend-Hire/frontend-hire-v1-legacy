import CardLinkItem from '@/components/CardLinkItem';
import VisuallyHidden from '@/components/ui/visually-hidden';

import ReactLogo from '@/assets/toollogos/react.png';
import Image from 'next/image';
import { Metadata } from 'next';
import CustomHeading from '@/components/CustomHeading';

export const metadata: Metadata = {
  title: 'Skill Guides | Frontend Hire',
  description: 'All the resources to be confident in a skill',
};

export default function SkillGuides() {
  return (
    <main className="flex h-full flex-col gap-[20px] p-[10px] md:px-[100px] md:py-[20px] lg:px-[200px] xl:px-[250px]">
      <CustomHeading
        title="Skill Guides"
        subTitle="All the resources to be confident in a skill"
      />

      <VisuallyHidden>Skill Guides List</VisuallyHidden>
      <ul className="flex flex-col gap-[20px]">
        <li>
          <CardLinkItem
            type="link"
            title="React Learning Guide"
            link="/guides/skills/react"
            leftIcon={<Image src={ReactLogo} alt="" />}
          />
        </li>
      </ul>
    </main>
  );
}
