import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { z } from 'zod';

import { Button, ErrorSpan, Field, Form, Input, Label } from '@unity/components';
import type { AddUserReq } from '@unity/types';

import addUser from '@/Fetchers/addUser';

const FormSchema = z.object({
  email: z.string().email(),
  name: z.string(),
});

type FormSchemaType = z.infer<typeof FormSchema>;

type UpdateUsers = (key: string, change: { arg: AddUserReq }) => void;

const updateUsers: UpdateUsers = (_key, { arg }) => addUser(arg);

const AddUser = () => {
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState(false);

  const { trigger: triggerAddUser } = useSWRMutation('users', updateUsers);

  const handleFormSubmit = async ({ email, name }: FormSchemaType) => {
    try {
      await triggerAddUser({ email, name, sourceType: 'manual' });

      setSuccess(true);
    } catch (err) {
      setError('There was an error!');
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
    <div data-component="AddUser">
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Field>
          <Label>User Email</Label>
          <Input id="email" type="email" showErrorStyles={!!errors.email} {...register('email')} />
          {errors.email && <ErrorSpan>{errors.email.message}</ErrorSpan>}
        </Field>
        <Field>
          <Label>User Name</Label>
          <Input id="name" type="text" showErrorStyles={!!errors.name} {...register('name')} />
          {errors.name && <ErrorSpan>{errors.name.message}</ErrorSpan>}
        </Field>
        <Button color="black" isFull size="small" type="submit">
          Add User
        </Button>
      </Form>
      {success && <span className="mt-6 text-green-600">Success!</span>}
      {error && <span className="mt-6 text-red-600">{error}</span>}
    </div>
  );
};

export default AddUser;
