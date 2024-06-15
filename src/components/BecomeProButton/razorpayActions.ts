'use server';

import { razorpayInstance } from '@/lib/payments/razorpay';
import crypto from 'crypto';
import { giveProAccess } from './proAction';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';

const generatedSignature = (
  razorpayOrderId: string,
  razorpayPaymentId: string,
) => {
  const keySecret = process.env.RAZORPAY_KEY_SECRET!;
  if (!keySecret) {
    throw new Error(
      'Razorpay key secret is not defined in environment variables.',
    );
  }
  const sig = crypto
    .createHmac('sha256', keySecret)
    .update(razorpayOrderId + '|' + razorpayPaymentId)
    .digest('hex');
  return sig;
};

export const createOrder = async () => {
  const supabase = createSupabaseServerClient();

  const order = await razorpayInstance.orders.create({
    amount: 299900,
    currency: 'INR',
  });

  if (order.id) {
    const { error } = await supabase.from('razorpay_orders').insert({
      order_id: order.id,
      amount: +order.amount,
      currency: order.currency,
    });

    if (error) {
      console.log(error);
    }
  }

  return order;
};

type VerifyPaymentData = {
  userId: string;
  orderCreationId: string;
  razorpayPaymentId: string;
  razorpayOrderId: string;
  razorpaySignature: string;
};

export const verifyPayment = async (data: VerifyPaymentData) => {
  const signature = generatedSignature(
    data.orderCreationId,
    data.razorpayPaymentId,
  );

  if (signature !== data.razorpaySignature) {
    throw new Error(
      'Oops, this was unexpected. Contact support. Sorry for the inconvenience.',
    );
  }

  // GIVE ACCESS TO PRO PLAN
  const { error } = await giveProAccess(data.userId);

  if (error) {
    throw new Error(
      'Oops, this was unexpected. Contact support. Sorry for the inconvenience.',
    );
  }

  return true;
};
