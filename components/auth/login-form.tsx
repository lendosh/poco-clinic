'use client';

import * as z from 'zod';

import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import Link from 'next/link';

import {LoginSchema} from '@/schemas';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';

import {CardWrapper} from './card-wrapper';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {FormError} from '@/components/form-error';
import {FormSuccess} from '@/components/form-success';
import React, {Suspense, useState, useTransition} from 'react';
import {login} from '@/actions/login';
import {useSearchParams} from 'next/navigation';

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError(undefined);
    setSuccess(undefined);

    startTransition(async () => {
      login(values, callbackUrl)
        .then(data => {
          if (data?.error) {
            form.reset();
            setError(data.error);
          }

          if (data?.success) {
            form.reset();
            setSuccess(data.success);
          }

          if (data?.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch((e) => setError('Something went wrong! :\n' + JSON.stringify(e)));
    });
  };

  return (
      <CardWrapper
          mainHeaderLabel="Authorization at system"
          backButtonLabel="Do not have an account?"
          backButtonHref="/auth/register"
      >
        <Form {...form}>
          <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
          >
            <div className="space-y-4">
              {showTwoFactor && (
                  <FormField
                      control={form.control}
                      name="code"
                      render={({field}) => (
                          <FormItem>
                            <FormLabel>
                              2FA Code
                            </FormLabel>
                            <FormControl>
                              <Input
                                  {...field}
                                  disabled={isPending}
                                  placeholder="123456"
                              />
                            </FormControl>
                            <FormMessage/>
                          </FormItem>
                      )}
                  />
              )}
              {!showTwoFactor &&
                  (
                      <>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                  <FormLabel>
                                    Email
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                        {...field}
                                        disabled={isPending}
                                        placeholder="example@example.com"
                                        type="email"
                                    />
                                  </FormControl>
                                  <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                  <FormLabel>
                                    Password
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                        {...field}
                                        disabled={isPending}
                                        placeholder="********"
                                        type="password"
                                    />
                                  </FormControl>
                                  <Button
                                      size="sm"
                                      variant="link"
                                      asChild
                                      className="px-0 font-normal"
                                  >
                                    <Link href="/auth/reset">
                                      Forgot your password?
                                    </Link>
                                  </Button>
                                  <FormMessage/>
                                </FormItem>
                            )}
                        />
                      </>
                  )
              }
            </div>
            <FormError message={error}/>
            <FormSuccess message={success}/>
            <Button
                type="submit"
                className="w-full"
                disabled={isPending}
            >
              {showTwoFactor ? 'Submit' : 'Login'}
            </Button>
          </form>
        </Form>
      </CardWrapper>
  );
};