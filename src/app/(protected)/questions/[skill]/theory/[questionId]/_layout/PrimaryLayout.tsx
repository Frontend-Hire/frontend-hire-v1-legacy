type PrimaryLayoutProps = {
  header: React.ReactNode;
};

export default function PrimaryLayout({
  header,
  children,
}: React.PropsWithChildren<PrimaryLayoutProps>) {
  return (
    <div className="flex h-full flex-col px-2">
      {header}
      <div className="mt-2 flex grow flex-col overflow-hidden rounded">
        {children}
      </div>
    </div>
  );
}
