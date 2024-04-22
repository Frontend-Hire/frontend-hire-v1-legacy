export default function GuidesLayout({ children }: React.PropsWithChildren) {
  return (
    <article className="flex flex-col gap-4">
      <div className="prose prose-invert mx-auto py-2 prose-h2:mt-5 prose-strong:text-[#FF5CF2]">
        {children}
      </div>
    </article>
  );
}
