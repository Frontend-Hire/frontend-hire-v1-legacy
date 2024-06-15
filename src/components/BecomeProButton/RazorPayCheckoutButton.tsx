'use client';

import React from 'react';
import Script from 'next/script';
import { Button } from '../ui/button';
import { createOrder, verifyPayment } from './razorpayActions';
import { User } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { Loader2Icon } from 'lucide-react';

type RazorPayCheckoutButtonProps = {
  user: User;
};

export default function RazorPayCheckoutButton({
  user,
}: RazorPayCheckoutButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
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
          setLoading(true);
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
          setLoading(false);
        }
      },
      prefill: {
        email: user.email,
        contact: user.phone ? `+${user.phone}` : '',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.on('payment.failed', (response: any) => {
      setError(response.error.reason);
    });
    paymentObject.open();
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
        <p className="text-sm font-bold">Powered by RazorPay</p>
      </div>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </>
  );
}
