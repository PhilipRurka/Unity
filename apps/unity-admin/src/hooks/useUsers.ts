import useSWR from 'swr';

import { UserBasicFrontendType } from '@unity/types';

import getUsers from '@/Fetchers/getUsers';

const useUsers = () => {
  const response = useSWR<UserBasicFrontendType[]>('users', () => getUsers());

  return response;
};

export default useUsers;
