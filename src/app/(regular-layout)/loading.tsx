export default function Loading() {
  return (
    <main className="flex flex-col gap-[20px] p-[10px] md:px-[100px] md:py-[20px] lg:px-[200px] xl:px-[250px]">
      <div className="flex animate-pulse flex-col gap-[20px]">
        <div className="h-[60px] w-full rounded-md bg-card" />
        <div className="h-[60px] w-full rounded-md bg-card" />
        <div className="h-[60px] w-full rounded-md bg-card" />
        <div className="h-[60px] w-full rounded-md bg-card" />
      </div>
    </main>
  );
}
