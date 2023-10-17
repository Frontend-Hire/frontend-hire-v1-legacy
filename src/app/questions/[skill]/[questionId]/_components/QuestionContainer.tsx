import QuestionLayoutItem from '@/components/QuestionLayoutItem';

interface Props {
  content: React.ReactNode;
}

export default function QuestionContainer({ content }: Props) {
  return (
    <QuestionLayoutItem
      tabs={[
        {
          label: 'Question',
          value: 'Question',
          content: <div className="prose p-2">{content}</div>,
        },
      ]}
    />
  );
}
