interface Props {
  children: React.ReactNode;
}

export default function LayoutItem({ children }: Props) {
  return (
    <div className="flex flex-col border-2 border-gray-900">
      <div className="h-0 flex-grow overflow-auto">{children}</div>
    </div>
  );
}
