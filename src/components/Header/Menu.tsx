import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import MenuLinkItem from './MenuLinkItem';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';

type Link = {
  label: string;
  isProtected?: boolean;
  path?: string;
  subLinks?: Link[];
};

const LINKS: Link[] = [
  {
    label: 'Skills',
    subLinks: [
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
    ],
  },
  {
    label: 'All Questions',
    path: '/questions',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
];

export default async function Menu() {
  const supabaseServerClient = createSupabaseServerClient();

  const {
    data: { session },
  } = await supabaseServerClient.auth.getSession();

  const renderLinks = () => {
    return LINKS.map((link) => {
      if (link.isProtected && session) {
        return (
          <NavigationMenuItem key={link.label}>
            <MenuLinkItem href={link.path || ''}>{link.label}</MenuLinkItem>
          </NavigationMenuItem>
        );
      }

      if (link.subLinks && link.subLinks.length !== 0) {
        return (
          <NavigationMenuItem key={link.label}>
            <NavigationMenuTrigger className="rounded-t-none">
              {link.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {link.subLinks.map((subLink) => (
                <MenuLinkItem key={subLink.path} href={subLink.path || ''}>
                  {subLink.label}
                </MenuLinkItem>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        );
      }

      return (
        <NavigationMenuItem key={link.label}>
          <MenuLinkItem href={link.path || ''}>{link.label}</MenuLinkItem>
        </NavigationMenuItem>
      );
    });
  };

  return (
    <div className="flex h-[40px] items-center justify-center bg-primary/60">
      <NavigationMenu>
        <NavigationMenuList>{renderLinks()}</NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
