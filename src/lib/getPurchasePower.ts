'use server';

import { headers } from 'next/headers';

const COUNTRIES: Record<
  string,
  {
    name: string;
    currency: string;
    currencySymbol: string;
    curPrice: number;
    curPrice2: number;
  }
> = {
  IN: {
    name: 'India',
    currency: 'INR',
    currencySymbol: '₹',
    curPrice: 2999,
    curPrice2: 3999,
  },
  US: {
    name: 'United States',
    currency: 'USD',
    currencySymbol: '$',
    curPrice: 89,
    curPrice2: 119,
  },
};

export async function getPurchasePower() {
  return (
    COUNTRIES[headers().get('x-vercel-ip-country') as string] || COUNTRIES.US
  );
}
