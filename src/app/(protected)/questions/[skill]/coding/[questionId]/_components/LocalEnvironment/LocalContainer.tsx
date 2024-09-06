import QuestionListButtonWithSheet from '@/components/Questions/QuestionListButtonWithSheet';

import { getQuestionsFromLocal } from '@/lib/fetchLocalFiles';
import { getCompletedQuestions } from '@/lib/questionStats';
import { CODING_ENVIRONMENT_TYPE, QUESTION_TYPE } from '@/types/Question';
import { notFound } from 'next/navigation';
import { Params } from '../../_types';
import {
  FILE_TYPES,
  getCodingQuestionMetadata,
  getFileData,
} from '../../_utils';
import LocalClientContainer from './LocalClientContainer';

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
    { getContent: hintsContent },
  ] = await Promise.all([
    getQuestionsFromLocal(params.skill, QUESTION_TYPE.CODING),
    getCompletedQuestions(),
    getFileData(params.questionId, params.skill, FILE_TYPES.QUESTION),
    getFileData(params.questionId, params.skill, FILE_TYPES.SOLUTION),
    getFileData(params.questionId, params.skill, FILE_TYPES.INSTRUCTIONS),
    getFileData(params.questionId, params.skill, FILE_TYPES.HINTS),
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
      hintsContent={hintsContent()}
    />
  );
}
