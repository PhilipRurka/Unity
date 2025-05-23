import type { EditUserReq, FetchErrorType } from '@unity/types';

export type UpdateUserParams = EditUserReq & {
  userId: string;
};

type UpdateUserType = (props: UpdateUserParams) => Promise<void>;

const updateUser: UpdateUserType = async ({ userId, ...rest }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${userId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
    },
    body: JSON.stringify({
      ...rest,
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

export default updateUser;
