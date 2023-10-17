import QuestionLayout from '@/components/QuestionLayout';
import QuestionLayoutItem from '@/components/QuestionLayoutItem';
import {
  SandpackCodeEditor,
  SandpackConsole,
  SandpackPreview,
  SandpackTests,
  useSandpack,
} from '@codesandbox/sandpack-react';
import { InfoIcon } from 'lucide-react';

import { IQuestionSuccess } from '../_hooks/useQuestion';
import { Button } from '@/components/ui/button';
import Tooltip from '@/components/ui/tooltip';
import { QuestionTab } from '@/types/Question';
import ResetButtonWithAlert from './ResetButtonWithAlert';
import QuestionContainer from './QuestionContainer';
import CodeEditor from './CodeEditor';
import Output from './Output';

interface Props {
  data: IQuestionSuccess;
}

export default function Container({ data }: Props) {
  const { sandpack, dispatch } = useSandpack();

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
      topRight={<CodeEditor />}
      bottomLeft={bottomLeft()}
      bottomRight={
        <Output
          showConsole={data.question.meta.showConsole}
          showPreview={data.question.meta.showPreview}
          showTests={data.question.meta.showTests}
        />
      }
    />
  );
}
