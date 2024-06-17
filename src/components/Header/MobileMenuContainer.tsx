'use client';

import React from 'react';
import { MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '../ui/button';
import VisuallyHidden from '../ui/visually-hidden';
import Link, { LinkProps } from 'next/link';
import HeaderLogo from '../HeaderLogo';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ScrollArea } from '../ui/scroll-area';
import { User } from '@supabase/supabase-js';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import SignInButton from '../SignInButton';
import createSupabaseBrowserClient from '@/lib/supabase/supabaseBrowserClient';
import { MAIN_NAV_LINKS } from '@/config/site';

type MobileMenuProps = {
  user?: User | null;
};

export default function MobileMenuContainer({ user }: MobileMenuProps) {
  const supabaseBrowserClient = createSupabaseBrowserClient();
  const router = useRouter();

  const [open, setOpen] = React.useState(false);

  const handleSignOut = async () => {
    await supabaseBrowserClient.auth.signOut();
    router.replace('/');
    router.refresh();
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="sm:hidden" variant="ghost">
          <MenuIcon />
          <VisuallyHidden>Toggle Menu</VisuallyHidden>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <MobileLink href="/" onOpenChange={setOpen}>
          <HeaderLogo />
        </MobileLink>
        <ScrollArea className="my-4 pb-6 pl-2">
          <div className="flex flex-col space-y-2">
            {MAIN_NAV_LINKS.map((item, index) => (
              <div key={index} className="flex flex-col space-y-3 pt-6">
                <h4 className="font-medium">{item.title}</h4>
                {item?.items?.length &&
                  item.items.map((item) => (
                    <React.Fragment key={item.href}>
                      {item.href ? (
                        <MobileLink
                          href={item.href}
                          onOpenChange={setOpen}
                          className="text-muted hover:text-muted-foreground"
                        >
                          {item.title}
                        </MobileLink>
                      ) : (
                        item.title
                      )}
                    </React.Fragment>
                  ))}
              </div>
            ))}
          </div>
        </ScrollArea>

        <div>
          {user ? (
            <div className="flex flex-col gap-4">
              <h4 className="font-medium">Account</h4>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={user.user_metadata.picture} />
                  <AvatarFallback className="bg-primary">
                    {(user.user_metadata.name && user.user_metadata.name[0]) ||
                      '?'}
                  </AvatarFallback>
                </Avatar>
                <span className="truncate">{user.user_metadata.email}</span>
              </div>
              <MobileLink
                className="text-muted-foreground hover:text-primary"
                href="/settings"
                onOpenChange={setOpen}
              >
                Settings
              </MobileLink>

              <Button className="rounded-2 w-fit p-2" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          ) : (
            <SignInButton />
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      prefetch={false}
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
