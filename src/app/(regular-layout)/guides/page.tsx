import CardLinkItem from '@/components/CardLinkItem';
import CustomHeading from '@/components/CustomHeading';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { GraduationCapIcon, UserSquareIcon } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guides | Frontend Hire',
  description: "All the guides you'd ever need",
};

export default async function Guides() {
  return (
    <main className="flex h-full flex-col gap-[20px] p-[10px] md:px-[100px] md:py-[20px] lg:px-[200px] xl:px-[250px]">
      <CustomHeading title="Guides" subTitle="All the guides you'd ever need" />

      <VisuallyHidden>Guides List</VisuallyHidden>
      <ul className="flex flex-col gap-[20px]">
        <li>
          <CardLinkItem
            type="link"
            title="Skill Guides"
            link="/guides/skills"
            leftIcon={<GraduationCapIcon size={40} />}
          />
        </li>
        <li>
          <CardLinkItem
            type="link"
            title="Interview Guides"
            link="/guides/interviews"
            leftIcon={<UserSquareIcon size={40} />}
          />
        </li>
      </ul>
    </main>
  );
}
