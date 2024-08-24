import type { FetchErrorType } from '@unity/types';

type UpdateUserProps = {
  userId: string;
  name: string;
};

type UpdateUserType = (props: UpdateUserProps) => Promise<void>;

const UpdateUser: UpdateUserType = async ({ userId, name }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${userId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name,
    }),
  });

  if (!res.ok) {
    const error: FetchErrorType = new Error('An error occurred while fetching the UpdateUser data');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  const response = await res.json();

  return response.result;
};

export default UpdateUser;
