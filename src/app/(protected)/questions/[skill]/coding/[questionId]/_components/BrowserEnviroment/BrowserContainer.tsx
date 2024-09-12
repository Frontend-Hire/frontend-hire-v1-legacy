import QuestionListButtonWithSheet from '@/components/Questions/QuestionListButtonWithSheet';
import BrowserClientContainer from './BrowserClientContainer';
import { CODING_ENVIRONMENT_TYPE, QUESTION_TYPE } from '@/types/Question';
import { Params } from '../../_types';
import getSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import {
  FILE_TYPES,
  getCodeHistoryQuery,
  getCodingQuestionMetadata,
  getFileData,
} from '../../_utils';
import { getQuestionsFromLocal } from '@/lib/fetchLocalFiles';
import { getCompletedQuestions } from '@/lib/questionStats';
import { notFound } from 'next/navigation';

export default async function BrowserContainer({ params }: Params) {
  const supabaseClient = getSupabaseServerClient();
  const { meta } = await getCodingQuestionMetadata(
    params.questionId,
    params.skill,
  );

  if (
    !meta ||
    meta.type !== QUESTION_TYPE.CODING ||
    meta.environment !== CODING_ENVIRONMENT_TYPE.BROWSER
  ) {
    notFound();
  }

  const [
    questions,
    completedQuestions,
    { getContent: questionContent },
    { getContent: solutionContent },
    { getContent: hintsContent },
    { getContent: instructionsContent },
    { data: codeHistory },
  ] = await Promise.all([
    getQuestionsFromLocal(params.skill, QUESTION_TYPE.CODING),
    getCompletedQuestions(),
    getFileData(params.questionId, params.skill, FILE_TYPES.QUESTION),
    getFileData(params.questionId, params.skill, FILE_TYPES.SOLUTION),
    getFileData(params.questionId, params.skill, FILE_TYPES.HINTS),
    getFileData(params.questionId, params.skill, FILE_TYPES.INSTRUCTIONS),
    getCodeHistoryQuery(
      supabaseClient,
      `${params.skill.toLowerCase()}-${params.questionId.toLowerCase()}`,
    ),
  ]);

  const originalFiles = structuredClone(meta.files);
  const updatedFiles = structuredClone(meta.files);

  if (codeHistory) {
    codeHistory.code_history_files.forEach((file) => {
      updatedFiles[file.file_name] = file.code;
    });
  }

  return (
    <BrowserClientContainer
      questionsListButtonWithSheet={
        <QuestionListButtonWithSheet
          questions={questions}
          serverCompletedQuestions={completedQuestions}
          skill={params.skill}
          type={QUESTION_TYPE.CODING}
        />
      }
      questionMeta={meta}
      originalFiles={originalFiles}
      updatedFiles={updatedFiles}
      questionContent={questionContent()}
      solutionContent={solutionContent()}
      instructionsContent={instructionsContent()}
      hintsContent={hintsContent()}
    />
  );
}
