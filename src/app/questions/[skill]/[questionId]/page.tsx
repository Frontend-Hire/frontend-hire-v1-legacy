export default function Question({
  params,
}: {
  params: { questionId: string };
}) {
  const { questionId } = params;

  return <section>{questionId}</section>;
}
