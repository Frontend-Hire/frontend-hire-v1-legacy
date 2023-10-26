import { Button } from '@/components/ui/button';
import { Database } from '@/types/supabase';
import { useSandpack } from '@codesandbox/sandpack-react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function SubmitSolutionButton() {
  const supabaseBrowserClient = createClientComponentClient<Database>();
  const { sandpack } = useSandpack();

  const { visibleFiles, files } = sandpack;

  const handleSubmit = async () => {
    const filesPayload: {
      id?: number;
      file_name: string;
      code: string;
      submission_id: number;
    }[] = [];

    const editableVisibleFiles = visibleFiles.filter(
      (file) => !files[file].readOnly,
    );

    const submissionId = localStorage.getItem('submission_id');

    const submissionPayload: { id?: number; question_id: string } = {
      question_id: localStorage.getItem('question_id')!,
    };

    if (submissionId) {
      submissionPayload['id'] = +submissionId;
    }

    const { data } = await supabaseBrowserClient
      .from('code_submissions')
      .upsert([submissionPayload], { defaultToNull: false })
      .select('id, files (id, file_name)')
      .limit(1)
      .maybeSingle();

    if (data) {
      editableVisibleFiles.forEach((visibleFile) => {
        const fileToUpdate = data.files.find(
          (file) => file.file_name === visibleFile,
        );
        filesPayload.push({
          id: fileToUpdate?.id,
          file_name: visibleFile,
          code: files[visibleFile].code,
          submission_id: data.id,
        });
      });
      await supabaseBrowserClient
        .from('files')
        .upsert(filesPayload, { defaultToNull: false });
    }

    localStorage.setItem('submission_id', data!.id.toString());
  };

  return (
    <Button
      className="rounded-t-none bg-green-600 hover:bg-green-700"
      onClick={handleSubmit}
    >
      Submit Solution
    </Button>
  );
}
