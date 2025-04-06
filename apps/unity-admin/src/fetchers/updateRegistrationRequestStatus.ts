import type { FetchErrorType, RegistrationRequestStatusChange } from '@unity/types';

type UpdateRegistrationRequestStatus = (param: RegistrationRequestStatusChange) => Promise<void>;

const updateRegistrationRequestStatus: UpdateRegistrationRequestStatus = async ({ id, status, reasonForDecline }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/registrationRequestStatus/${id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
    },
    cache: 'no-store',
    body: JSON.stringify({ status, reasonForDecline }),
  });

  if (!res.ok) {
    const error: FetchErrorType = new Error(
      'An error occurred while fetching the updateRegistrationRequestStatus data'
    );
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  const response = await res.json();

  return response.result;
};

export default updateRegistrationRequestStatus;
