import React from 'react';
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import createSupabaseBrowserClient from '@/lib/supabase/supabaseBrowserClient';
import { useSandpack } from '@codesandbox/sandpack-react';
import QuestionSubmissionConfetti from '@/components/Questions/QuestionSubmissionConfetti';
import { Params } from '../../../_types';

export default function SubmitSolutionButton() {
  const supabaseClient = createSupabaseBrowserClient();
  const [showConfetti, setShowConfetti] = React.useState(false);
  const { skill, questionId } = useParams<Params['params']>();
  const { sandpack } = useSandpack();

  const { visibleFiles, files } = sandpack;

  const editableVisibleFiles = visibleFiles.filter(
    (file) => !files[file].readOnly,
  );

  const handleSubmit = async () => {
    setShowConfetti(true);
    try {
      const codeHistory: { [key: string]: string } = {};
      editableVisibleFiles.forEach((visibleFile) => {
        codeHistory[visibleFile] = files[visibleFile].code;
      });
      await supabaseClient.rpc('save_code_history', {
        p_is_solved: true,
        p_question_id: `${skill.toLowerCase()}-${questionId.toLowerCase()}`,
        p_code_history: codeHistory,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button
        className="rounded-t-none bg-green-600 hover:bg-green-700"
        onClick={handleSubmit}
      >
        Mark as Solved
      </Button>
      {showConfetti && (
        <QuestionSubmissionConfetti
          CTA={
            <Button asChild>
              <Link href={`/questions/${skill}/coding`}>
                Practice Another Question
              </Link>
            </Button>
          }
          onClose={() => setShowConfetti(false)}
        />
      )}
    </>
  );
}
