import { getCohortPage, getCohortPages } from '@/lib/fetchLocalFiles';
import PremiumProtectedContentLayout from '@/components/PremiumProtectedContentLayout';
import ProtectedLayout from '@/components/ProtectedLayout';
import ContentArticleLayout from '@/components/ContentArticleLayout';
import { getMetadata } from '@/lib/getMetadata';

type ChapterPageProps = {
  params: {
    chapter: string;
    cohortId: string;
  };
};

export async function generateMetadata({ params }: ChapterPageProps) {
  const meta = await getCohortPages(params.cohortId);

  return getMetadata({
    title: `${meta?.title || 'Cohort'} | Frontend Hire`,
    description: meta?.description,
    image: meta.image,
  });
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { chapters, isPro } = await getCohortPages(params.cohortId);
  const { getContent, meta } = await getCohortPage(
    params.cohortId,
    params.chapter,
  );

  const content = getContent() as React.ReactElement;

  return (
    <ProtectedLayout>
      {isPro ? (
        <PremiumProtectedContentLayout>
          <ContentArticleLayout
            content={content}
            chapters={chapters}
            lastUpdated={meta?.lastUpdated}
            currentChapter={params.chapter}
          />
        </PremiumProtectedContentLayout>
      ) : (
        <ContentArticleLayout
          content={content}
          chapters={chapters}
          lastUpdated={meta?.lastUpdated}
          currentChapter={params.chapter}
        />
      )}
    </ProtectedLayout>
  );
}
