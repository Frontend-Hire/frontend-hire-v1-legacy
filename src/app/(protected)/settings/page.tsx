import Heading from '@/components/Heading';
import DeleteAccountButtonWithAlert from './_components/DeleteAccountButtonWithAlert';
import DeleteCodeSubmissionsButtonWithAlert from './_components/DeleteCodeSubmissionsButtonWithAlert';
import DeleteProjectSubmissionsButtonWithAlert from './_components/DeleteProjectSubmissionsButtonWithAlert';
import UserInfo from './_components/UserInfo';

export default function Settings() {
  return (
    <main className="flex flex-col gap-[20px] p-[10px] md:px-[100px] md:py-[20px] lg:px-[200px] xl:px-[250px]">
      <div className="flex flex-col gap-[15px] py-[10px] text-center">
        <Heading variant="h1">Settings</Heading>
      </div>
      <UserInfo />
      <div className="mt-[40px] flex flex-col items-center justify-center gap-[30px]">
        <DeleteCodeSubmissionsButtonWithAlert />
        <DeleteProjectSubmissionsButtonWithAlert />
        <DeleteAccountButtonWithAlert />
      </div>
    </main>
  );
}
