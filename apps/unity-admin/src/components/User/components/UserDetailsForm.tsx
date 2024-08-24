import { zodResolver } from '@hookform/resolvers/zod';
import { forwardRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
import z from 'zod';

import { Field, Form, Input, Label } from '@unity/components';
import { EditUserReq, UserBasicFrontendType } from '@unity/types';

import UpdateUser from '@/Fetchers/updateUser';

type UserDetailsFormProps = {
  handleIsEditToggle: (shouldIsEditModel: boolean) => void;
  user: UserBasicFrontendType;
  isEditState: boolean;
};

const FormSchema = z.object({
  name: z.string(),
});

type FormSchemaType = z.infer<typeof FormSchema>;

const UserDetailsForm = forwardRef<HTMLButtonElement, UserDetailsFormProps>(
  ({ isEditState, handleIsEditToggle, user }, submitButtonRef) => {
    const [isDisplaySuccess, setIsDisplaySuccess] = useState(false);

    const handleFormSubmit = async ({ name }: EditUserReq) => {
      try {
        await UpdateUser({
          userId: user.id,
          name,
        });

        mutate(`user-${user.id}`);

        handleIsEditToggle(false);
        setIsDisplaySuccess(true);
      } catch (err) {
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
      <Form onSubmit={handleSubmit(handleFormSubmit)} className="relative flex flex-col gap-3">
        <Field>
          <Label>Name</Label>
          <div className="-mx-2.5">
            <Input
              id="name"
              type="text"
              readOnly={!isEditState}
              defaultValue={user.name}
              showErrorStyles={!!errors.name}
              {...register('name')}
            />
          </div>
        </Field>
        <Field>
          <Label>Email</Label>
          <div className="-mx-2.5">
            <Input
              type="email"
              readOnly
              defaultValue={user.email}
              className="inline-block read-only:border-0 read-only:bg-transparent read-only:outline-none read-only:ring-transparent read-only:focus:border-0"
            />
          </div>
        </Field>

        <button ref={submitButtonRef} type="submit" />

        {isDisplaySuccess && <span className="mt-6 text-green-600">Success!</span>}
      </Form>
    );
  }
);

UserDetailsForm.displayName = 'UserDetailsForm';

export default UserDetailsForm;
