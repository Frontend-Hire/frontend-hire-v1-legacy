import React from 'react';
import { Button } from '@/components/ui/button';
import { useSandpack } from '@codesandbox/sandpack-react';
import SubmissionConfetti from './SubmissionConfetti';
import createSupabaseBrowserClient from '@/lib/supabase/supabaseBrowserClient';
import { useParams } from 'next/navigation';

export default function SubmitSolutionButton() {
  const { questionId } = useParams<{
    skill: string;
    questionId: string;
  }>();
  const supabaseBrowserClient = createSupabaseBrowserClient();
  const { sandpack } = useSandpack();
  const [showConfetti, setShowConfetti] = React.useState(false);

  const { visibleFiles, files } = sandpack;

  const handleSubmit = async () => {
    const filesPayload: {
      id?: number;
      file_name: string;
      code: string;
      code_submission_id: number;
    }[] = [];

    const editableVisibleFiles = visibleFiles.filter(
      (file) => !files[file].readOnly,
    );

    const submissionId = sessionStorage.getItem('code_submission_id');

    const submissionPayload: { id?: number; question_id: string } = {
      question_id: questionId,
    };

    if (submissionId) {
      submissionPayload['id'] = +submissionId;
    }

    const { data } = await supabaseBrowserClient
      .from('code_submissions')
      .upsert([submissionPayload], { defaultToNull: false })
      .select('id, code_submission_files (id, file_name)')
      .limit(1)
      .maybeSingle();

    if (data) {
      editableVisibleFiles.forEach((visibleFile) => {
        const fileToUpdate = data.code_submission_files.find(
          (file) => file.file_name === visibleFile,
        );
        filesPayload.push({
          id: fileToUpdate?.id,
          file_name: visibleFile,
          code: files[visibleFile].code,
          code_submission_id: data.id,
        });
      });
      await supabaseBrowserClient
        .from('code_submission_files')
        .upsert(filesPayload, { defaultToNull: false });

      sessionStorage.setItem('code_submission_id', data.id.toString());
      setShowConfetti(true);
    }
  };

  return (
    <>
      <Button
        className="rounded-t-none bg-green-600 hover:bg-green-700"
        onClick={handleSubmit}
      >
        Submit Solution
      </Button>
      {showConfetti && (
        <SubmissionConfetti onClose={() => setShowConfetti(false)} />
      )}
    </>
  );
}
