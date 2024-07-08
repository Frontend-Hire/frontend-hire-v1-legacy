export default function Loading() {
  return (
    <article className="flex flex-col gap-4">
      <div className="flex animate-fh-pulse flex-col gap-4">
        <div className="h-16 w-full rounded-md bg-card" />
        <div className="h-16 w-full rounded-md bg-card" />
        <div className="h-16 w-full rounded-md bg-card" />
        <div className="h-16 w-full rounded-md bg-card" />
      </div>
    </article>
  );
}
