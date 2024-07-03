import { getHeadings } from '@/lib/getHeadings';
import Footer from './Footer';
import TOC from './TOC';

type ContentArticleLayoutProps = {
  currentChapter: string;
  chapters: Record<string, string>;
  lastUpdated?: string;
  content: React.ReactElement;
};

export default function ContentArticleLayout({
  chapters,
  lastUpdated,
  currentChapter,
  content,
}: ContentArticleLayoutProps) {
  return (
    <div className="flex flex-1 gap-8">
      <div className="flex flex-1 flex-col gap-4 pb-10">
        <article className="prose prose-invert max-w-none py-2 prose-h2:mt-5 prose-code:rounded prose-code:bg-primary/80 prose-code:p-0.5 prose-code:before:content-[''] prose-code:after:content-['']">
          {content}
        </article>
        <Footer
          allPages={Object.entries(chapters)}
          currentPage={currentChapter}
          lastUpdated={lastUpdated}
        />
      </div>
      <TOC headings={getHeadings(content.props.children)} />
    </div>
  );
}
