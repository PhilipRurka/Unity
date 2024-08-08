import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, ErrorSpan, Field, Form, Input, Label } from '@unity/components';

import addUser from '@/Fetchers/addUser';

const FormSchema = z.object({
  email: z.string().email(),
  name: z.string(),
});

type FormSchemaType = z.infer<typeof FormSchema>;

type AddUserSubmit = {
  email: string;
  name: string;
};

const AddUser = () => {
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState(false);

  const handleFormSubmit = async ({ email, name }: AddUserSubmit) => {
    try {
      await addUser({ email, name });

      setSuccess(true);
    } catch (err) {
      setError('There was an error!');
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
