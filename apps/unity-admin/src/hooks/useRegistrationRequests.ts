import useSWR from 'swr';

import { RegistrationRequestFrontendType } from '@unity/types';

import getRegistrationRequests from '@/Fetchers/getRegistrationRequests';

const useRegistrationRequests = () => {
  const response = useSWR<RegistrationRequestFrontendType[]>('registrationRequests', () => getRegistrationRequests());

  return response;
};

export default useRegistrationRequests;
