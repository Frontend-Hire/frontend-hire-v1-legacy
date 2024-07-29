import { differenceInDays } from 'date-fns';

export function isNew(date: Date | undefined) {
  if (!date) {
    return false;
  }

  return differenceInDays(Date.now(), new Date(date)) < 20;
}
