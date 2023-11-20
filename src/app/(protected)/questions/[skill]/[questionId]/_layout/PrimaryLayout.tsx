interface Props {
  header: React.ReactNode;
  children: React.ReactNode;
}

export default function PrimaryLayout({ header, children }: Props) {
  return (
    <div className="flex h-full flex-col border-x-[10px] border-gray-400 bg-gray-400">
      {header}
      <main className="h-0 flex-grow border-t-[10px] border-gray-400 bg-white">
        {children}
      </main>
    </div>
  );
}
