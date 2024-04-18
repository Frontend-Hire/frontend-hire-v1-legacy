export default function Loading() {
  return (
    <article className="flex flex-col gap-4">
      <div className="flex animate-pulse flex-col gap-4">
        <div className="h-[60px] w-full rounded-md bg-card" />
        <div className="h-[60px] w-full rounded-md bg-card" />
        <div className="h-[60px] w-full rounded-md bg-card" />
        <div className="h-[60px] w-full rounded-md bg-card" />
      </div>
    </article>
  );
}
