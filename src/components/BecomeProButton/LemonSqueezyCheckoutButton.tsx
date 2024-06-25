'use client';

import React from 'react';
import Script from 'next/script';
import { Button } from '../ui/button';
import { User } from '@supabase/supabase-js';

const CHECKOUT_URL = process.env.NEXT_PUBLIC_LEMONSQUEEZY_PRODUCT_CHECKOUT_URL;

type LemonSqueezyCheckoutButtonProps = {
  user: User;
};

export default function LemonSqueezyCheckoutButton({
  user,
}: LemonSqueezyCheckoutButtonProps) {
  const lemonLoaded = () => {
    window.createLemonSqueezy();
  };

  const processPayment = async () => {
    const checkoutUrl = `${CHECKOUT_URL}?embed=1&media=0&checkout[email]=${user.email}&checkout[custom][user_id]=${user.id}`;

    checkoutUrl && window.LemonSqueezy.Url.Open(checkoutUrl);
  };

  return (
    <>
      <div className="space-y-4">
        <Button
          size="lg"
          className="w-full max-w-xs text-lg font-bold"
          onClick={processPayment}
        >
          Pay Now!
        </Button>
        <p className="mx-auto w-fit rounded-md bg-red-300 px-2 py-1 font-bold text-red-800">
          Avoid PayPal Payments as we cannot give programmatic access to Pro
          plan and would need manual confirmations.
        </p>
        <p className="text-sm font-bold">Powered by LemonSqueezy</p>
      </div>
      <Script
        src="https://app.lemonsqueezy.com/js/lemon.js"
        onLoad={lemonLoaded}
      />
    </>
  );
}
