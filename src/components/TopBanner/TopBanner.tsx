import { BANNER_CONFIG } from '@/config/site';
import TopBannerClient from './TopBannerClient';
import { checkIsProUser } from '@/lib/isProUser';
import { getPurchasePower } from '@/lib/getPurchasePower';

export default async function TopBanner() {
  if (!BANNER_CONFIG.show) {
    return null;
  }

  const purchasePower = await getPurchasePower();

  if (purchasePower.currency === 'INR' && BANNER_CONFIG.isInternational) {
    return null;
  }

  const isProUser = await checkIsProUser();

  if (isProUser && !BANNER_CONFIG.showForProUser) {
    return null;
  }

  return <TopBannerClient />;
}
