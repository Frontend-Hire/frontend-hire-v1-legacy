import QuestionLayoutItem from '@/components/QuestionLayoutItem';
import Tooltip from '@/components/ui/tooltip';
import { QuestionTab } from '@/types/Question';
import {
  SandpackConsole,
  SandpackPreview,
  SandpackTests,
} from '@codesandbox/sandpack-react';
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
        <SandpackConsole
          standalone={!showPreview}
          showHeader={false}
          className="h-full"
        />
      ),
    });
  }

  const getAlertTitle = () => {
    return 'If tests take too long (more than 15 seconds) to render refresh the browser! There is a known issue that breaks tests when the layout switches to mobile view or vice versa.';
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
