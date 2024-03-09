import CardLinkItem from '@/components/CardLinkItem';
import CustomHeading from '@/components/CustomHeading';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { GraduationCapIcon, UserSquareIcon } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guides | Frontend Hire',
  description: "All the guides you'd ever need",
  openGraph: {
    title: 'Guides | Frontend Hire',
    description: "All the guides you'd ever need",
  },
};

export default async function Guides() {
  return (
    <article className="flex flex-col gap-[20px]">
      <CustomHeading title="Guides" subTitle="All the guides you'd ever need" />

      <VisuallyHidden>Guides List</VisuallyHidden>
      <ul className="flex flex-col gap-[20px]">
        <li>
          <CardLinkItem
            type="link"
            title="Skills"
            link="/guides/skills"
            leftIcon={<GraduationCapIcon size={40} />}
          />
        </li>
        <li>
          <CardLinkItem
            type="link"
            title="Interviews"
            link="/guides/interviews"
            leftIcon={<UserSquareIcon size={40} />}
          />
        </li>
      </ul>
    </article>
  );
}
