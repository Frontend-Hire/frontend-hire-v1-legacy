import { PhoneCallIcon } from 'lucide-react';

import { Metadata } from 'next';
import PhoneScreening from './_components/PhoneScreening';
import { SpeechSynthesisProvider } from './_context/SpeechSynthesisContext';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import SettingsProvider from './_context/SettingsContext';
import CustomHeading from '@/components/CustomHeading';

export const metadata: Metadata = {
  title: 'Simulated Phone Screening | Frontend Hire',
  description: 'Simulated and Real Interviews for Frontend Developers',
  openGraph: {
    title: 'Simulated Phone Screening | Frontend Hire',
    description: 'Simulated and Real Interviews for Frontend Developers',
    url: 'https://frontendhire.com/interviews/simulated-phone-screening',
  },
};

export default async function SimulatedPhoneScreening() {
  const supabaseServerClient = createSupabaseServerClient();

  const {
    data: { session },
  } = await supabaseServerClient.auth.getSession();

  return (
    <main className="container flex grow flex-col gap-[20px] py-[10px] md:py-[20px]">
      <CustomHeading
        title="Simulated Phone Screening"
        subTitle="One of the first rounds, so first impression should be great"
        icon={<PhoneCallIcon size={60} />}
      />

      <SettingsProvider>
        <SpeechSynthesisProvider>
          <PhoneScreening
            candidateName={session?.user.user_metadata?.name || ''}
          />
        </SpeechSynthesisProvider>
      </SettingsProvider>
    </main>
  );
}
