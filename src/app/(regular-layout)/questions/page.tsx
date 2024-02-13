import { Metadata } from 'next';
import Container from './_components/Container';
import { Suspense } from 'react';
import QuestionItemSkeleton from '@/components/QuestionItemSkeleton';
import CustomHeading from '@/components/CustomHeading';

export const metadata: Metadata = {
  title: 'Questions | Frontend Hire',
  description: 'Real World And Interview Based Questions',
  openGraph: {
    title: 'Questions | Frontend Hire',
    description: 'Real World And Interview Based Questions',
    url: 'https://frontendhire.com/questions',
  },
};

export default function Questions() {
  return (
    <main className="flex flex-col gap-[20px] p-[10px] md:px-[100px] md:py-[20px] lg:px-[200px] xl:px-[250px]">
      <CustomHeading
        title="Questions"
        subTitle="Real World And Interview Based"
      />

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
