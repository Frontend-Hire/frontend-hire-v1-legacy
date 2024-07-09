import ClientContainer from './_components/ClientContainer';
import ProtectedLayout from '@/components/ProtectedLayout';
import PremiumProtectedContentLayout from '@/components/PremiumProtectedContentLayout';
import { getMetadata } from '@/lib/getMetadata';
import {
  getCodingQuestion,
  getCodingQuestionSolution,
  getQuestionMetadata,
} from './_utils';
import { QUESTION_SKILL, QUESTION_TYPE } from '@/types/Question';
import { notFound } from 'next/navigation';

type Params = {
  params: { questionId: string; skill: QUESTION_SKILL };
};

export async function generateMetadata({ params }: Params) {
  const { meta } = await getQuestionMetadata(
    params.questionId,
    params.skill,
    QUESTION_TYPE.CODING,
  );

  return getMetadata({
    title: `${meta?.title || 'Question'} | Frontend Hire`,
    description: meta?.description,
  });
}

export default async function CodingQuestion({ params }: Params) {
  const { meta } = await getQuestionMetadata(
    params.questionId,
    params.skill,
    QUESTION_TYPE.CODING,
  );

  if (!meta || meta.type !== QUESTION_TYPE.CODING) {
    notFound();
  }

  const [{ getContent: questionContent }, { getContent: solutionContent }] =
    await Promise.all([
      getCodingQuestion(params.questionId, params.skill),
      getCodingQuestionSolution(params.questionId, params.skill),
    ]);

  return (
    <ProtectedLayout>
      {meta.isFree ? (
        <ClientContainer
          questionMeta={meta}
          questionContent={questionContent()}
          solutionContent={solutionContent()}
        />
      ) : (
        <PremiumProtectedContentLayout>
          <ClientContainer
            questionMeta={meta}
            questionContent={questionContent()}
            solutionContent={solutionContent()}
          />
        </PremiumProtectedContentLayout>
      )}
    </ProtectedLayout>
  );
}
