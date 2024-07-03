import useSWR from 'swr';
import getIPAction from './getIPAction';

export default function useIP() {
  return useSWR('ip', getIPAction);
}
