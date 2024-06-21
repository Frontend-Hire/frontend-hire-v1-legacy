import CopyEmailOnClick from '@/components/CopyEmailOnClick';
import CustomHeading from '@/components/CustomHeading';
import SignInButton from '@/components/SignInButton';

type AuthErrorPageProps = {
  searchParams?: { error: string };
};

export default function AuthErrorPage({ searchParams }: AuthErrorPageProps) {
  return (
    <article className="flex flex-col gap-5">
      <CustomHeading
        title={`Auth Error${searchParams?.error ? `: ${searchParams.error}` : ''}`}
        subTitle="Oops. This was unexpected. You can try again or contact support."
      />
      <div className="flex w-fit flex-col gap-4">
        <SignInButton redirectTo="/questions" />
        <p>
          Contact support at <CopyEmailOnClick email="info@frontendhire.com" />
        </p>
      </div>
    </article>
  );
}
