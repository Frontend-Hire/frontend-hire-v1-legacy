import { processProPlan } from '@/components/BecomeProButton/lemonSqueezyActions';
import { webhookHasMeta } from '@/lib/typeguards';
import crypto from 'crypto';

export const POST = async (request: Request) => {
  if (!process.env.LEMONSQUEEZY_WEBHOOK_SECRET) {
    return new Response('Lemon Squeezy Webhook Secret not set in .env', {
      status: 500,
    });
  }

  const rawBody = await request.text();
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;

  const hmac = crypto.createHmac('sha256', secret);
  const digest = Buffer.from(hmac.update(rawBody).digest('hex'), 'utf8');
  const signature = Buffer.from(
    request.headers.get('X-Signature') || '',
    'utf8',
  );

  if (!crypto.timingSafeEqual(digest, signature)) {
    throw new Error('Invalid signature.');
  }

  const data = JSON.parse(rawBody) as unknown;
  if (webhookHasMeta(data)) {
    await processProPlan(data);
    return new Response('OK', { status: 200 });
  }

  return new Response('Data invalid', { status: 400 });
};
