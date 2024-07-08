import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { getMainNavLinks } from '@/config/site';
import { checkIsProUser } from '@/lib/isProUser';
import Link from 'next/link';

export default async function CustomNavigationMenu() {
  const isProUser = await checkIsProUser();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {getMainNavLinks(isProUser).map((menu) =>
          menu.items.length === 1 ? (
            <ListItem key={menu.title} href={menu.items[0].href}>
              {menu.items[0].title}
            </ListItem>
          ) : (
            <NavigationMenuItem key={menu.title}>
              <NavigationMenuTrigger>{menu.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[220px] gap-3 p-1">
                  {menu.items.map((link) => (
                    <ListItem key={link.title} href={link.href}>
                      {<link.icon />} {link.title}
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
        prefetch={false}
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
