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
import { FileQuestionIcon, FolderGit2Icon, SpeechIcon } from 'lucide-react';
import Link from 'next/link';

export default function CustomNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Practice</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-1">
              <ListItem href="/questions">
                <FileQuestionIcon /> Questions
              </ListItem>
              <ListItem href="/projects">
                <FolderGit2Icon />
                Projects
              </ListItem>
              <ListItem href="/interviews">
                <SpeechIcon /> Interviews
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/courses" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Courses
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/guides" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Guides
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
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
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className="flex items-center gap-2 rounded p-3 outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
          {children}
        </NavigationMenuLink>
      </Link>
    </li>
  );
}
