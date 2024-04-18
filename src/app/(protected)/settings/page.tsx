import { Metadata } from 'next';
import DeleteAccountButtonWithAlert from './_components/DeleteAccountButtonWithAlert';
import DeleteCodeSubmissionsButtonWithAlert from './_components/DeleteCodeSubmissionsButtonWithAlert';
import DeleteProjectSubmissionsButtonWithAlert from './_components/DeleteProjectSubmissionsButtonWithAlert';
import UserInfo from './_components/UserInfo';
import CustomHeading from '@/components/CustomHeading';
import { openGraphShared } from '@/app/shared-metadata';

export const metadata: Metadata = {
  title: 'Settings | Frontend Hire',
  description: 'Manage all your account related stuff',
  openGraph: {
    ...openGraphShared,
    title: 'Settings | Frontend Hire',
    description: 'Manage all your account related stuff',
  },
};

export default function Settings() {
  return (
    <main className="flex h-full flex-col gap-4 p-2 md:px-[100px] md:py-4 lg:px-[200px] xl:px-[250px]">
      <CustomHeading
        title="Settings"
        subTitle="Manage all your account related stuff"
      />

      <UserInfo />
      <div className="mt-10 flex flex-col items-center justify-center gap-[30px]">
        <DeleteCodeSubmissionsButtonWithAlert />
        <DeleteProjectSubmissionsButtonWithAlert />
        <DeleteAccountButtonWithAlert />
      </div>
    </main>
  );
}
