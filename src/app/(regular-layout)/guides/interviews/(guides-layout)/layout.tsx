export default function GuidesLayout({ children }: React.PropsWithChildren) {
  return (
    <main className="flex flex-col gap-[20px] p-[10px] md:px-[100px] md:py-[20px] lg:px-[200px] xl:px-[250px]">
      <article className="prose prose-invert max-w-none py-[10px]">
        {children}
      </article>
    </main>
  );
}
