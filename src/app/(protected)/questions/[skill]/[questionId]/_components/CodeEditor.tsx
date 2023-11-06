import * as React from 'react';
import QuestionLayoutItem from '@/components/QuestionLayoutItem';
import { keymap } from '@codemirror/view';
import { CodeEditorRef, SandpackCodeEditor } from '@codesandbox/sandpack-react';
import { autocompletion, completionKeymap } from '@codemirror/autocomplete';
import ResetButtonWithAlert from './ResetButtonWithAlert';
import RunCodeButton from './RunCodeButton';
import PrettierButton from './PrettierButton';
import AutoSave from './AutoSave';

export default function CodeEditor() {
  const codemirrorInstance = React.useRef<CodeEditorRef>(null);
  const prettierButtonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <QuestionLayoutItem
      rightButtons={
        <>
          <ResetButtonWithAlert />
          <PrettierButton
            ref={prettierButtonRef}
            editorInstance={codemirrorInstance}
          />
          <RunCodeButton />
          <AutoSave />
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
                    run: () => {
                      prettierButtonRef.current?.click();
                      return true;
                    },
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
