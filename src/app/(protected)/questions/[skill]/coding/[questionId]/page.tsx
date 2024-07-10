import ClientContainer from './_components/ClientContainer';
import ProtectedLayout from '@/components/ProtectedLayout';
import PremiumProtectedContentLayout from '@/components/PremiumProtectedContentLayout';
import { getMetadata } from '@/lib/getMetadata';
import {
  getCodingQuestion,
  getCodingQuestionSolution,
  getCodingQuestionMetadata,
  getCodeHistoryQuery,
} from './_utils';
import { QUESTION_TYPE } from '@/types/Question';
import { notFound } from 'next/navigation';
import { Params } from './_types';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';

export async function generateMetadata({ params }: Params) {
  const { meta } = await getCodingQuestionMetadata(
    params.questionId,
    params.skill,
  );

  return getMetadata({
    title: `${meta?.title || 'Question'} | Frontend Hire`,
    description: meta?.description,
  });
}

export default async function CodingQuestion({ params }: Params) {
  const supabaseClient = createSupabaseServerClient();
  const { meta } = await getCodingQuestionMetadata(
    params.questionId,
    params.skill,
  );

  if (!meta || meta.type !== QUESTION_TYPE.CODING) {
    notFound();
  }

  const [
    { getContent: questionContent },
    { getContent: solutionContent },
    { data: codeHistory },
  ] = await Promise.all([
    getCodingQuestion(params.questionId, params.skill),
    getCodingQuestionSolution(params.questionId, params.skill),
    getCodeHistoryQuery(
      supabaseClient,
      `${params.skill.toLowerCase()}-${params.questionId}`,
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
    <ProtectedLayout>
      {meta.isFree ? (
        <ClientContainer
          questionMeta={meta}
          originalFiles={originalFiles}
          updatedFiles={updatedFiles}
          questionContent={questionContent()}
          solutionContent={solutionContent()}
        />
      ) : (
        <PremiumProtectedContentLayout>
          <ClientContainer
            questionMeta={meta}
            originalFiles={originalFiles}
            updatedFiles={updatedFiles}
            questionContent={questionContent()}
            solutionContent={solutionContent()}
          />
        </PremiumProtectedContentLayout>
      )}
    </ProtectedLayout>
  );
}
