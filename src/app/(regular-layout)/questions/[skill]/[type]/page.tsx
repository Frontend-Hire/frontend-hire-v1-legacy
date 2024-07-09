import React from 'react';
import Container from './_components/Container';
import QuestionItemSkeleton from '@/components/QuestionItemSkeleton';
import { getMetadata } from '@/lib/getMetadata';
import CustomHeading from '@/components/CustomHeading';
import QuestionFilters from './_components/QuestionFilters';
import { capitalize } from '@/utils/text';
import { QUESTION_SKILL, QUESTION_TYPE } from '@/types/Question';
import { redirect } from 'next/navigation';

type Params = {
  params: { skill: QUESTION_SKILL; type: QUESTION_TYPE };
};

const areParamsValid = (skill: QUESTION_SKILL, type: QUESTION_TYPE) => {
  if (!skill || !type) {
    return false;
  }

  if (!Object.values(QUESTION_SKILL).includes(skill)) {
    return false;
  }

  if (!Object.values(QUESTION_TYPE).includes(type)) {
    return false;
  }

  return true;
};

export async function generateMetadata({ params }: Params) {
  return getMetadata({
    title: `${capitalize(params.skill)} ${capitalize(params.type)} Questions | Frontend Hire`,
    description: `${capitalize(params.skill)} ${capitalize(params.type)} Questions meant for real world and interview based scenarios.`,
  });
}

export default function QuestionTypePage({ params }: Params) {
  if (!areParamsValid(params.skill, params.type)) {
    redirect('/questions');
  }

  return (
    <article className="flex flex-col gap-5">
      <CustomHeading
        title={`${capitalize(params.skill)} ${capitalize(params.type)} Questions`}
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
        <Container skill={params.skill} type={params.type} />
      </React.Suspense>
    </article>
  );
}
