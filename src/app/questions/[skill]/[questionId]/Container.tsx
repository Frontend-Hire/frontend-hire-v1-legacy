import QuestionLayout from '@/components/QuestionLayout';
import QuestionLayoutItem from '@/components/QuestionLayoutItem';
import {
  SandpackCodeEditor,
  SandpackPreview,
  useSandpack,
} from '@codesandbox/sandpack-react';
import { InfoIcon } from 'lucide-react';
import Tooltip from '@/components/Tooltip';

import { IQuestionSuccess } from './useQuestion';
import Button from '@/components/Button';
import { useEffect } from 'react';

interface Props {
  data: IQuestionSuccess;
}

export default function Container({ data }: Props) {
  const { sandpack } = useSandpack();

  return (
    <QuestionLayout
      topLeft={
        <QuestionLayoutItem
          tabs={[
            {
              label: 'Question',
              value: 'Question',
              content: (
                <div className="prose">{data.question.getContent()}</div>
              ),
            },
          ]}
        />
      }
      topRight={
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
      }
      bottomLeft={
        data.question.meta.expectedOutput ? (
          <div className="h-full">Expected Output</div>
        ) : (
          ''
        )
      }
      bottomRight={
        data.question.meta.showPreview ? (
          <QuestionLayoutItem
            rightButtons={
              <Tooltip title="Click on Run Code in the Code Editor to see preview">
                <InfoIcon className="mx-2 cursor-pointer hover:opacity-70" />
              </Tooltip>
            }
            tabs={[
              {
                label: 'Preview',
                value: 'Preview',
                content: <SandpackPreview className="h-full" />,
              },
            ]}
          />
        ) : (
          ''
        )
      }
    />
  );
}
