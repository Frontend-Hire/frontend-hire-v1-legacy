type PrimaryLayoutProps = {
  header: React.ReactNode;
};

export default function PrimaryLayout({
  header,
  children,
}: React.PropsWithChildren<PrimaryLayoutProps>) {
  return (
    <div className="flex h-full flex-col px-[10px]">
      {header}
      <main className="mt-[10px] flex grow flex-col overflow-hidden rounded">
        {children}
      </main>
    </div>
  );
}
