import type { EditUserReq, FetchErrorType } from '@unity/types';

type UpdateUserParams = EditUserReq & {
  userId: string;
};

type UpdateUserType = (params: UpdateUserParams) => Promise<void>;

const updateUser: UpdateUserType = async ({ userId, toUpdate }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${userId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
    },
    body: JSON.stringify({ toUpdate }),
  });

  if (!res.ok) {
    const error: FetchErrorType = new Error('An error occurred while fetching the UpdateUser data');
    error.info = await res.json();
    throw Error(error.info);
  }

  const response = await res.json();

  return response.result;
};

export default updateUser;
