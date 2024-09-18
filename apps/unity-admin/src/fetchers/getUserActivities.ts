import type { ActivityAnalytictsTypeFrontend, FetchErrorType } from '@unity/types';

type GetUserActivities = (userId: string) => Promise<ActivityAnalytictsTypeFrontend>;

const getUserActivities: GetUserActivities = async (userId) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/activitiesAnalytics/${userId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    const error: FetchErrorType = new Error('An error occurred while fetching the getUserActivities data');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  const response = await res.json();

  return response.result;
};

export default getUserActivities;
