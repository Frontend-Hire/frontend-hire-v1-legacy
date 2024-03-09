export default function GuidesLayout({ children }: React.PropsWithChildren) {
  return (
    <article className="flex flex-col gap-[20px]">
      <div className="prose prose-invert mx-auto py-[10px] prose-h2:mt-5">
        {children}
      </div>
    </article>
  );
}
