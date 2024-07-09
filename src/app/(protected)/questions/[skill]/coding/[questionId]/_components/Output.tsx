import QuestionLayoutItem from '@/components/QuestionLayoutItem';
import { QuestionTab } from '@/types/Question';
import { SandpackConsole, SandpackPreview } from '@codesandbox/sandpack-react';

type OutputProps = {
  showPreview?: boolean;
  showConsole?: boolean;
};

export default function Output({ showConsole, showPreview }: OutputProps) {
  const tabs: QuestionTab[] = [];

  if (showPreview) {
    tabs.push({
      label: 'Preview',
      value: 'Preview',
      content: <SandpackPreview showNavigator className="h-full" />,
    });
  }

  if (showConsole) {
    tabs.push({
      label: 'Console',
      value: 'Console',
      content: <SandpackConsole className="h-full" />,
    });
  }

  return <QuestionLayoutItem tabs={tabs} />;
}
