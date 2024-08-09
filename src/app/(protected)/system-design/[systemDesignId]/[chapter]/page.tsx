import { getSystemDesignPage, getSystemDesign } from '@/lib/fetchLocalFiles';
import ProtectedLayout from '@/components/ProtectedLayout';
import PremiumProtectedContentLayout from '@/components/PremiumProtectedContentLayout';
import ContentArticleLayout from '@/components/ContentArticleLayout';
import { getMetadata } from '@/lib/getMetadata';

type ChapterPageProps = {
  params: {
    chapter: string;
    systemDesignId: string;
  };
};

export async function generateMetadata({ params }: ChapterPageProps) {
  const meta = await getSystemDesign(params.systemDesignId);

  return getMetadata({
    title: `${meta?.title || 'System Design'} | Frontend Hire`,
    description: meta?.description,
    canonical: `/system-design/${params.systemDesignId}/${params.chapter}`,
  });
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { chapters, isPro } = await getSystemDesign(params.systemDesignId);
  const { getContent, meta } = await getSystemDesignPage(
    params.systemDesignId,
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
