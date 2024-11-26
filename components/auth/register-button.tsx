'use client';

import React from 'react';
import {useRouter} from 'next/navigation';

import {
    Dialog,
    DialogContent, DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';

import {RegisterForm} from "@/components/auth/register-form";

interface RegisterButtonProps {
    children: React.ReactNode;
    mode?: 'modal' | 'redirect'
    asChild?: boolean;
}
const RegisterButton = ({
                         mode = 'redirect',
                         children,
                         asChild
                     } : RegisterButtonProps) => {
    const router = useRouter();

    const onClick = () => {
        router.push('/auth/register')
    }

    if (mode === 'modal') {
        return (
            <Dialog>
                <DialogTrigger asChild={asChild}>
                    {children}
                </DialogTrigger>
                <DialogContent className='p-0 w-auto bg-transparent border-none'>
                    <DialogTitle hidden>Register Form</DialogTitle>
                    <RegisterForm />
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

export default RegisterButton;
