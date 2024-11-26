'use client';

import React from 'react';
import {usePathname, useRouter} from 'next/navigation';

import {
  Dialog,
  DialogContent, DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import {LoginForm} from '@/components/auth/login-form';

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: 'modal' | 'redirect'
  asChild?: boolean;
}
const LoginButton = ({
  mode = 'redirect',
  children,
  asChild
                     } : LoginButtonProps) => {
  const router = useRouter();
  const pathname = usePathname()

  const onClick = () => {
    router.push(`/auth/login?callbackUrl=${pathname}`);
  }

  if (mode === 'modal') {
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>
          {children}
        </DialogTrigger>
        <DialogContent className='p-0 w-auto bg-transparent border-none'>
          <DialogTitle hidden>Login Form</DialogTitle>
          <LoginForm />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <span
      className="cursor-pointer"
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default LoginButton;
