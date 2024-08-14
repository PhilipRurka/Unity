import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { z } from 'zod';

import { Button, ErrorSpan, Field, Form, Input, Label } from '@unity/components';
import { DisableUserReq } from '@unity/types';

import disableUser from '@/Fetchers/disableUser';

const FormSchema = z.object({
  reason: z.string(),
  name: z.string(),
});

type FormSchemaType = z.infer<typeof FormSchema>;

type DisableUserProps = {
  userId?: string;
  email?: string;
  name?: string;
};

type DisableUserMutation = (key: string, change: { arg: DisableUserReq }) => void;

const disableUsers: DisableUserMutation = (_key, { arg }) => disableUser(arg);

const DisableUser = ({ userId = '', email = '', name = '' }: DisableUserProps) => {
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState(false);

  const { trigger: triggerDisableUser } = useSWRMutation('users', disableUsers);

  const handleFormSubmit = async ({ reason, name: typedName }: FormSchemaType) => {
    if (typedName !== name) {
      setError('Name was not propperly typed out.');
      return;
    }

    try {
      await triggerDisableUser({ userId, reason });

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
    <div data-component="DisableUser">
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <p>
          Are you sure you want to delete {name} with email {email}
        </p>
        <Field>
          <Label>Write out the user's name</Label>
          <Input id="name" type="text" showErrorStyles={!!errors.name} {...register('name')} />
          {errors.name && <ErrorSpan>{errors.name.message}</ErrorSpan>}
        </Field>
        <Field>
          <Label>Reason for disabling user</Label>
          <Input id="reason" type="text" showErrorStyles={!!errors.reason} {...register('reason')} />
          {errors.reason && <ErrorSpan>{errors.reason.message}</ErrorSpan>}
        </Field>
        <Button color="black" isFull size="small" type="submit">
          Disable User
        </Button>
      </Form>
      {success && <span className="mt-6 text-green-600">Success!</span>}
      {error && <span className="mt-6 text-red-600">{error}</span>}
    </div>
  );
};

export default DisableUser;
