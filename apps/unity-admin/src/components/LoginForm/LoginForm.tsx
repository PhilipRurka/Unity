'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { ErrorSpan, Field, Form, Input, Label } from '@unity/components';
import type { UserReqType } from '@unity/types';

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type FormSchemaType = z.infer<typeof FormSchema>;

const LoginForm = () => {
  const [error, setError] = useState<string>();

  const router = useRouter();

  const handleFormSubmit = async ({ email, password }: UserReqType) => {
    try {
      const res = await signIn('credentials', {
        email: email.toLocaleLowerCase(),
        password,
        redirect: false,
      });

      if (res?.error) {
        setError('Invalid!!');
        return;
      }

      router.replace('dashboard');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <div className="mx-auto mt-16 w-full space-y-8 rounded-lg bg-white bg-opacity-90 p-6 shadow-xl sm:max-w-xl sm:p-8">
      <h2 className="text-2xl font-bold text-gray-900">Sign in</h2>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Field>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" showErrorStyles={!!errors.email} {...register('email')} />
          {errors.email && <ErrorSpan>{errors.email.message}</ErrorSpan>}
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" showErrorStyles={!!errors.password} {...register('password')} />
          {errors.password && <ErrorSpan>{errors.password.message}</ErrorSpan>}
        </Field>
        <div>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto"
          >
            Login
          </button>
        </div>
      </Form>
      <span className="mt-6 text-red-600">{error}</span>
    </div>
  );
};

export default LoginForm;
