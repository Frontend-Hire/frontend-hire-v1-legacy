import Heading from '@/components/Heading';
import SignInButton from '@/components/SignInButton';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import Footer from '../Footer';
import Header from '../Header';

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
        <div className="p-[10px flex flex-col items-start gap-[20px] md:px-[100px] md:py-[20px] lg:px-[200px] xl:px-[250px]">
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
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
