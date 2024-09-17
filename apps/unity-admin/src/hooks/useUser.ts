import { usePathname } from 'next/navigation';
import useSWR from 'swr';

import { UserBasicFrontendType } from '@unity/types';

import getUser from '@/Fetchers/getUser';

const useUser = () => {
  const pathname = usePathname();
  const userId = pathname.replace('/users/', '');

  const response = useSWR<UserBasicFrontendType>(`user-${userId}`, () => getUser(userId));

  return response;
};

export default useUser;
