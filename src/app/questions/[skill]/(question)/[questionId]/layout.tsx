export default function QuestionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="h-full bg-white">{children}</main>;
}
