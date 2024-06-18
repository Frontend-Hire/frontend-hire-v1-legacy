'use server';

import { headers } from 'next/headers';

export default async function getIPAction() {
  return headers().get('x-real-ip');
}
