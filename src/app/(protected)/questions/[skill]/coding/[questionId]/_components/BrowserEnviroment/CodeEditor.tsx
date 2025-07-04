import React from 'react';
import QuestionLayoutItem from '@/components/Questions/QuestionLayoutItem';
import { keymap } from '@codemirror/view';
import { CodeEditorRef, SandpackCodeEditor } from '@codesandbox/sandpack-react';
import RunCodeButton from './RunCodeButton';
import PrettierButton from './PrettierButton';

type CodeEditorProps = {
  resetButton: React.ReactNode;
};

export default function CodeEditor({ resetButton }: CodeEditorProps) {
  const codemirrorInstance = React.useRef<CodeEditorRef>(null);
  const prettierButtonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <QuestionLayoutItem
      rightButtons={
        <>
          {resetButton}
          <PrettierButton
            ref={prettierButtonRef}
            editorInstance={codemirrorInstance}
          />
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
