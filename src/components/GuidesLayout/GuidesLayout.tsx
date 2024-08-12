import ProseContent from '../ProseContent';

export default function GuidesLayout({ children }: React.PropsWithChildren) {
  return (
    <article className="flex flex-col gap-4">
      <ProseContent>{children}</ProseContent>
    </article>
  );
}
