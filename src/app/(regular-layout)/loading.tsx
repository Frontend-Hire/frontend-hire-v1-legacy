export default function Loading() {
  return (
    <article className="flex flex-col gap-[20px]">
      <div className="flex animate-pulse flex-col gap-[20px]">
        <div className="h-[60px] w-full rounded-md bg-card" />
        <div className="h-[60px] w-full rounded-md bg-card" />
        <div className="h-[60px] w-full rounded-md bg-card" />
        <div className="h-[60px] w-full rounded-md bg-card" />
      </div>
    </article>
  );
}
