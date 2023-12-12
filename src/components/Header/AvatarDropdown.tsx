import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import SignOut from './SignOut';
import SettingsLink from './SettingsLink';

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
          <AvatarFallback className="bg-primary">
            {(name && name[0]) || '?'}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <SettingsLink />
        <SignOut />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
