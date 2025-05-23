import { zodResolver } from '@hookform/resolvers/zod';
import { forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
import z from 'zod';

import { Field, Form, Input, Label } from '@unity/components';
import { UserBasicFrontendType } from '@unity/types';

import updateUser from '@/Fetchers/updateUser';

type UserDetailsFormProps = {
  handleIsEditToggle: (shouldIsEditModel: boolean) => void;
  user: UserBasicFrontendType;
  isEditState: boolean;
};

type HandleFormSubmit = (param: { name: string }) => Promise<void>;

const FormSchema = z.object({
  name: z.string(),
});

type FormSchemaType = z.infer<typeof FormSchema>;

const UserDetailsForm = forwardRef<HTMLButtonElement, UserDetailsFormProps>(
  ({ isEditState, handleIsEditToggle, user }, submitButtonRef) => {
    const handleFormSubmit: HandleFormSubmit = async ({ name }) => {
      try {
        await updateUser({
          userId: user.id,
          toUpdate: { name },
          log: {
            type: 'updatedField',
            fields: [
              {
                property: 'name',
                from: user.name,
                to: name,
              },
            ],
            timestamp: new Date(),
          },
        });

        mutate(`user-${user.id}`);
        mutate(`userLogs-${user.id}`);

        handleIsEditToggle(false);
      } catch (err) {
        // eslint-disable-next-line no-console
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
      <Form onSubmit={handleSubmit(handleFormSubmit)} className="relative">
        <div className="flex flex-col gap-3">
          <Field>
            <Label>Name</Label>
            <Input
              id="name"
              type="text"
              isInlineWithContent
              readOnly={!isEditState}
              defaultValue={user.name}
              showErrorStyles={!!errors.name}
              {...register('name')}
            />
          </Field>
          <Field>
            <Label>Email</Label>
            <Input
              type="email"
              readOnly
              isInlineWithContent
              defaultValue={user.email}
              className="inline-block read-only:border-0 read-only:bg-transparent read-only:outline-none read-only:ring-transparent read-only:focus:border-0"
            />
          </Field>
          <Field>
            <Label>Source Type</Label>
            <Input
              type="text"
              readOnly
              isInlineWithContent
              defaultValue={user.sourceType}
              className="inline-block read-only:border-0 read-only:bg-transparent read-only:outline-none read-only:ring-transparent read-only:focus:border-0"
            />
          </Field>
        </div>

        <button ref={submitButtonRef} type="submit" />
      </Form>
    );
  }
);

UserDetailsForm.displayName = 'UserDetailsForm';

export default UserDetailsForm;
