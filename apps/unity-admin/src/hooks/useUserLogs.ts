import { usePathname } from 'next/navigation';
import useSWR from 'swr';

import { LogType } from '@unity/types';

import getUserLogs from '@/Fetchers/getUserLogs';

const useUserLogs = () => {
  const pathname = usePathname();
  const userId = pathname.replace('/users/', '');

  const response = useSWR<LogType[]>(`userLogs-${userId}`, () => getUserLogs(userId));

  return response;
};

export default useUserLogs;
