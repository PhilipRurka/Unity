import { usePathname } from 'next/navigation';
import useSWR from 'swr';

import { ActivityType } from '@unity/types';

import getUserActivities from '@/Fetchers/getUserActivities';

const useActivities = () => {
  const pathname = usePathname();
  const userId = pathname.replace('/users/', '');

  const response = useSWR<ActivityType[]>(`userActivity-${userId}`, () => getUserActivities(userId));

  return response;
};

export default useActivities;
