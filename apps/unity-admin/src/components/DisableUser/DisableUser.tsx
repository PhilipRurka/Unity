import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
import useSWRMutation from 'swr/mutation';
import { z } from 'zod';

import { Button, ErrorSpan, Field, Form, Input, Label } from '@unity/components';

import updateUser, { UpdateUserParams } from '@/Fetchers/updateUser';

const FormSchema = z.object({
  reason: z.string(),
  email: z.string(),
});

type FormSchemaType = z.infer<typeof FormSchema>;

type DisableUserProps = {
  userId?: string;
  email?: string;
  name?: string;
};

type DisableUserMutation = (key: string, change: { arg: UpdateUserParams }) => void;

const disableUser: DisableUserMutation = (_key, { arg }) => updateUser(arg);

const DisableUser = ({ userId = '', email = '', name = '' }: DisableUserProps) => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const { trigger: triggerDisableUser } = useSWRMutation(`user-${userId}`, disableUser);

  const handleFormSubmit = async ({ reason, email: typedEmail }: FormSchemaType) => {
    if (typedEmail !== email) {
      setError('Email was not propperly typed out.');
      return;
    }

    try {
      await triggerDisableUser({
        userId,
        toUpdate: { status: 'disabled' },
        log: { type: 'statusChange', from: 'active', timestamp: new Date(), to: 'disabled', reason },
      });

      mutate(`user-${userId}`);
      mutate(`userLogs-${userId}`);

      setError(null);
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
    <div data-component="DisableUser">
      <p>
        Are you sure you want to delete {name} with email {email}
      </p>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Field>
          <Label>Write out the user's email</Label>
          <Input id="email" type="email" showErrorStyles={!!errors.email} {...register('email')} />
          {errors.email && <ErrorSpan>{errors.email.message}</ErrorSpan>}
        </Field>
        <Field>
          <Label>Reason for disabling user</Label>
          <Input id="reason" type="text" showErrorStyles={!!errors.reason} {...register('reason')} />
          {errors.reason && <ErrorSpan>{errors.reason.message}</ErrorSpan>}
        </Field>
        <Button color="red" isFull size="small" type="submit">
          Disable User
        </Button>
      </Form>
      {success && <span className="mt-6 text-green-600">Success!</span>}
      {error && <span className="mt-6 text-red-600">{error}</span>}
    </div>
  );
};

export default DisableUser;
