import Header from '@/components/Header';
import Heading from '@/components/Heading';
import SignInButton from '@/components/SignInButton';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabaseServerClient = createSupabaseServerClient();
  const {
    data: { session },
  } = await supabaseServerClient.auth.getSession();

  if (!session) {
    return (
      <>
        <Header />
        <div className="flex flex-col items-start justify-center gap-6 pt-4">
          <div className="flex flex-col gap-[15px] py-[10px]">
            <Heading variant="h1">
              Our platform is free for registered users!
            </Heading>
            <p className="text-sm text-muted">
              So, sign in for free with your Google account for unrestricted
              access to questions and projects!
            </p>
          </div>
          <SignInButton />
          <p className="text-sm text-muted">
            We will never share your data with anyone without your permission!
            Also, you can delete your account anytime you want through settings
            (once signed in, click on your avatar to open a menu with settings).
          </p>
        </div>
      </>
    );
  }

  return <>{children}</>;
}
