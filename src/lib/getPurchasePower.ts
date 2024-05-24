import { headers } from 'next/headers';

const COUNTRIES: Record<
  string,
  {
    name: string;
    currency: string;
    currencySymbol: string;
    curPrice: number;
    curPrice2: number;
    curPrice3: number;
  }
> = {
  IN: {
    name: 'India',
    currency: 'INR',
    currencySymbol: '₹',
    curPrice: 2999,
    curPrice2: 3999,
    curPrice3: 4999,
  },
  US: {
    name: 'United States',
    currency: 'USD',
    currencySymbol: '$',
    curPrice: 89,
    curPrice2: 119,
    curPrice3: 139,
  },
  GB: {
    name: 'United Kingdom',
    currency: 'GBP',
    currencySymbol: '£',
    curPrice: 79,
    curPrice2: 99,
    curPrice3: 119,
  },
  CA: {
    name: 'Canada',
    currency: 'CAD',
    currencySymbol: '$',
    curPrice: 69,
    curPrice2: 89,
    curPrice3: 109,
  },
  PK: {
    name: 'Pakistan',
    currency: 'PKR',
    currencySymbol: 'Rs',
    curPrice: 5399,
    curPrice2: 7299,
    curPrice3: 8999,
  },
  REST: {
    name: 'Rest of the world',
    currency: 'USD',
    currencySymbol: '$',
    curPrice: 79,
    curPrice2: 109,
    curPrice3: 129,
  },
};

export function getPurchasePower() {
  return (
    COUNTRIES[headers().get('x-vercel-ip-country') as string] || COUNTRIES.REST
  );
}
