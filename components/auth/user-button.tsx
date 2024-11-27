'use client';

import {FaUser} from 'react-icons/fa';
import {ExitIcon} from '@radix-ui/react-icons';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import {
  Avatar,
  AvatarImage,
  AvatarFallback
} from '@/components/ui/avatar';
import {useCurrentUser} from '@/hooks/use-current-user';
import {LogoutButton} from '@/components/auth/logout-button';
import {Button} from "@/components/ui/button";

export const UserButton = () => {
  const user = useCurrentUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ''}/>
          <AvatarFallback className='bg-neutral-900/90'>
            <FaUser className='text-white'/>
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-40' align='end'>
        <LogoutButton>
          <DropdownMenuItem>
            <Button variant='destructive' size='sm' className='w-full'>
              <ExitIcon className='h-4 w-4 mr-2'/>
              Logout
            </Button>
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};