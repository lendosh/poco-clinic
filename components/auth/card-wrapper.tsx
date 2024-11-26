'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/components/ui/card';
import {BackButton} from '@/components/auth/back-button';
import {Header} from "@/components/card-header";

interface CardWrapperProps {
  children: React.ReactNode;
  mainHeaderLabel: string;
  secondaryHeaderLabel?: string;
  backButtonLabel: string;
  backButtonHref: string;
}

export const CardWrapper = ({
                              children,
                              mainHeaderLabel,
                              secondaryHeaderLabel,
                              backButtonLabel,
                              backButtonHref
                            }: CardWrapperProps) => {
  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader>
        <Header mainLabel={mainHeaderLabel} secondaryLabel={secondaryHeaderLabel}/>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
        <BackButton
          label={backButtonLabel}
          href={backButtonHref}
        />
      </CardFooter>
    </Card>
  );
};