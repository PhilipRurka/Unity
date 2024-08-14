import type { FetchErrorType, UserBasicFrontendType } from '@unity/types';

type GetUsersType = () => Promise<UserBasicFrontendType[]>;

const getUsers: GetUsersType = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/placeholder`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    const error: FetchErrorType = new Error('An error occurred while fetching the getUsers data');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  const response = await res.json();

  return response.result;
};

export default getUsers;
