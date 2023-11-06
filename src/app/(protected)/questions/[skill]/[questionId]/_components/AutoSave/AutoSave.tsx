import * as React from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useActiveCode, useSandpack } from '@codesandbox/sandpack-react';
import { Database } from '@/types/supabase';
import useDebounce from '../../_hooks/useDebounce';

export default function AutoSave() {
  const supabaseBrowserClient = createClientComponentClient<Database>();
  const { sandpack } = useSandpack();
  const { code } = useActiveCode();

  const { visibleFiles, files } = sandpack;

  const handleSave = async () => {
    const filesPayload: {
      id?: number;
      file_name: string;
      code: string;
      code_history_id: number;
    }[] = [];

    const editableVisibleFiles = visibleFiles.filter(
      (file) => !files[file].readOnly,
    );

    const historyId = localStorage.getItem('code_history_id');

    const historyPayload: { id?: number; question_id: string } = {
      question_id: localStorage.getItem('question_id')!,
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

      localStorage.setItem('code_history_id', data.id.toString());
    }
  };

  const debouncedSave = useDebounce(handleSave);

  React.useEffect(() => {
    debouncedSave();
  }, [debouncedSave, code]);

  return null;
}
