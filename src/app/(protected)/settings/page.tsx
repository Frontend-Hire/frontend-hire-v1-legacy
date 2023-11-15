import Heading from '@/components/Heading';
import DeleteAccountButtonWithAlert from './_components/DeleteAccountButtonWithAlert';
import DeleteCodeSubmissionsButtonWithAlert from './_components/DeleteCodeSubmissionsButtonWithAlert';
// import DeleteProjectSubmissionsButtonWithAlert from './_components/DeleteProjectSubmissionsButtonWithAlert';

export default function Settings() {
  return (
    <main>
      <Heading className="text-center" variant="h1">
        Settings
      </Heading>
      <div className="mt-[40px] flex flex-col items-center justify-center gap-[30px]">
        <DeleteCodeSubmissionsButtonWithAlert />
        {/* <DeleteProjectSubmissionsButtonWithAlert /> */}
        <DeleteAccountButtonWithAlert />
      </div>
    </main>
  );
}
