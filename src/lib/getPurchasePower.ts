'use server';

import { headers } from 'next/headers';

const COUNTRIES: Record<
  string,
  {
    name: string;
    currency: string;
    currencySymbol: string;
    curPrice: string;
    curPrice2: string;
  }
> = {
  IN: {
    name: 'India',
    currency: 'INR',
    currencySymbol: '₹',
    curPrice: '2,999',
    curPrice2: '3,999',
  },
  US: {
    name: 'United States',
    currency: 'USD',
    currencySymbol: '$',
    curPrice: '59',
    curPrice2: '89',
  },
};

export async function getPurchasePower() {
  return (
    COUNTRIES[headers().get('x-vercel-ip-country') as string] || COUNTRIES.US
  );
}
