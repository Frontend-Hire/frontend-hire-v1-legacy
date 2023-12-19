import Heading from '@/components/Heading';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Questions | Frontend Hire',
  description: 'Real World And Interview Based Questions',
};

export default async function Guides() {
  return (
    <main className="flex flex-col gap-[20px] p-[10px] md:px-[100px] md:py-[20px] lg:px-[200px] xl:px-[250px]">
      <div className="flex flex-col gap-[15px] py-[10px]">
        <Heading variant="h1">Guides</Heading>
        <p className="text-sm text-muted">
          All the guides you&apos;d ever need
        </p>
      </div>
      <VisuallyHidden>Guides List</VisuallyHidden>
    </main>
  );
}
