import QuestionLayoutItem from '@/components/QuestionLayoutItem';
import Tooltip from '@/components/ui/tooltip';
import { QuestionTab } from '@/types/Question';
import {
  SandpackConsole,
  SandpackPreview,
  SandpackTests,
} from '@codesandbox/sandpack-react';
import { InfoIcon } from 'lucide-react';
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

  return (
    <QuestionLayoutItem
      rightButtons={
        <>
          <Tooltip title="Run code to see preview">
            <InfoIcon className="mx-2 cursor-pointer text-white hover:opacity-70" />
          </Tooltip>
          {showTests && <RunTestsButton />}
        </>
      }
      tabs={tabs}
    />
  );
}
