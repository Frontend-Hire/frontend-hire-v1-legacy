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
import { MAIN_NAV_LINKS } from '@/config/site';

export default function StaticMobileMenu() {
  const [open, setOpen] = React.useState(false);

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
                          className="text-muted-foreground hover:text-primary"
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
        <Button className="rounded-2 w-fit p-2" asChild>
          <Link prefetch={false} href={'/questions'}>
            Practice Now
          </Link>
        </Button>
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
