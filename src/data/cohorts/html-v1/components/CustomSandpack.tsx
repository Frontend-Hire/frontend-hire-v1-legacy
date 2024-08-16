'use client';

import React from 'react';
import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackFiles,
  useSandpack,
} from '@codesandbox/sandpack-react';
import { keymap } from '@codemirror/view';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import usePrettier from '@/hooks/usePrettier';
import { RotateCcwIcon, SparklesIcon } from 'lucide-react';
import VisuallyHidden from '@/components/ui/visually-hidden';
import Tooltip from '@/components/ui/tooltip';

const PrettierButton = React.forwardRef<HTMLButtonElement>(({}, ref) => {
  const { prettify, readOnly } = usePrettier();

  return (
    <Tooltip title="Format Code">
      <Button
        ref={ref}
        disabled={readOnly}
        onClick={prettify}
        variant="ghost"
        size="icon"
        className="rounded-none"
      >
        <SparklesIcon className="text-white" />
        <VisuallyHidden>Format Code</VisuallyHidden>
      </Button>
    </Tooltip>
  );
});

PrettierButton.displayName = 'PrettierButton';

function ResetButton() {
  const { sandpack } = useSandpack();

  return (
    <Tooltip title="Reset Code">
      <Button
        onClick={sandpack.resetAllFiles}
        variant="destructive"
        size="icon"
      >
        <RotateCcwIcon className="text-white" />
        <VisuallyHidden>Reset Code</VisuallyHidden>
      </Button>
    </Tooltip>
  );
}

type CustomSandpackProps = {
  files?: SandpackFiles;
  isSolution?: boolean;
};

export default function CustomSandpack({
  files,
  isSolution = false,
}: CustomSandpackProps) {
  const prettierButtonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <SandpackProvider files={files} theme="dark" template="static">
      <div
        // https://github.com/codesandbox/sandpack/issues/1081
        style={{
          overflowAnchor: 'none',
        }}
        className="rounded border p-2"
      >
        <div className="flex flex-col gap-2">
          {!isSolution && (
            <div className="flex items-center justify-end gap-2">
              <PrettierButton ref={prettierButtonRef} />
              <ResetButton />
            </div>
          )}
          <div className="h-[300px]">
            <SandpackCodeEditor
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
              showLineNumbers
              showRunButton
              readOnly={isSolution}
              showTabs
              className="h-full"
            />
          </div>
          <div className="h-[300px]">
            <Tabs className="flex h-full flex-col" defaultValue={'preview'}>
              <div className="z-[1] flex h-10 items-center justify-between bg-card/60">
                <TabsList className="rounded-none bg-card p-0">
                  <TabsTrigger
                    className="h-full rounded-none data-[state=active]:bg-[#151515]"
                    value="preview"
                  >
                    Preview
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent
                className="mt-0 flex h-full flex-col"
                asChild
                forceMount
                value="preview"
              >
                <div className="h-0 flex-grow overflow-auto bg-[#151515] data-[state=inactive]:hidden">
                  <SandpackPreview className="h-full" />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </SandpackProvider>
  );
}
