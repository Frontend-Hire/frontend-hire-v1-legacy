import HeaderSkeleton from '@/components/HeaderSkeleton';
import PrimaryLayout from './_layout/PrimaryLayout';
import QuestionLayoutSkeleton from '@/components/QuestionLayoutSkeleton';

export default function Loading() {
  return (
    <PrimaryLayout header={<HeaderSkeleton />}>
      <QuestionLayoutSkeleton />
    </PrimaryLayout>
  );
}
