import type { FetchErrorType, UserStatus } from '@unity/types';

type UpdateStatusProps = {
  userId: string;
  reason: string;
  newStatus: UserStatus;
};

type UpdateStatusType = (props: UpdateStatusProps) => Promise<void>;

const updateStatus: UpdateStatusType = async ({ userId, reason, newStatus }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/status/${userId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
    },
    body: JSON.stringify({
      reason,
      newStatus,
    }),
  });

  if (!res.ok) {
    const error: FetchErrorType = new Error('An error occurred while fetching the UpdateStatus data');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  const response = await res.json();

  return response.result;
};

export default updateStatus;
