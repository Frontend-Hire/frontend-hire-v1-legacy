import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import MenuLinkItem from './MenuLinkItem';

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

export default async function Menu() {
  const cookieStore = cookies();
  const supabaseServerClient = createServerComponentClient({
    cookies: () => cookieStore,
  });

  const {
    data: { session },
  } = await supabaseServerClient.auth.getSession();

  return (
    <div className="flex h-[40px] items-center justify-center bg-primary/60">
      <NavigationMenu>
        <NavigationMenuList>
          {session && (
            <NavigationMenuItem>
              <MenuLinkItem href="/dashboard">Dashboard</MenuLinkItem>
            </NavigationMenuItem>
          )}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="rounded-t-none">
              Skills
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {MENU_SKILL_LINKS.map((skillLink) => (
                <MenuLinkItem key={skillLink.path} href={skillLink.path}>
                  {skillLink.label}
                </MenuLinkItem>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <MenuLinkItem href="/questions">All Questions</MenuLinkItem>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
