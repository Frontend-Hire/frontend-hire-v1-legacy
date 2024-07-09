import React from 'react';
import Container from './_components/Container';
import QuestionItemSkeleton from '@/components/QuestionItemSkeleton';
import { getMetadata } from '@/lib/getMetadata';
import CustomHeading from '@/components/CustomHeading';
import QuestionFilters from './_components/QuestionFilters';
import { capitalize } from '@/utils/text';
import { QUESTION_SKILL, QUESTION_TYPE } from '@/types/Question';

export async function generateMetadata({
  params,
}: {
  params: { skill: string };
}) {
  return getMetadata({
    title: `${capitalize(params.skill)} Coding Questions | Frontend Hire`,
    description: `${capitalize(params.skill)} Coding Questions meant for real world and interview based scenarios.`,
  });
}

export default function CodingQuestions({
  params,
}: {
  params: { skill: QUESTION_SKILL };
}) {
  return (
    <article className="flex flex-col gap-5">
      <CustomHeading
        title={`${capitalize(params.skill)} Coding Questions`}
        subTitle="Meant for real world and interview based scenarios."
      />

      <QuestionFilters />
      <React.Suspense
        fallback={
          <div className="flex flex-col gap-5">
            {Array.from({ length: 20 }).map((_, index) => (
              <QuestionItemSkeleton key={index} />
            ))}
          </div>
        }
      >
        <Container skill={params.skill} type={QUESTION_TYPE.CODING} />
      </React.Suspense>
    </article>
  );
}
