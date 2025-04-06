import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { z } from 'zod';

import { Button, ErrorSpan, Field, Form, Input, Label } from '@unity/components';
import { UserStatusChangeReq } from '@unity/types';

import UpdateStatus from '@/Fetchers/updateStatus';

const FormSchema = z.object({
  reason: z.string(),
  email: z.string(),
});

type FormSchemaType = z.infer<typeof FormSchema>;

type ActivateUserProps = {
  userId?: string;
  email?: string;
  name?: string;
};

type ActivateUserMutation = (key: string, change: { arg: UserStatusChangeReq }) => void;

const activateUser: ActivateUserMutation = (_key, { arg }) => UpdateStatus(arg);

const ActivateUser = ({ userId = '', email = '', name = '' }: ActivateUserProps) => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const { trigger: triggerActivateUser } = useSWRMutation('users', activateUser);

  const handleFormSubmit = async ({ reason, email: typedEmail }: FormSchemaType) => {
    if (typedEmail !== email) {
      setError('Email was not propperly typed out.');
      return;
    }

    try {
      await triggerActivateUser({ userId, newStatus: 'active', reason });

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
    <div data-component="ActivateUser">
      <p>
        Are you sure you want to activate {name} with email {email}
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
        <Button color="green" isFull size="small" type="submit">
          Activate User
        </Button>
      </Form>
      {success && <span className="mt-6 text-green-600">Success!</span>}
      {error && <span className="mt-6 text-red-600">{error}</span>}
    </div>
  );
};

export default ActivateUser;
