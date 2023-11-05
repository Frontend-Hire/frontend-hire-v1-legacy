import * as React from 'react';
import QuestionLayoutItem from '@/components/QuestionLayoutItem';
import { keymap } from '@codemirror/view';
import { CodeEditorRef, SandpackCodeEditor } from '@codesandbox/sandpack-react';
import { autocompletion, completionKeymap } from '@codemirror/autocomplete';
import ResetButtonWithAlert from './ResetButtonWithAlert';
import RunCodeButton from './RunCodeButton';
import PrettierButton from './PrettierButton';

export default function CodeEditor() {
  const codemirrorInstance = React.useRef<CodeEditorRef>(null);

  return (
    <QuestionLayoutItem
      rightButtons={
        <>
          <ResetButtonWithAlert />
          <PrettierButton editorInstance={codemirrorInstance} />
          <RunCodeButton />
        </>
      }
      tabs={[
        {
          label: 'Editor',
          value: 'Editor',
          content: (
            <SandpackCodeEditor
              ref={codemirrorInstance}
              extensions={[
                autocompletion(),
                keymap.of([
                  {
                    key: 'Mod-s',
                    run: () => true,
                  },
                ]),
              ]}
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
