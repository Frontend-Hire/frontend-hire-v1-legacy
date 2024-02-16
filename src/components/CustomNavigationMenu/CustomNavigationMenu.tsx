'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { MENU_LINKS } from '@/config/site';
import Link from 'next/link';

export default function CustomNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {MENU_LINKS.map((menu) =>
          menu.items.length === 1 ? (
            <ListItem key={menu.title} href={menu.items[0].href}>
              {menu.items[0].title}
            </ListItem>
          ) : (
            <NavigationMenuItem key={menu.title}>
              <NavigationMenuTrigger>{menu.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-3 p-1">
                  {menu.items.map(({ title, href, icon: Icon }) => (
                    <ListItem key={title} href={href}>
                      {<Icon />} {title}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ),
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

type ListItemProps = {
  href: string;
};

function ListItem({ children, href }: React.PropsWithChildren<ListItemProps>) {
  return (
    <li>
      <Link
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        legacyBehavior
        passHref
      >
        <NavigationMenuLink className="flex items-center gap-2 text-nowrap rounded p-3 outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
          {children}
        </NavigationMenuLink>
      </Link>
    </li>
  );
}
