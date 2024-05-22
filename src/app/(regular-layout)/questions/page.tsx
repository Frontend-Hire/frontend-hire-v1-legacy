import { Metadata } from 'next';
import Container from './_components/Container';
import { Suspense } from 'react';
import QuestionItemSkeleton from '@/components/QuestionItemSkeleton';
import { openGraphShared } from '@/app/shared-metadata';

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
  );
}
