import { headers } from 'next/headers';
import crypto from 'crypto';
import { giveProAccessBasedOnOrderId } from '@/components/BecomeProButton/proAction';

export const POST = async (request: Request) => {
  const keySecret = process.env.RAZORPAY_WEBHOOK_SECRET!;
  const body = await request.text();

  const sig = crypto.createHmac('sha256', keySecret).update(body).digest('hex');

  const headersList = headers();
  const razorpaySignature = headersList.get('x-razorpay-signature');

  if (sig !== razorpaySignature) {
    return Response.json({ status: 'ok' });
  }

  const jsonData = JSON.parse(body);

  await giveProAccessBasedOnOrderId(jsonData.payload.payment.entity.order_id);

  return Response.json({ status: 'ok' });
};
