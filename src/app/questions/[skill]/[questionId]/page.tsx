'use client';

import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react';
import Layout from '@/components/Layout';
import QuestionLayoutItem from '@/components/QuestionLayoutItem';
import { Skill, getQuestionConfig } from '@/utils/template';
import FormsQuestion, { meta } from '@/sampleQuestion/forms.mdx';

export default function Question({
  params,
}: {
  params: { questionId: string; skill: string };
}) {
  const { questionId, skill } = params;

  console.log({ meta });

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
        topLeft={<QuestionLayoutItem question={<FormsQuestion />} />}
        topRight={
          <SandpackCodeEditor showLineNumbers wrapContent className="h-full" />
        }
        // bottomLeft={
        //   question.expectedOutput ? (
        //     <div className="h-full">Expected Output</div>
        //   ) : (
        //     ''
        //   )
        // }
        bottomRight={<SandpackPreview className="h-full" />}
      />
    </SandpackProvider>
  );
}
