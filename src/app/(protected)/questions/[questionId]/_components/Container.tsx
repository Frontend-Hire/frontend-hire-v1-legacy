import QuestionLayout from '@/components/QuestionLayout';

import QuestionContainer from './QuestionContainer';
import CodeEditor from './CodeEditor';
import Output from './Output';

export default function Container() {
  return (
    <QuestionLayout
      topLeft={{
        label: 'Question Prompt',
        content: <QuestionContainer />,
      }}
      topRight={{ label: 'Code Editor', content: <CodeEditor /> }}
      bottomRight={{
        label: 'Output',
        content: <Output />,
      }}
    />
  );
}
