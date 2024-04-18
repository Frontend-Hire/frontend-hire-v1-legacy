type PrimaryLayoutProps = {
  header: React.ReactNode;
};

export default function PrimaryLayout({
  header,
  children,
}: React.PropsWithChildren<PrimaryLayoutProps>) {
  return (
    <div className="container flex h-full flex-col px-2">
      {header}
      <main className="h-0 flex-grow py-2">{children}</main>
    </div>
  );
}
