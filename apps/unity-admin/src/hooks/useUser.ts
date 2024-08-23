import useSWR from 'swr';

import { UserBasicFrontendType } from '@unity/types';

import getUser from '@/Fetchers/getUser';

const useUser = (userId: string) => {
  const response = useSWR<UserBasicFrontendType>(`user-${userId}`, () => getUser(userId));

  return response;
};

export default useUser;
