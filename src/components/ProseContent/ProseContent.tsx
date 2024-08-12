export default function ProseContent({ children }: React.PropsWithChildren) {
  return (
    <div className="prose prose-invert max-w-none p-4 prose-h2:mt-5 prose-figure:mt-0 prose-code:rounded prose-code:bg-primary/80 prose-code:p-0.5 prose-code:before:content-[''] prose-code:after:content-['']">
      {children}
    </div>
  );
}
