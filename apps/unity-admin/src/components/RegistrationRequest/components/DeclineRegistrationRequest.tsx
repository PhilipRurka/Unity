import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
import useSWRMutation from 'swr/mutation';
import { z } from 'zod';

import { Button, ErrorSpan, Field, Form, Input, Label } from '@unity/components';
import { RegistrationRequestStatusChange } from '@unity/types';

import updateRegistrationRequestStatus from '@/Fetchers/updateRegistrationRequestStatus';

const FormSchema = z.object({
  reason: z.string(),
});

type FormSchemaType = z.infer<typeof FormSchema>;

type DeclineRegistrationRequestProps = {
  requestId: string;
  email: string;
  name: string;
};

type DeclineRegistrationRequestMutation = (key: string, change: { arg: RegistrationRequestStatusChange }) => void;

const declineRequest: DeclineRegistrationRequestMutation = (_key, { arg }) => updateRegistrationRequestStatus(arg);

const DeclineRegistrationRequest = ({ requestId, email, name }: DeclineRegistrationRequestProps) => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const { trigger: triggerDecineRequest } = useSWRMutation(`registrationRequest-${requestId}`, declineRequest);

  const handleFormSubmit = async ({ reason }: FormSchemaType) => {
    try {
      await triggerDecineRequest({ id: requestId, status: 'declined', reasonForDecline: reason });

      mutate(`registrationRequest-${requestId}`);

      setError(null);
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
    <div data-component="DeclineRegistrationRequest">
      <p>
        Are you sure you want to decline {name} with email {email}'s registration request?
      </p>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Field>
          <Label>Reason for declining registration request</Label>
          <Input id="reason" type="text" showErrorStyles={!!errors.reason} {...register('reason')} />
          {errors.reason && <ErrorSpan>{errors.reason.message}</ErrorSpan>}
        </Field>
        <Button color="red" isFull size="small" type="submit">
          Decline
        </Button>
      </Form>
      {success && <span className="mt-6 text-green-600">Success!</span>}
      {error && <span className="mt-6 text-red-600">{error}</span>}
    </div>
  );
};

export default DeclineRegistrationRequest;
