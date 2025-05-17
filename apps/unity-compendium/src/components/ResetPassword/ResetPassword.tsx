'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, ErrorSpan, Field, Form, Input, Label } from '@unity/components';

import resetPassword from '@/Fetchers/user/resetPassword';

const FormSchema = z.object({
  email: z.string().email(),
});

type FormSchemaType = z.infer<typeof FormSchema>;

const ResetPassword = () => {
  const [emailSent, setEmailSent] = useState(false);

  const handleFormSubmit = ({ email }: FormSchemaType) => {
    resetPassword(email);
    setEmailSent(true);
  };

  const handleInputChange = () => {
    setEmailSent(false);
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
      className="mx-auto mt-16 w-full space-y-8 rounded-lg bg-white bg-opacity-90 p-6 shadow-xl sm:max-w-xl sm:p-8"
    >
      <h2 className="inline text-2xl font-bold text-gray-900">
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
        <div className="flex flex-wrap gap-4">
          <Button color="green" isFull type="submit" disabled={emailSent} size="medium">
            Reset
          </Button>
          <Button color="black" type="button" link="/login" size="medium">
            Back To Login
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ResetPassword;
