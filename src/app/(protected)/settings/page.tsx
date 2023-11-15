import Heading from '@/components/Heading';
import DeleteAccountButtonWithDialog from './_components/DeleteAccountButtonWithDialog';
import DeleteCodeSubmissionsButtonWithDialog from './_components/DeleteCodeSubmissionsButtonWithDialog';
import DeleteProjectSubmissionsButtonWithDialog from './_components/DeleteProjectSubmissionsButtonWithDialog';

export default function Settings() {
  return (
    <main>
      <Heading className="text-center" variant="h1">
        Settings
      </Heading>
      <div className="mt-[40px] flex flex-col items-center justify-center gap-[30px]">
        <DeleteCodeSubmissionsButtonWithDialog />
        <DeleteProjectSubmissionsButtonWithDialog />
        <DeleteAccountButtonWithDialog />
      </div>
    </main>
  );
}
