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
      <main className="h-0 flex-grow py-[10px]">{children}</main>
    </div>
  );
}
