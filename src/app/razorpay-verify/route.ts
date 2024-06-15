import { headers } from 'next/headers';
import crypto from 'crypto';

export const POST = async (request: Request) => {
  const keySecret = process.env.RAZORPAY_WEBHOOK_SECRET!;
  const body = await request.text();

  const sig = crypto.createHmac('sha256', keySecret).update(body).digest('hex');

  const headersList = headers();
  const razorpaySignature = headersList.get('x-razorpay-signature');

  console.log(body);
  console.log(sig, razorpaySignature);

  return Response.json({ status: 'ok' });
};
