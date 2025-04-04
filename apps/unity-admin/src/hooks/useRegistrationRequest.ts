import { usePathname } from 'next/navigation';
import useSWR from 'swr';

import { RegistrationRequestFrontendType } from '@unity/types';

import getRegistrationRequest from '@/Fetchers/getRegistrationRequest';

const useRegistrationRequest = () => {
  const pathname = usePathname();
  const requestId = pathname.replace('/registration-request/', '');

  const response = useSWR<RegistrationRequestFrontendType>('registrationRequest', () =>
    getRegistrationRequest(requestId)
  );

  return response;
};

export default useRegistrationRequest;
