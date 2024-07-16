import ProtectedLayout from '@/components/ProtectedLayout';
import PremiumProtectedContentLayout from '@/components/PremiumProtectedContentLayout';
import { getMetadata } from '@/lib/getMetadata';
import { getTheoryQuestion, getTheoryQuestionMetadata } from './_utils';
import { QUESTION_TYPE } from '@/types/Question';
import { notFound } from 'next/navigation';
import Container from './_components/Container';
import { getQuestionsFromLocal } from '@/lib/fetchLocalFiles';
import { getCompletedQuestions } from '@/lib/questionStats';
import QuestionListButtonWithSheet from '@/components/Questions/QuestionListButtonWithSheet';
import { Params } from './_types';

export async function generateMetadata({ params }: Params) {
  const { meta } = await getTheoryQuestionMetadata(
    params.questionId,
    params.skill,
  );

  return getMetadata({
    title: `${meta?.title || 'Question'} | Frontend Hire`,
    description: meta?.description,
  });
}

export default async function CodingQuestion({ params }: Params) {
  const { meta } = await getTheoryQuestionMetadata(
    params.questionId,
    params.skill,
  );

  if (!meta || meta.type !== QUESTION_TYPE.THEORY) {
    notFound();
  }

  const [questions, completedQuestions, { getContent: questionContent }] =
    await Promise.all([
      getQuestionsFromLocal(params.skill, QUESTION_TYPE.THEORY),
      getCompletedQuestions(),
      getTheoryQuestion(params.questionId, params.skill),
    ]);

  return (
    <ProtectedLayout>
      {meta.isFree ? (
        <Container
          questionsListButtonWithSheet={
            <QuestionListButtonWithSheet
              questions={questions}
              serverCompletedQuestions={completedQuestions}
              skill={params.skill}
              type={QUESTION_TYPE.THEORY}
            />
          }
          questionMeta={meta}
          questionContent={questionContent()}
        />
      ) : (
        <PremiumProtectedContentLayout>
          <Container
            questionsListButtonWithSheet={
              <QuestionListButtonWithSheet
                questions={questions}
                serverCompletedQuestions={completedQuestions}
                skill={params.skill}
                type={QUESTION_TYPE.THEORY}
              />
            }
            questionMeta={meta}
            questionContent={questionContent()}
          />
        </PremiumProtectedContentLayout>
      )}
    </ProtectedLayout>
  );
}
