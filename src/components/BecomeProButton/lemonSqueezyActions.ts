'use server';

import { giveProAccess } from './proAction';

export const processProPlan = async (data: any) => {
  const userId = data.meta.custom_data.user_id;

  await giveProAccess(userId);
};
