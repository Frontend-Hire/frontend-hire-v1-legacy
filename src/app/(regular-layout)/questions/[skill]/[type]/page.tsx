import CustomHeading from '@/components/CustomHeading';
import QuestionItemSkeleton from '@/components/Questions/QuestionItemSkeleton';
import QuestionFilters from '@/components/Questions/QuestionsFilter';
import { getMetadata } from '@/lib/getMetadata';
import { QuestionSkill, QuestionType } from '@/types/Question';
import { getSkill } from '@/utils/skill';
import { capitalize } from '@/utils/text';
import { redirect } from 'next/navigation';
import React from 'react';
import Container from './_components/Container';

type Params = {
  params: { skill: QuestionSkill; type: QuestionType };
};

const areParamsValid = (skill: QuestionSkill, type: QuestionType) => {
  if (!skill || !type) {
    return false;
  }

  return true;
};

export async function generateMetadata({ params }: Params) {
  return getMetadata({
    title: `${getSkill(params.skill)} ${capitalize(params.type)} Questions | Frontend Hire`,
    description: `${getSkill(params.skill)} ${capitalize(params.type)} Questions meant for real world and interview based scenarios.`,
    canonical: `/questions/${params.skill}/${params.type}`,
  });
}

export default function QuestionTypePage({ params }: Params) {
  if (!areParamsValid(params.skill, params.type)) {
    redirect('/questions');
  }

  return (
    <article className="flex flex-col gap-5">
      <CustomHeading
        title={`${getSkill(params.skill)} ${capitalize(params.type)} Questions`}
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
