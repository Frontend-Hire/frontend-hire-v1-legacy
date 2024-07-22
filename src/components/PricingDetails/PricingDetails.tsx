import { getPurchasePower } from '@/lib/getPurchasePower';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import BecomeProButton from '../BecomeProButton';
import { cn } from '@/lib/utils';

export default async function PricingDetails() {
  const { name, currencySymbol, curPrice, curPrice2 } =
    await getPurchasePower();

  const supabase = createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex flex-col items-center justify-center gap-10 text-center">
      <span className="font-bold text-link motion-safe:animate-fh-pulse">
        10+ Developers Have Taken The Pro Plan!
      </span>
      <h3 className="text-stroke max-w-[25ch] text-4xl uppercase tracking-widest text-card">
        Launch Price
      </h3>
      {name === 'India' && (
        <div className="space-y-1 text-sm font-bold text-blue-400">
          <p>Frontend Hire is made in 🇮🇳 India</p>
          <p>Indians pay the lowest price 🎉</p>
        </div>
      )}
      <div
        className={cn(
          'flex justify-center gap-4',
          name === 'India' && 'flex-col sm:flex-row',
        )}
      >
        <span
          aria-hidden="true"
          className="relative text-3xl font-medium text-muted after:absolute after:inset-0 after:m-auto after:h-1 after:w-full after:-rotate-[10deg] after:rounded after:bg-red-600 after:content-['']"
        >
          <CurrencySymbol>{currencySymbol}</CurrencySymbol>
          {curPrice2}
        </span>
        <p className="text-4xl font-bold">
          <CurrencySymbol>{currencySymbol}</CurrencySymbol>
          {curPrice}
        </p>
      </div>
      <div className="w-full space-y-2">
        {!user && (
          <p className="text-sm font-bold text-muted">
            We will first sign you in before making a purchase!
          </p>
        )}
        <BecomeProButton />
        <p className="text-xs font-bold text-muted">
          Pricing will increase as more content gets added!
        </p>
      </div>
    </div>
  );
}

function CurrencySymbol({ children }: React.PropsWithChildren) {
  return (
    <span className="inline-block -translate-y-4 text-[0.6em]">{children}</span>
  );
}
