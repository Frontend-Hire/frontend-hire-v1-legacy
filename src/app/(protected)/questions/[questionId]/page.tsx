import * as React from 'react';

import ClientContainer from './_components/ClientContainer';
import getQuestion from './_utils/getQuestion';

export async function generateMetadata({
  params,
}: {
  params: { questionId: string };
}) {
  const questionData = await getQuestion(params.questionId);
  return {
    title: `${questionData?.meta.title || 'Frontend Hire'}`,
  };
}

export default async function Question({
  params,
}: {
  params: { questionId: string };
}) {
  const questionData = await getQuestion(params.questionId);

  return <ClientContainer questionData={questionData!} />;
}
