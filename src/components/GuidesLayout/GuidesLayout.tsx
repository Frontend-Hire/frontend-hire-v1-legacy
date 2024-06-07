export default function GuidesLayout({ children }: React.PropsWithChildren) {
  return (
    <article className="flex flex-col gap-4">
      <div className="container prose prose-invert py-2 prose-h2:mt-5 prose-code:rounded prose-code:bg-primary/80 prose-code:p-0.5 prose-code:before:content-[''] prose-code:after:content-['']">
        {children}
      </div>
    </article>
  );
}
