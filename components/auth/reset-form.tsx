'use client';

import * as z from 'zod';

import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {ResetSchema} from '@/schemas';
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
import {useState, useTransition} from 'react';
import {reset} from '@/actions/reset';

export const ResetForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  
  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: '',
    }
  });

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    setError(undefined);
    setSuccess(undefined);

    startTransition(async () => {
      reset(values)
        .then((data) => {
          setError(data?.error);
          setSuccess(data.success);
        });
    });
  };

  return (
    <CardWrapper
      mainHeaderLabel="Forgot your password?"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="space-y-4">
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
          </div>
          <FormError message={error}/>
          <FormSuccess message={success}/>
          <Button
            type="submit"
            className="w-full"
            disabled={isPending}
          >
            Reset password
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};