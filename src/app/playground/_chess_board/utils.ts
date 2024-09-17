import { COLORS } from './constants';

export function getAlternateColor(color: string) {
  return color === COLORS.lightSquare ? COLORS.darkSquare : COLORS.lightSquare;
}
