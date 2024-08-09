import useSWR from 'swr';

import { UserFrontendType } from '@unity/types';

import getUsers from '@/Fetchers/getUsers';

const useUsers = () => {
  const response = useSWR<UserFrontendType[]>('users', () => getUsers());

  return response;
};

export default useUsers;
