import { openGraphShared } from '@/app/shared-metadata';
import CustomHeading from '@/components/CustomHeading';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Frontend Hire',
  description: 'Our write-ups on everything in the frontend world.',
  openGraph: {
    ...openGraphShared,
    title: 'Blog | Frontend Hire',
    description: 'Our write-ups on everything in the frontend world.',
  },
};

export default async function Blog() {
  return (
    <article className="flex flex-col gap-4">
      <CustomHeading
        title="Blog"
        subTitle="Our write-ups on everything in the frontend world."
      />

      <VisuallyHidden>All blog posts</VisuallyHidden>
      <ul className="flex flex-col gap-4">
        <li></li>
      </ul>
    </article>
  );
}
