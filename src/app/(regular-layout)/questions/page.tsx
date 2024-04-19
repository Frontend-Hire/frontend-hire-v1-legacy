import { Metadata } from 'next';
import Container from './_components/Container';
import { Suspense } from 'react';
import QuestionItemSkeleton from '@/components/QuestionItemSkeleton';
import CustomHeading from '@/components/CustomHeading';
import { openGraphShared } from '@/app/shared-metadata';
import QuestionFilters from './_components/QuestionFilters';

export const metadata: Metadata = {
  title: 'Questions | Frontend Hire',
  description: 'Questions meant for real world and interview based scenarios.',
  openGraph: {
    ...openGraphShared,
    title: 'Questions | Frontend Hire',
    description:
      'Questions meant for real world and interview based scenarios.',
  },
};

export default function Questions() {
  return (
    <article className="flex flex-col gap-5">
      <CustomHeading
        title="Questions"
        subTitle="Meant for real world and interview based scenarios."
      />

      <QuestionFilters />
      <Suspense
        fallback={
          <div className="flex flex-col gap-5">
            {Array.from({ length: 20 }).map((_, index) => (
              <QuestionItemSkeleton key={index} />
            ))}
          </div>
        }
      >
        <Container />
      </Suspense>
    </article>
  );
}
