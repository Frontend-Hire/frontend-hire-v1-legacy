import { Metadata } from 'next';

import ClientContainer from './_components/ClientContainer';
import getQuestionMetaData from './_utils/getQuestionMetaData';
import { openGraphShared } from '@/app/shared-metadata';

export async function generateMetadata({
  params,
}: {
  params: { questionId: string };
}): Promise<Metadata> {
  const questionData = await getQuestionMetaData(params.questionId);
  return {
    title: `${questionData?.meta.title || 'Question'} | Frontend Hire`,
    description: questionData?.meta.description,
    openGraph: {
      ...openGraphShared,
      title: `${questionData?.meta.title || 'Question'} | Frontend Hire`,
      description: questionData?.meta.description,
    },
  };
}

export default function Question() {
  return <ClientContainer />;
}
