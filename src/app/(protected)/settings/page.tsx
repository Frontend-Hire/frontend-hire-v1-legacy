import DeleteAccountButtonWithAlert from './_components/DeleteAccountButtonWithAlert';
import DeleteCodeSubmissionsButtonWithAlert from './_components/DeleteCodeSubmissionsButtonWithAlert';
import UserInfo from './_components/UserInfo';
import CustomHeading from '@/components/CustomHeading';
import ProtectedLayout from '@/components/ProtectedLayout';
import { getMetadata } from '@/lib/getMetadata';

export const metadata = getMetadata({
  title: 'Settings | Frontend Hire',
  description: 'Manage all your account related stuff',
  canonical: '/settings',
});

export default function Settings() {
  return (
    <ProtectedLayout>
      <main className="flex h-full flex-col gap-4 p-2 md:px-[100px] md:py-4 lg:px-[200px] xl:px-[250px]">
        <CustomHeading
          title="Settings"
          subTitle="Manage all your account related stuff"
        />

        <UserInfo />
        <div className="mt-10 flex flex-col items-center justify-center gap-8">
          <DeleteCodeSubmissionsButtonWithAlert />
          <DeleteAccountButtonWithAlert />
        </div>
      </main>
    </ProtectedLayout>
  );
}
