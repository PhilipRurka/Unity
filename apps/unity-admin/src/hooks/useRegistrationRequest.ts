import useSWR from 'swr';

import { RegistrationRequestFrontendType } from '@unity/types';

import getRegistrationRequest from '@/Fetchers/getRegistrationRequest';

const useRegistrationRequest = () => {
  const response = useSWR<RegistrationRequestFrontendType[]>('registrationRequest', () => getRegistrationRequest());

  return response;
};

export default useRegistrationRequest;
