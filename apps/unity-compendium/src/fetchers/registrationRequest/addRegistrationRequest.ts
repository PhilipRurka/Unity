import type { FetchErrorType, RegistrationRequestReq } from '@unity/types';

type RegistrationRequest = (data: RegistrationRequestReq) => Promise<void | FetchErrorType>;

const addRegistrationRequest: RegistrationRequest = async (data) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/registrationRequest`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: JSON.stringify({ ...data }),
  });

  if (!res.ok) {
    const error: FetchErrorType = new Error('An error occurred while adding a new registration request');
    error.info = await res.json();
    error.status = res.status;
    return error;
  }

  const response = await res.json();
  return response;
};

export default addRegistrationRequest;
