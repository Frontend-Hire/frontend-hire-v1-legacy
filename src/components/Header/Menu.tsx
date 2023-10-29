'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

const MENU_SKILL_LINKS = [
  {
    label: 'HTML',
    path: '/questions/HTML',
  },
  {
    label: 'CSS',
    path: '/questions/CSS',
  },
  {
    label: 'JavaScript',
    path: '/questions/JavaScript',
  },
  {
    label: 'React',
    path: '/questions/React',
  },
];

export default function Menu() {
  return (
    <div className="flex h-[40px] items-center justify-center bg-primary/60">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/questions" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} rounded-t-none`}
              >
                All Questions
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="rounded-t-none">
              Skills
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {MENU_SKILL_LINKS.map((skillLink) => (
                <Link
                  key={skillLink.path}
                  href={skillLink.path}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {skillLink.label}
                  </NavigationMenuLink>
                </Link>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
