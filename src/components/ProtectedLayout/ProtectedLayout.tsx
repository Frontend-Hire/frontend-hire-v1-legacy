import Heading from '@/components/Heading';
import SignInButton from '@/components/SignInButton';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import Footer from '../Footer';
import Header from '../Header';

type ProtectedLayoutProps = {
  headline?: string;
  message?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  isFooterCompact?: boolean;
};

export default async function ProtectedLayout({
  headline = 'Our platform is free for registered users!',
  message = 'So, sign in for free with your Google account for unrestricted access to questions, projects and interviews!',
  children,
  showHeader = true,
  showFooter = true,
  isFooterCompact = true,
}: React.PropsWithChildren<ProtectedLayoutProps>) {
  const supabaseServerClient = createSupabaseServerClient();

  const { data, error } = await supabaseServerClient.auth.getUser();
  if (error || !data?.user) {
    return (
      <>
        <Header />
        <div className="flex h-full grow flex-col items-start gap-4 p-2 md:px-[100px] md:py-4 lg:px-[200px] xl:px-[250px]">
          <div className="flex flex-col gap-4 py-2">
            <Heading variant="h1">{headline}</Heading>
            <p className="text-sm text-gray-300">{message}</p>
          </div>
          <SignInButton />
          <p className="text-sm text-gray-300">
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
      {showHeader && <Header />}
      {children}
      {showFooter && <Footer isCompact={isFooterCompact} />}
    </>
  );
}
