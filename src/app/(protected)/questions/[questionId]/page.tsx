import { Metadata } from 'next';

import ClientContainer from './_components/ClientContainer';
import getQuestion from './_utils/getQuestion';

export async function generateMetadata({
  params,
}: {
  params: { questionId: string };
}): Promise<Metadata> {
  const questionData = await getQuestion(params.questionId);
  return {
    title: `${questionData?.meta.title || 'Question'} | Frontend Hire`,
    description: questionData?.meta.description,
    openGraph: {
      title: `${questionData?.meta.title || 'Question'} | Frontend Hire`,
      description: questionData?.meta.description,
    },
  };
}

export default async function Question() {
  return <ClientContainer />;
}
