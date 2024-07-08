import React from 'react';
import Container from './_components/Container';
import QuestionItemSkeleton from '@/components/QuestionItemSkeleton';
import { getMetadata } from '@/lib/getMetadata';

export const metadata = getMetadata({
  title: 'Questions | Frontend Hire',
  description: 'Questions meant for real world and interview based scenarios.',
});

export default function Questions() {
  return (
    <React.Suspense
      fallback={
        <div className="flex flex-col gap-5">
          {Array.from({ length: 20 }).map((_, index) => (
            <QuestionItemSkeleton key={index} />
          ))}
        </div>
      }
    >
      <Container />
    </React.Suspense>
  );
}
