import QuestionLayout from '@/components/QuestionLayout';
import QuestionLayoutItem from '@/components/QuestionLayoutItem';
import {
  SandpackCodeEditor,
  SandpackConsole,
  SandpackPreview,
  useSandpack,
} from '@codesandbox/sandpack-react';
import { InfoIcon } from 'lucide-react';
import Tooltip from '@/components/Tooltip';

import { IQuestionSuccess } from './_hooks/useQuestion';
import Button from '@/components/Button';
import { ITab } from '@/components/Tabs';

interface Props {
  data: IQuestionSuccess;
}

export default function Container({ data }: Props) {
  const { sandpack } = useSandpack();

  const topLeft = () => (
    <QuestionLayoutItem
      tabs={[
        {
          label: 'Question',
          value: 'Question',
          content: <div className="prose">{data.question.getContent()}</div>,
        },
      ]}
    />
  );

  const topRight = () => (
    <QuestionLayoutItem
      rightButtons={
        <Button className="rounded-none" onClick={sandpack.runSandpack}>
          Run Code
        </Button>
      }
      tabs={[
        {
          label: 'Editor',
          value: 'Editor',
          content: (
            <SandpackCodeEditor
              showTabs
              showLineNumbers
              showRunButton={false}
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
    const tabs: ITab[] = [];

    if (data.question.meta.showPreview) {
      tabs.push({
        label: 'Preview',
        value: 'Preview',
        content: <SandpackPreview showNavigator className="h-full" />,
      });
    }

    if (data.question.meta.showConsole) {
      tabs.push({
        label: 'Console',
        value: 'Console',
        content: <SandpackConsole className="h-full" />,
      });
    }

    return (
      <QuestionLayoutItem
        rightButtons={
          <Tooltip title="Click on Run Code in the Code Editor to see preview">
            <InfoIcon className="mx-2 cursor-pointer hover:opacity-70" />
          </Tooltip>
        }
        tabs={tabs}
      />
    );
  };

  return (
    <QuestionLayout
      topLeft={topLeft()}
      topRight={topRight()}
      bottomLeft={bottomLeft()}
      bottomRight={bottomRight()}
    />
  );
}
