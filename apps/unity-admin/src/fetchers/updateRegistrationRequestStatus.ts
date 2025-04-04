import type { FetchErrorType, RegistrationRequestStatus } from '@unity/types';

type GetUsersType = (param: { requestId: string; status: RegistrationRequestStatus }) => Promise<void>;

const updateRegistrationRequestStatus: GetUsersType = async ({ requestId, status }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/registrationRequestStatus/${requestId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
    },
    cache: 'no-store',
    body: JSON.stringify({ status }),
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
