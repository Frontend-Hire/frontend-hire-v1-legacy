import Tabs from '../Tabs';

interface Props {
  question: React.ReactNode;
}

export default function QuestionLayoutItem({ question }: Props) {
  return (
    <div className="h-full">
      <Tabs
        tabs={[
          {
            label: 'Question',
            value: 'question',
            content: <div className="prose">{question}</div>,
          },
        ]}
      />
    </div>
  );
}
