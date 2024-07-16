import ProtectedLayout from '@/components/ProtectedLayout';
import PremiumProtectedContentLayout from '@/components/PremiumProtectedContentLayout';
import { getMetadata } from '@/lib/getMetadata';
import { getTheoryQuestionMetadata } from './_utils';
import { QUESTION_SKILL, QUESTION_TYPE } from '@/types/Question';
import { notFound } from 'next/navigation';
import Container from './_components/Container';

type Params = {
  params: { questionId: string; skill: QUESTION_SKILL };
};

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

  return (
    <ProtectedLayout>
      {meta.isFree ? (
        <Container />
      ) : (
        <PremiumProtectedContentLayout>
          <Container />
        </PremiumProtectedContentLayout>
      )}
    </ProtectedLayout>
  );
}
