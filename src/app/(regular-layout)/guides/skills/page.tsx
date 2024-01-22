import CardLinkItem from '@/components/CardLinkItem';
import Heading from '@/components/Heading';
import VisuallyHidden from '@/components/ui/visually-hidden';

import ReactLogo from '@/assets/toollogos/react.png';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skill Guides | Frontend Hire',
  description: 'All the resources to be confident in a skill',
};

export default function SkillGuides() {
  return (
    <main className="flex flex-col gap-[20px] p-[10px] md:px-[100px] md:py-[20px] lg:px-[200px] xl:px-[250px]">
      <div className="flex flex-col gap-[15px] py-[10px]">
        <Heading variant="h1" className="flex gap-[20px]">
          Skill Guides
        </Heading>
        <p className="text-sm text-muted">
          All the resources to be confident in a skill
        </p>
      </div>
      <VisuallyHidden>Skill Guides List</VisuallyHidden>
      <ul className="flex flex-col gap-[20px]">
        <li>
          <CardLinkItem
            title="React Learning Guide"
            link="/guides/skills/react"
            icon={<Image src={ReactLogo} alt="" />}
          />
        </li>
      </ul>
    </main>
  );
}
