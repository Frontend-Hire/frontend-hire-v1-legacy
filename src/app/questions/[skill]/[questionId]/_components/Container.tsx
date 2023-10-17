import QuestionLayout from '@/components/QuestionLayout';
import QuestionLayoutItem from '@/components/QuestionLayoutItem';
import {
  SandpackCodeEditor,
  SandpackConsole,
  SandpackPreview,
  SandpackTests,
  useSandpack,
  useSandpackShell,
} from '@codesandbox/sandpack-react';
import { InfoIcon } from 'lucide-react';

import { IQuestionSuccess } from '../_hooks/useQuestion';
import { Button } from '@/components/ui/button';
import Tooltip from '@/components/ui/tooltip';
import { QuestionTab } from '@/types/Question';
import ResetButtonWithAlert from './ResetButtonWithAlert';
import QuestionContainer from './QuestionContainer';

interface Props {
  data: IQuestionSuccess;
}

export default function Container({ data }: Props) {
  const { sandpack, dispatch } = useSandpack();

  const topRight = () => (
    <QuestionLayoutItem
      rightButtons={
        <>
          <ResetButtonWithAlert onReset={sandpack.resetAllFiles} />
          <Button className="rounded-none" onClick={sandpack.runSandpack}>
            Run Code
          </Button>
        </>
      }
      tabs={[
        {
          label: 'Editor',
          value: 'Editor',
          content: (
            <SandpackCodeEditor
              showTabs
              showRunButton={false}
              showLineNumbers
              wrapContent
              className="h-full"
            />
          ),
        },
      ]}
    />
  );

  const bottomLeft = () =>
    data.question.meta.expectedOutput ? (
      <div className="h-full">Expected Output</div>
    ) : (
      ''
    );

  const bottomRight = () => {
    const tabs: QuestionTab[] = [];

    if (data.question.meta.showPreview) {
      tabs.push({
        label: 'Preview',
        value: 'Preview',
        content: <SandpackPreview showNavigator className="h-full" />,
      });
    }

    if (data.question.meta.showTests) {
      tabs.push({
        label: 'Tests',
        value: 'Tests',
        content: <SandpackTests className="h-full" />,
      });
    }

    if (data.question.meta.showConsole) {
      tabs.push({
        label: 'Console',
        value: 'Console',
        content: (
          <SandpackConsole
            standalone={!data.question.meta.showPreview}
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
            <Button
              className="rounded-none"
              onClick={() => {
                if (sandpack.status !== 'running') {
                  sandpack.runSandpack();
                  return;
                }
                dispatch({ type: 'run-all-tests' });
              }}
            >
              Run Tests
            </Button>
          </>
        }
        tabs={tabs}
      />
    );
  };

  return (
    <QuestionLayout
      topLeft={<QuestionContainer content={data.question.getContent()} />}
      topRight={topRight()}
      bottomLeft={bottomLeft()}
      bottomRight={bottomRight()}
    />
  );
}
