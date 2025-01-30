'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, ErrorSpan, Field, Form, Input, Label, TextArea } from '@unity/components';

import addRegistrationRequest from '@/Fetchers/registrationRequest/addRegistrationRequest';

const FormSchema = z.object({
  email: z.string().email(),
  message: z.string().max(500).optional(),
  name: z.string().min(3),
});

type FormSchemaType = z.infer<typeof FormSchema>;

const RegistrationRequest = () => {
  const [requestSent, setRequestSent] = useState(false);

  const handleFormSubmit = ({ email, message, name }: FormSchemaType) => {
    addRegistrationRequest({ email, message, name });
    setRequestSent(true);
  };

  const handleInputChange = () => {
    setRequestSent(false);
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
      data-component="RegistrationRequest"
      className="mx-auto mt-16 w-full space-y-8 rounded-lg bg-white bg-opacity-90 p-6 shadow-xl sm:max-w-xl sm:p-8 dark:bg-gray-800"
    >
      <h2 className="inline text-2xl font-bold text-gray-900 dark:text-white">
        Request Registration{requestSent && <span className="inline text-green-700"> was sent!!</span>}
      </h2>
      <p>
        Submit your name, email, and a brief message (if we haven’t met before) to register on the platform. After
        submitting, you’ll receive an email within a few days with instructions to access the platform.
      </p>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Field>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="name"
            showErrorStyles={!!errors.name}
            {...register('name')}
            onChange={handleInputChange}
          />
          {errors.name && <ErrorSpan>{errors.name.message}</ErrorSpan>}
        </Field>
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
        <Field>
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            type="message"
            showErrorStyles={!!errors.message}
            {...register('message')}
            onChange={handleInputChange}
          />
          {errors.message && <ErrorSpan>{errors.message.message}</ErrorSpan>}
        </Field>
        <div className="flex gap-4">
          <Button color="green" isFull type="submit" disabled={requestSent} size="medium">
            Request Registration
          </Button>
          <Button color="black" type="button" link="/login" size="medium">
            Back To Login
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegistrationRequest;
