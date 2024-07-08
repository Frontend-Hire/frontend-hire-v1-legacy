import { PhoneCallIcon } from 'lucide-react';

import PhoneScreening from './_components/PhoneScreening';
import { SpeechSynthesisProvider } from './_context/SpeechSynthesisContext';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import SettingsProvider from './_context/SettingsContext';
import CustomHeading from '@/components/CustomHeading';
import ProtectedLayout from '@/components/ProtectedLayout';
import PremiumProtectedContentLayout from '@/components/PremiumProtectedContentLayout';
import { getMetadata } from '@/lib/getMetadata';

export const metadata = getMetadata({
  title: 'Simulated Phone Screening | Frontend Hire',
  description: 'Simulated and Real Interviews for Frontend Developers',
});

export default async function SimulatedPhoneScreening() {
  const supabaseServerClient = createSupabaseServerClient();

  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();

  return (
    <ProtectedLayout>
      <PremiumProtectedContentLayout>
        <main className="container flex grow flex-col gap-4 py-2 md:py-4">
          <CustomHeading
            title="Simulated Phone Screening"
            subTitle="One of the first rounds, so first impression should be great"
            icon={<PhoneCallIcon size={60} />}
          />

          <SettingsProvider>
            <SpeechSynthesisProvider>
              <PhoneScreening candidateName={user?.user_metadata?.name || ''} />
            </SpeechSynthesisProvider>
          </SettingsProvider>
        </main>
      </PremiumProtectedContentLayout>
    </ProtectedLayout>
  );
}
