'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { ErrorSpan, Field, Form, Input, Label } from '@unity/components';

const FormSchema = z.object({
  email: z.string().email(),
});

type FormSchemaType = z.infer<typeof FormSchema>;

const ResetPassword = () => {
  const [emailSent, setEmailSent] = useState(false);

  const router = useRouter();

  const handleFormSubmit = () => {
    setEmailSent(true);
  };

  const handleInputChange = () => {
    setEmailSent(false);
  };

  const handleBackToLogin = () => {
    router.push('/login');
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <div
      data-component="ResetPassword"
      className="mx-auto mt-16 w-full space-y-8 rounded-lg bg-white bg-opacity-90 p-6 shadow-xl sm:max-w-xl sm:p-8 dark:bg-gray-800"
    >
      <h2 className="inline text-2xl font-bold text-gray-900 dark:text-white">
        Reset Password{emailSent && <span className="inline text-green-700"> was sent!!</span>}
      </h2>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Field>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            showErrorStyles={!!errors.email}
            {...register('email')}
            onChange={handleInputChange}
          />
          {errors.email && <ErrorSpan>{errors.email.message}</ErrorSpan>}
        </Field>
        <div className="flex gap-4">
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:bg-gray-700 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            disabled={emailSent}
          >
            Send New Password
          </button>
          <button
            type="button"
            className="w-full rounded-lg bg-amber-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 disabled:bg-gray-700 sm:w-auto dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
            onClick={handleBackToLogin}
          >
            Back to Login
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ResetPassword;
