import QuestionLayoutItem from '@/components/QuestionLayoutItem';
import ResetButtonWithAlert from './ResetButtonWithAlert';
import { Button } from '@/components/ui/button';
import { SandpackCodeEditor, useSandpack } from '@codesandbox/sandpack-react';

export default function CodeEditor() {
  const { sandpack } = useSandpack();

  return (
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
}
