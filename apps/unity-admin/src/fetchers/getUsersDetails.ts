import type { FetchErrorType, UserDetailsType } from '@unity/types';

type GetUsersDetailsType = () => Promise<UserDetailsType[]>;

const getUsersDetails: GetUsersDetailsType = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/usersDetails`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!res.ok) {
    const error: FetchErrorType = new Error('An error occurred while fetching the getUsersDetails data');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  const response = await res.json();

  return response.result;
};

export default getUsersDetails;
