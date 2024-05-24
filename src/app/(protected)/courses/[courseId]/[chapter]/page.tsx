import React from 'react';
import { getCoursePage, getCoursePages } from '@/lib/fetchLocalFiles';
import TOC from './_components/TOC';
import { getHeadings } from '../util/getHeadings';
import Footer from './_components/Footer';

type ChapterPageProps = {
  params: {
    chapter: string;
    courseId: string;
  };
};

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { chapters } = await getCoursePages(params.courseId);
  const { getContent, meta } = await getCoursePage(
    params.courseId,
    params.chapter,
  );

  const content = getContent() as React.ReactElement;

  return (
    <div className="flex flex-1 gap-[30px]">
      <div className="flex flex-1 flex-col gap-4 pb-10">
        <article className="prose prose-invert max-w-none py-2 prose-h2:mt-5 prose-code:rounded prose-code:bg-primary/80 prose-code:p-0.5 prose-code:before:content-[''] prose-code:after:content-['']">
          {content}
        </article>
        <Footer
          allPages={Object.entries(chapters)}
          currentPage={params.chapter}
          lastUpdated={meta?.lastUpdated}
        />
      </div>
      <TOC headings={getHeadings(content.props.children)} />
    </div>
  );
}
