import type { AddUserReq, FetchErrorType } from '@unity/types';

type AddUserType = (newUser: AddUserReq) => Promise<void>;

const addUser: AddUserType = async (newUser) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
    },
    body: JSON.stringify({ ...newUser }),
  });

  if (!res.ok) {
    const error: FetchErrorType = new Error('An error occurred while fetching the addUser data');
    error.info = await res.json();
    throw Error(error.info);
  }

  const response = await res.json();

  return response.result;
};

export default addUser;
