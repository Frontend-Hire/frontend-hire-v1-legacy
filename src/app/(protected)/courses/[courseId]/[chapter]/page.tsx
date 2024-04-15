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
  const allPages = await getCoursePages(params.courseId);
  const { getContent, meta } = await getCoursePage(
    params.courseId,
    params.chapter,
  );

  const content = getContent() as React.ReactElement;

  return (
    <div className="flex gap-[30px]">
      <div className="flex flex-col gap-4">
        <article className="prose prose-invert w-full max-w-none py-[10px] prose-h2:mt-5">
          {content}
        </article>
        <Footer
          allPages={allPages}
          currentPage={params.chapter}
          lastUpdated={meta?.lastUpdated}
        />
      </div>
      <TOC headings={getHeadings(content.props.children)} />
    </div>
  );
}
