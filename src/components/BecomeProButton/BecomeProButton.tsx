import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import ProSignInButton from './ProSignInButton';

export default async function BecomeProButton() {
  const supabase = createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? <div>Another button</div> : <ProSignInButton />;
}
