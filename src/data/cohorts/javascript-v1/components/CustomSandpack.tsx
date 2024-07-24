'use client';

import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackFiles,
  SandpackConsole,
  useSandpack,
} from '@codesandbox/sandpack-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

type CustomSandpackProps = {
  files?: SandpackFiles;
  showPreview?: boolean;
  isSolution?: boolean;
};

export default function CustomSandpack({
  files,
  showPreview = false,
  isSolution = false,
}: CustomSandpackProps) {
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
            <div className="flex items-center justify-end">
              <ResetButton />
            </div>
          )}
          <div className="h-[300px]">
            <SandpackCodeEditor
              showLineNumbers
              showRunButton
              readOnly={isSolution}
              showTabs
              className="h-full"
            />
          </div>
          <div className="h-[300px]">
            <Tabs
              className="flex h-full flex-col"
              defaultValue={showPreview ? 'preview' : 'console'}
            >
              <div className="z-[1] flex h-10 items-center justify-between bg-card/60">
                <TabsList className="rounded-none bg-card p-0">
                  {showPreview && (
                    <TabsTrigger
                      className="h-full rounded-none data-[state=active]:bg-[#151515]"
                      value="preview"
                    >
                      Preview
                    </TabsTrigger>
                  )}
                  <TabsTrigger
                    className="h-full rounded-none data-[state=active]:bg-[#151515]"
                    value="console"
                  >
                    Console
                  </TabsTrigger>
                </TabsList>
              </div>
              {showPreview && (
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
              )}
              <TabsContent
                className="mt-0 flex h-full flex-col"
                value="console"
                asChild
                forceMount
              >
                <div className="h-0 flex-grow overflow-auto bg-[#151515] data-[state=inactive]:hidden">
                  <SandpackConsole standalone className="h-full" />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </SandpackProvider>
  );
}

function ResetButton() {
  const { sandpack } = useSandpack();

  return (
    <Button onClick={sandpack.resetAllFiles} variant="destructive" size="sm">
      Reset
    </Button>
  );
}
