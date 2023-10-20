import QuestionLayoutItem from '@/components/QuestionLayoutItem';
import { SandpackCodeEditor } from '@codesandbox/sandpack-react';
import { autocompletion, completionKeymap } from '@codemirror/autocomplete';
import ResetButtonWithAlert from './ResetButtonWithAlert';
import RunCodeButton from './RunCodeButton';

export default function CodeEditor() {
  return (
    <QuestionLayoutItem
      rightButtons={
        <>
          <ResetButtonWithAlert />
          <RunCodeButton />
        </>
      }
      tabs={[
        {
          label: 'Editor',
          value: 'Editor',
          content: (
            <SandpackCodeEditor
              extensions={[autocompletion()]}
              extensionsKeymap={[completionKeymap as any]} // For TS error
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
}
