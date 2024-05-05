'use client';

import React from 'react';
import { NotebookIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link, { LinkProps } from 'next/link';
import { cn } from '@/lib/utils';
import { SidebarProps } from './Sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

export default function MobileSidebar({ pages }: SidebarProps) {
  const { chapter } = useParams<{ chapter: string; courseId: string }>();
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="text-md w-full gap-2 md:hidden" variant="outline">
          <NotebookIcon />
          Course Menu
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <ScrollArea className="my-4 h-full pb-6 pl-2">
          {pages.map((item, index) => (
            <div key={index} className="flex flex-col space-y-2 pt-6">
              <MobileLink
                href={item[0]}
                onOpenChange={setOpen}
                className={cn(
                  'rounded px-2 py-1 text-muted transition-colors hover:bg-[#140012] hover:text-muted-foreground',
                  chapter === item[0] && 'bg-[#290025] text-[#FF5CF2]',
                )}
              >
                {item[1]}
              </MobileLink>
            </div>
          ))}
        </ScrollArea>
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
