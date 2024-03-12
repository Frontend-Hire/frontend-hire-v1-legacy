export default function BoringLayout({ children }: React.PropsWithChildren) {
  return (
    <article className="container prose prose-invert mx-auto">
      {children}
    </article>
  );
}
