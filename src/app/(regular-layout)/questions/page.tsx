import { Metadata } from 'next';
import Heading from '@/components/Heading';
import Container from './_components/Container';
import { Suspense } from 'react';
import QuestionItemSkeleton from '@/components/QuestionItemSkeleton';

export const metadata: Metadata = {
  title: 'Questions | Frontend Hire',
  description: 'Real World And Interview Based Questions',
};

export default function Questions() {
  return (
    <main className="flex flex-col gap-[20px] p-[10px] md:px-[100px] md:py-[20px] lg:px-[200px] xl:px-[250px]">
      <div className="flex flex-col gap-[15px] py-[10px]">
        <Heading variant="h1">Questions</Heading>
        <p className="text-sm text-muted">Real World And Interview Based</p>
      </div>
      <Suspense
        fallback={
          <div className="flex flex-col gap-[20px]">
            <QuestionItemSkeleton />
            <QuestionItemSkeleton />
            <QuestionItemSkeleton />
            <QuestionItemSkeleton />
          </div>
        }
      >
        <Container />
      </Suspense>
    </main>
  );
}
