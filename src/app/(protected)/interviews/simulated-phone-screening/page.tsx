import Heading from '@/components/Heading';
import { PhoneCallIcon } from 'lucide-react';

import { Metadata } from 'next';
import PhoneScreening from './_components/PhoneScreening';
import { SpeechSynthesisProvider } from './_context/SpeechSynthesisContext';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';

export const metadata: Metadata = {
  title: 'Simulated Phone Screening | Frontend Hire',
  description: 'Simulated and Real Interviews for Frontend Developers',
};

export default async function SimulatedPhoneScreening() {
  const supabaseServerClient = createSupabaseServerClient();

  const {
    data: { session },
  } = await supabaseServerClient.auth.getSession();

  return (
    <main className="flex flex-col gap-[20px] p-[10px] md:px-[100px] md:py-[20px] lg:px-[200px] xl:px-[250px]">
      <div className="flex justify-between gap-[10px]">
        <div className="flex flex-col gap-[15px] py-[10px]">
          <Heading variant="h1">Simulated Phone Screening</Heading>
          <p className="text-sm text-muted">
            One of the first rounds, so first impression should be great
          </p>
        </div>
        <PhoneCallIcon size={60} />
      </div>
      <SpeechSynthesisProvider>
        <PhoneScreening
          candidateName={session?.user.user_metadata?.name || ''}
        />
      </SpeechSynthesisProvider>
    </main>
  );
}
