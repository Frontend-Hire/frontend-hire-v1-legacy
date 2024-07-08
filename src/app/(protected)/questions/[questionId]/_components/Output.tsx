import QuestionLayoutItem from '@/components/QuestionLayoutItem';
import { QuestionTab } from '@/types/Question';
import { SandpackPreview } from '@codesandbox/sandpack-react';

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
      content: <SandpackPreview showNavigator className="h-full bg-red-500" />,
    });
  }

  if (showConsole) {
    tabs.push({
      label: 'Console',
      value: 'Console',
      content: (
        <div className="flex h-full flex-col gap-2 p-2 text-lg">
          <span>You can use your default browser&apos;s console!</span>
        </div>
      ),
    });
  }

  return <QuestionLayoutItem tabs={tabs} />;
}
