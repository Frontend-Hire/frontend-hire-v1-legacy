import ClientContainer from './_components/ClientContainer';
import getQuestionMetaData from './_utils/getQuestionMetaData';
import ProtectedLayout from '@/components/ProtectedLayout';
import PremiumProtectedContentLayout from '@/components/PremiumProtectedContentLayout';
import { getMetadata } from '@/lib/getMetadata';

export async function generateMetadata({
  params,
}: {
  params: { questionId: string };
}) {
  const questionData = await getQuestionMetaData(params.questionId);

  return getMetadata({
    title: `${questionData?.meta.title || 'Question'} | Frontend Hire`,
    description: questionData?.meta.description,
  });
}

export default async function Question({
  params,
}: {
  params: { questionId: string };
}) {
  const questionData = await getQuestionMetaData(params.questionId);

  return (
    <ProtectedLayout>
      {questionData?.meta.isFree ? (
        <ClientContainer />
      ) : (
        <PremiumProtectedContentLayout>
          <ClientContainer />
        </PremiumProtectedContentLayout>
      )}
    </ProtectedLayout>
  );
}
