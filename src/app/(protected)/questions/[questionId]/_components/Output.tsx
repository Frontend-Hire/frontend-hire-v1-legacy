import QuestionLayoutItem from '@/components/QuestionLayoutItem';
import Tooltip from '@/components/ui/tooltip';
import { QuestionTab } from '@/types/Question';
import { SandpackPreview, SandpackTests } from '@codesandbox/sandpack-react';
import { ShieldAlertIcon } from 'lucide-react';
import RunTestsButton from './RunTestsButton';
import { useQuestionData } from '../_context/QuestionDataProvider';

export default function Output() {
  const {
    originalMeta: { showPreview, showConsole, showTests },
  } = useQuestionData();

  const tabs: QuestionTab[] = [];

  if (showPreview) {
    tabs.push({
      label: 'Preview',
      value: 'Preview',
      content: <SandpackPreview showNavigator className="h-full" />,
    });
  }

  if (showTests) {
    tabs.push({
      label: 'Tests',
      value: 'Tests',
      content: <SandpackTests className="h-full" />,
    });
  }

  if (showConsole) {
    tabs.push({
      label: 'Console',
      value: 'Console',
      content: (
        <div className="flex h-full flex-col gap-2 p-2 text-lg">
          <span>You can use your default browser's console!</span>

          {showTests
            ? "If index.js file is not imported in the index.test.ts file, your console logs won't work in the index.js file"
            : ''}
        </div>
      ),
    });
  }

  const getAlertTitle = () => {
    return 'If tests take too long (more than 15 seconds) to render refresh the browser!';
  };

  return (
    <QuestionLayoutItem
      rightButtons={
        <>
          {showTests && (
            <Tooltip title={getAlertTitle()}>
              <ShieldAlertIcon className="mx-2 cursor-pointer text-white hover:opacity-70" />
            </Tooltip>
          )}
          {showTests && <RunTestsButton />}
        </>
      }
      tabs={tabs}
    />
  );
}
