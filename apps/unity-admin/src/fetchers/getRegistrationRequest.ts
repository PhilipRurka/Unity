import type { FetchErrorType, RegistrationRequestFrontendType } from '@unity/types';

type GetUsersType = () => Promise<RegistrationRequestFrontendType[]>;

const getRegistrationRequest: GetUsersType = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/registrationRequest/placeholder`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    const error: FetchErrorType = new Error('An error occurred while fetching the getRegistrationRequest data');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  const response = await res.json();

  return response.result;
};

export default getRegistrationRequest;
