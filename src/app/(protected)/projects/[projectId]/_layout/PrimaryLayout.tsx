interface Props {
  header: React.ReactNode;
  children: React.ReactNode;
}

export default function PrimaryLayout({ header, children }: Props) {
  return (
    <div className="flex h-full flex-col px-[10px]">
      {header}
      <main className="h-0 flex-grow py-[10px]">{children}</main>
    </div>
  );
}
