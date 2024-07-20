import QuestionListButtonWithSheet from '@/components/Questions/QuestionListButtonWithSheet';

import { getQuestionsFromLocal } from '@/lib/fetchLocalFiles';
import { getCompletedQuestions } from '@/lib/questionStats';
import { CODING_ENVIRONMENT_TYPE, QUESTION_TYPE } from '@/types/Question';
import { notFound } from 'next/navigation';
import { Params } from '../../_types';
import {
  getCodingQuestion,
  getCodingQuestionInstructions,
  getCodingQuestionMetadata,
  getCodingQuestionSolution,
} from '../../_utils';
import LocalClientContainer from './LocalClientContainer';
import LocalInstructions from './LocalInstructions';

export default async function LocalContainer({ params }: Params) {
  const { meta } = await getCodingQuestionMetadata(
    params.questionId,
    params.skill,
  );

  if (
    !meta ||
    meta.type !== QUESTION_TYPE.CODING ||
    meta.environment !== CODING_ENVIRONMENT_TYPE.LOCAL
  ) {
    notFound();
  }

  const [
    questions,
    completedQuestions,
    { getContent: questionContent },
    { getContent: solutionContent },
    { getContent: instructionsContent },
  ] = await Promise.all([
    getQuestionsFromLocal(params.skill, QUESTION_TYPE.CODING),
    getCompletedQuestions(),
    getCodingQuestion(params.questionId, params.skill),
    getCodingQuestionSolution(params.questionId, params.skill),
    getCodingQuestionInstructions(params.questionId, params.skill),
  ]);

  return (
    <LocalClientContainer
      questionsListButtonWithSheet={
        <QuestionListButtonWithSheet
          questions={questions}
          serverCompletedQuestions={completedQuestions}
          skill={params.skill}
          type={QUESTION_TYPE.CODING}
        />
      }
      questionMeta={meta}
      questionContent={questionContent()}
      solutionContent={solutionContent()}
      instructionsContent={instructionsContent()}
    />
  );
}
