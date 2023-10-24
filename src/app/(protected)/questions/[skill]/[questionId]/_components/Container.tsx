import QuestionLayout from '@/components/QuestionLayout';
import { useSandpack } from '@codesandbox/sandpack-react';

import { IQuestionSuccess } from '../_hooks/useQuestion';
import QuestionContainer from './QuestionContainer';
import CodeEditor from './CodeEditor';
import Output from './Output';

interface Props {
  data: IQuestionSuccess;
}

export default function Container({ data }: Props) {
  const bottomLeft = () =>
    data.question.meta.expectedOutput ? (
      <div className="h-full">Expected Output</div>
    ) : (
      ''
    );

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
