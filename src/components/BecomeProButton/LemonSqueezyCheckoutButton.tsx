'use client';

import React from 'react';
import Script from 'next/script';
import { Button } from '../ui/button';
import { Loader2Icon } from 'lucide-react';
import { getCheckoutURL } from './lemonSqueezyActions';

const PRODUCT_VARIANT = 410423;

export default function LemonSqueezyCheckoutButton() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const lemonLoaded = () => {
    window.createLemonSqueezy();
  };

  const processPayment = async () => {
    let checkoutUrl: string | undefined = '';

    try {
      setLoading(true);
      checkoutUrl = await getCheckoutURL(PRODUCT_VARIANT);
    } catch (error) {
      const errorResponse = error as Error;
      setLoading(false);
      setError(errorResponse.message);
    } finally {
      setLoading(false);
    }

    checkoutUrl && window.LemonSqueezy.Url.Open(checkoutUrl);
  };

  return (
    <>
      <div className="space-y-4">
        <Button
          size="lg"
          className="w-full max-w-xs text-lg font-bold"
          disabled={loading}
          onClick={processPayment}
        >
          {loading ? (
            <>
              <Loader2Icon className="mr-2 h-4 w-4 animate-spin" /> Verifying
              Payment
            </>
          ) : (
            'Pay Now!'
          )}
        </Button>
        {error && <p className="font-bold text-red-500">{error}</p>}
        <p className="text-sm font-bold">Powered by LemonSqueezy</p>
      </div>
      <Script
        src="https://app.lemonsqueezy.com/js/lemon.js"
        onLoad={lemonLoaded}
      />
    </>
  );
}
