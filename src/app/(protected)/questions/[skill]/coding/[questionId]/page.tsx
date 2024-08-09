import PremiumProtectedContentLayout from '@/components/PremiumProtectedContentLayout';
import ProtectedLayout from '@/components/ProtectedLayout';
import { getMetadata } from '@/lib/getMetadata';
import { CODING_ENVIRONMENT_TYPE, QUESTION_TYPE } from '@/types/Question';
import { notFound } from 'next/navigation';
import BrowserContainer from './_components/BrowserEnviroment/BrowserContainer';
import LocalContainer from './_components/LocalEnvironment/LocalContainer';
import { Params } from './_types';
import { getCodingQuestionMetadata } from './_utils';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: Params) {
  const { meta } = await getCodingQuestionMetadata(
    params.questionId,
    params.skill,
  );

  return getMetadata({
    title: `${meta?.title || 'Question'} | Frontend Hire`,
    description: meta?.description,
    canonical: `/questions/${params.skill}/coding/${params.questionId}`,
  });
}

export default async function CodingQuestion({ params }: Params) {
  const { meta } = await getCodingQuestionMetadata(
    params.questionId,
    params.skill,
  );

  if (!meta || meta.type !== QUESTION_TYPE.CODING) {
    notFound();
  }

  const container =
    meta.environment === CODING_ENVIRONMENT_TYPE.BROWSER ? (
      <BrowserContainer params={params} />
    ) : (
      <LocalContainer params={params} />
    );

  return (
    <ProtectedLayout>
      {meta.isFree ? (
        <>{container}</>
      ) : (
        <PremiumProtectedContentLayout>
          {container}
        </PremiumProtectedContentLayout>
      )}
    </ProtectedLayout>
  );
}
