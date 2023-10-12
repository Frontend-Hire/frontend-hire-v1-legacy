'use client';

import Layout from '@/components/Layout';
import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react';

export default function Question({
  params,
}: {
  params: { questionId: string };
}) {
  const { questionId } = params;

  return (
    <section className="h-full">
      <SandpackProvider
        style={{
          height: '100%',
        }}
        template="static"
        options={{
          autoReload: true,
          autorun: false,
        }}
      >
        <Layout
          topLeft={<div className="h-full">Question</div>}
          topRight={
            <SandpackCodeEditor
              showLineNumbers
              wrapContent
              className="h-full"
            />
          }
          bottomLeft={<div className="h-full">Expected Output</div>}
          bottomRight={<SandpackPreview className="h-full" />}
        />
      </SandpackProvider>
    </section>
  );
}
