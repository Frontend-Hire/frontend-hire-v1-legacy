import { Metadata } from 'next';
import DeleteAccountButtonWithAlert from './_components/DeleteAccountButtonWithAlert';
import DeleteCodeSubmissionsButtonWithAlert from './_components/DeleteCodeSubmissionsButtonWithAlert';
import DeleteProjectSubmissionsButtonWithAlert from './_components/DeleteProjectSubmissionsButtonWithAlert';
import UserInfo from './_components/UserInfo';
import CustomHeading from '@/components/CustomHeading';

export const metadata: Metadata = {
  title: 'Settings | Frontend Hire',
  description: 'Manage all your account related stuff',
  openGraph: {
    title: 'Settings | Frontend Hire',
    description: 'Manage all your account related stuff',
    url: 'https://frontendhire.com/settings',
  },
};

export default function Settings() {
  return (
    <main className="flex h-full flex-col gap-[20px] p-[10px] md:px-[100px] md:py-[20px] lg:px-[200px] xl:px-[250px]">
      <CustomHeading
        title="Settings"
        subTitle="Manage all your account related stuff"
      />

      <UserInfo />
      <div className="mt-[40px] flex flex-col items-center justify-center gap-[30px]">
        <DeleteCodeSubmissionsButtonWithAlert />
        <DeleteProjectSubmissionsButtonWithAlert />
        <DeleteAccountButtonWithAlert />
      </div>
    </main>
  );
}
