import React from 'react';
import { useSandpack } from '@codesandbox/sandpack-react';
import { LoaderIcon } from 'lucide-react';
import useDebounce from '../../_hooks/useDebounce';
import createSupabaseBrowserClient from '@/lib/supabase/supabaseBrowserClient';
import { useParams } from 'next/navigation';

export default function AutoSave() {
  const { questionId } = useParams<{
    skill: string;
    questionId: string;
  }>();
  const supabaseBrowserClient = createSupabaseBrowserClient();
  const { sandpack } = useSandpack();
  const [hasRendered, setHasRendered] = React.useState(false);
  const [saveStatus, setSaveStatus] = React.useState<
    'saving' | 'saved' | 'idle'
  >('idle');

  const { visibleFiles, files } = sandpack;

  const handleSave = async () => {
    try {
      setSaveStatus('saving');
      const filesPayload: {
        id?: number;
        file_name: string;
        code: string;
        code_history_id: number;
      }[] = [];

      const editableVisibleFiles = visibleFiles.filter(
        (file) => !files[file].readOnly,
      );

      const historyId = sessionStorage.getItem('code_history_id');

      const historyPayload: { id?: number; question_id: string } = {
        question_id: questionId,
      };

      if (historyId) {
        historyPayload['id'] = +historyId;
      }

      const { data } = await supabaseBrowserClient
        .from('code_history')
        .upsert([historyPayload], { defaultToNull: false })
        .select('id, code_history_files (id, file_name)')
        .limit(1)
        .maybeSingle();

      if (data) {
        editableVisibleFiles.forEach((visibleFile) => {
          const fileToUpdate = data.code_history_files.find(
            (file) => file.file_name === visibleFile,
          );
          filesPayload.push({
            id: fileToUpdate?.id,
            file_name: visibleFile,
            code: files[visibleFile].code,
            code_history_id: data.id,
          });
        });
        await supabaseBrowserClient
          .from('code_history_files')
          .upsert(filesPayload, { defaultToNull: false });

        sessionStorage.setItem('code_history_id', data.id.toString());
      }
      setSaveStatus('saved');
    } catch (e) {
      console.log(e);
    }
  };

  const debouncedSave = useDebounce(handleSave);

  React.useEffect(() => {
    setHasRendered(true);
  }, []);

  React.useEffect(() => {
    if (!hasRendered) return;
    debouncedSave();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSave, files]);

  if (saveStatus == 'saving')
    return (
      <LoaderIcon className="absolute bottom-5 right-5 z-10 animate-spin text-blue-600" />
    );

  return null;
}
