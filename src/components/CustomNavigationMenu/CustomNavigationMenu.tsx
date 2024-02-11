'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  AlbumIcon,
  FileQuestionIcon,
  FolderGit2Icon,
  LibraryBigIcon,
  SpeechIcon,
} from 'lucide-react';
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
          <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-1">
              <ListItem href="/courses">
                <LibraryBigIcon /> Courses
              </ListItem>
              <ListItem href="/guides">
                <AlbumIcon />
                Guides
              </ListItem>
            </ul>
          </NavigationMenuContent>
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
