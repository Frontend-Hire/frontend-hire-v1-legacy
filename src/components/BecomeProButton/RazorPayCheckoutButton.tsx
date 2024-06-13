'use client';

import Script from 'next/script';
import { Button } from '../ui/button';
import { createOrder, verifyPayment } from './razorpayActions';
import { User } from '@supabase/supabase-js';
import Razorpay from 'razorpay';
import { useRouter } from 'next/navigation';
import React from 'react';

type RazorPayCheckoutButtonProps = {
  user: User;
};

export default function RazorPayCheckoutButton({
  user,
}: RazorPayCheckoutButtonProps) {
  const router = useRouter();
  const [error, setError] = React.useState('');

  const processPayment = async () => {
    const order = await createOrder();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      amount: order.amount,
      currency: order.currency,
      name: 'One Time Payment to Become Pro Plan | Frontend Hire',
      description:
        'Pay once and get access to pro plan for life time on Frontend Hire',
      order_id: order.id,
      handler: async function (response: any) {
        try {
          const data = {
            userId: user.id,
            orderCreationId: order.id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };

          const verification = await verifyPayment(data);

          if (verification) {
            router.replace('/pro');
          }
        } catch (error) {
          const errorResponse = error as Error;
          setError(errorResponse.message);
        }
      },
      prefill: {
        email: user.email,
        contact: user.phone ? `+${user.phone}` : '',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <div className="space-y-1">
        <Button onClick={processPayment}>Pay Now</Button>
        {error && <p className="font-bold text-red-500">{error}</p>}
        <p className="text-sm font-bold">Powered by RazorPay</p>
      </div>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </>
  );
}
