import { getHeadings } from '@/lib/getHeadings';
import Footer from './Footer';
import TOC from './TOC';
import ProseContent from '../ProseContent';

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
        <article>
          <ProseContent>{content}</ProseContent>
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
