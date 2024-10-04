import type { AuditOptions, FetchErrorType } from '@unity/types';

type UpdateInternalToolsType = (option: AuditOptions) => Promise<void>;

const UpdateInternalTools: UpdateInternalToolsType = async (option) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/internalTools`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
    },
    body: JSON.stringify({
      option,
    }),
  });

  if (!res.ok) {
    const error: FetchErrorType = new Error('An error occurred while fetching the UpdateInternalTools data');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  const response = await res.json();

  return response.result;
};

export default UpdateInternalTools;
