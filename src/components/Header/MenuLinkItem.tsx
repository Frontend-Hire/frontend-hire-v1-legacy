'use client';

import Link from 'next/link';
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';

interface Props {
  children: React.ReactNode;
  href: string;
}

const MenuLinkItem = ({ children, href }: Props) => {
  return (
    <Link href={href} legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        {children}
      </NavigationMenuLink>
    </Link>
  );
};

export default MenuLinkItem;
