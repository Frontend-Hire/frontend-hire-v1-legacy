'use client';

import Layout from '@/components/Layout';
import { Skill, getQuestionConfig } from '@/utils/template';
import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react';

export default function Question({
  params,
}: {
  params: { questionId: string; skill: string };
}) {
  const { questionId, skill } = params;

  const { template } = getQuestionConfig(skill.toLowerCase() as Skill);

  return (
    <SandpackProvider
      style={{
        height: '100%',
      }}
      template={template}
      options={{
        autoReload: true,
        autorun: false,
      }}
    >
      <Layout
        topLeft={<div className="h-full">Question</div>}
        topRight={
          <SandpackCodeEditor showLineNumbers wrapContent className="h-full" />
        }
        bottomLeft={<div className="h-full">Expected Output</div>}
        bottomRight={<SandpackPreview className="h-full" />}
      />
    </SandpackProvider>
  );
}
