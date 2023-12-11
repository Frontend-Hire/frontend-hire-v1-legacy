interface Props {
  header: React.ReactNode;
  children: React.ReactNode;
}

export default function PrimaryLayout({ header, children }: Props) {
  return (
    <div className="flex h-full flex-col px-[10px]">
      {header}
      <main className="mt-[10px] flex grow flex-col overflow-hidden rounded">
        {children}
      </main>
    </div>
  );
}
