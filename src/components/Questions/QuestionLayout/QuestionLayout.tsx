import TwoColumnLayout from './TwoColumnLayout';

type QuestionLayoutProps = {
  topLeft?: {
    label: string;
    content: React.ReactNode;
  };
  topRight?: {
    label: string;
    content: React.ReactNode;
  };
  bottomLeft?: {
    label: string;
    content: React.ReactNode;
  };
  bottomRight?: {
    label: string;
    content: React.ReactNode;
  };
};

export default function QuestionLayout({
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}: QuestionLayoutProps) {
  return (
    <div className="h-0 flex-grow">
      <TwoColumnLayout
        topLeft={topLeft?.content}
        topRight={topRight?.content}
        bottomLeft={bottomLeft?.content}
        bottomRight={bottomRight?.content}
      />
    </div>
  );
}
