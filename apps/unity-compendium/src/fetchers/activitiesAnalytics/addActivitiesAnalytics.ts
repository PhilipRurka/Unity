import type { ActivityReq, FetchError } from '@unity/types';

type AddActivitiesAnalytics = (activity: ActivityReq) => void;

const addActivitiesAnalytics: AddActivitiesAnalytics = async (activity) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/activitiesAnalytics`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
    },
    body: JSON.stringify({ ...activity }),
  });

  if (!response.ok) {
    const error: FetchError = new Error('An error occurred while adding a new activity');
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }
};

export default addActivitiesAnalytics;
