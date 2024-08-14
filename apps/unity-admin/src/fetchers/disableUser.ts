import type { FetchErrorType } from '@unity/types';

type DisableUserProps = {
  userId: string;
  reason: string;
};

type DisableUserType = (props: DisableUserProps) => Promise<void>;

const disableUser: DisableUserType = async ({ userId, reason }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${userId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
    },
    body: JSON.stringify({
      reason,
    }),
  });

  if (!res.ok) {
    const error: FetchErrorType = new Error('An error occurred while fetching the disableUser data');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  const response = await res.json();

  return response.result;
};

export default disableUser;
