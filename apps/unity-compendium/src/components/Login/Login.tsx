'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, ErrorSpan, Field, Form, Input, Label } from '@unity/components';

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type FormSchemaType = z.infer<typeof FormSchema>;

const Login = () => {
  const [error, setError] = useState<string>();

  const router = useRouter();

  const handleFormSubmit = async ({ email, password }: FormSchemaType) => {
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

      router.push('/');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err, 'something wrong');
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
    <div data-component="cLogin" className="sm:px-8">
      <div className="mx-auto mt-16 w-full space-y-8 bg-white bg-opacity-90 p-6 pt-12 shadow-xl sm:max-w-xl sm:rounded-lg sm:p-8">
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
          <span className="mt-6 text-red-600">{error}</span>
          <div className="flex flex-wrap gap-4">
            <Button color="green" isFull type="submit" size="medium">
              Login
            </Button>
            <Button color="black" type="button" link="/reset-password" size="medium">
              Reset Password
            </Button>
            <Button link="/registration-request" color="amber" size="medium">
              Registration
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
