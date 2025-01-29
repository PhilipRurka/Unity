import type { FetchErrorType, RegistrationRequestType } from '@unity/types';

type RegistrationRequest = (data: RegistrationRequestType) => void;

const addRegistrationRequest: RegistrationRequest = async (data) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/registrationRequest`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: JSON.stringify({ ...data }),
  });

  if (!response.ok) {
    const error: FetchErrorType = new Error('An error occurred while adding a new registration request');
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }
};

export default addRegistrationRequest;
