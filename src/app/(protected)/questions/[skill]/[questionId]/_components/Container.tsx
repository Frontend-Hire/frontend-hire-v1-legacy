import QuestionLayout from '@/components/QuestionLayout';

import { IQuestionSuccess } from '../_hooks/useQuestion';
import QuestionContainer from './QuestionContainer';
import CodeEditor from './CodeEditor';
import Output from './Output';

interface Props {
  data: IQuestionSuccess;
}

export default function Container({ data }: Props) {
  return (
    <QuestionLayout
      topLeft={{
        label: 'Question Prompt',
        content: (
          <QuestionContainer
            content={data.question.getContent()}
            difficulty={data.question.meta.difficulty}
          />
        ),
      }}
      topRight={{ label: 'Code Editor', content: <CodeEditor /> }}
      bottomRight={{
        label: 'Output',
        content: (
          <Output
            showConsole={data.question.meta.showConsole}
            showPreview={data.question.meta.showPreview}
            showTests={data.question.meta.showTests}
          />
        ),
      }}
    />
  );
}
