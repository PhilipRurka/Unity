import type { FetchErrorType } from '@unity/types';

type AddUserType = (email: string) => Promise<void>;

const resetPassword: AddUserType = async (email) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/resetPassword`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    const error: FetchErrorType = new Error('An error occurred while fetching the reset password data');
    error.info = await res.json();
    throw Error(error.info);
  }

  const response = await res.json();

  return response.result;
};

export default resetPassword;
