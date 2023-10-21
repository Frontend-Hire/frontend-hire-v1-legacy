import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import SignOut from './SignOut';

interface Props {
  picture?: string;
  name?: string;
}

export default async function AvatarDropdown({ picture, name }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hover:opacity-80">
        <Avatar>
          <AvatarImage src={picture} />
          <AvatarFallback>{(name && name[0]) || '?'}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <SignOut />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
