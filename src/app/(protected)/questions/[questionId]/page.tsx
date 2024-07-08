import ClientContainer from './_components/ClientContainer';
import ProtectedLayout from '@/components/ProtectedLayout';
import PremiumProtectedContentLayout from '@/components/PremiumProtectedContentLayout';
import { getMetadata } from '@/lib/getMetadata';
import {
  getQuestion,
  getQuestionMetadata,
  getQuestionSolution,
} from './_utils';

export async function generateMetadata({
  params,
}: {
  params: { questionId: string };
}) {
  const { meta } = await getQuestionMetadata(params.questionId);

  return getMetadata({
    title: `${meta.title || 'Question'} | Frontend Hire`,
    description: meta.description,
  });
}

export default async function Question({
  params,
}: {
  params: { questionId: string };
}) {
  const { meta } = await getQuestionMetadata(params.questionId);
  const { getContent: questionContent } = await getQuestion(params.questionId);
  const { getContent: solutionContent } = await getQuestionSolution(
    params.questionId,
  );

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
