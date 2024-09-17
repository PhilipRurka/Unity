import type { FetchErrorType, LogType } from '@unity/types';

type GetUserLogsType = (userId: string) => Promise<LogType[]>;

const getUserLogs: GetUserLogsType = async (userId) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/logs/${userId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    const error: FetchErrorType = new Error('An error occurred while fetching the getUserLogs data');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  const response = await res.json();

  return response.result;
};

export default getUserLogs;
