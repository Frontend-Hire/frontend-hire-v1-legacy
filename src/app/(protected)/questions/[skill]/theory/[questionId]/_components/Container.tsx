import PrimaryLayout from '../_layout/PrimaryLayout';
import Header from './Header';

export default function Container() {
  return <PrimaryLayout header={<Header />}></PrimaryLayout>;
}
