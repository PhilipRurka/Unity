import type { AuditFrontendType, FetchErrorType } from '@unity/types';

type GetInternalToolsType = () => Promise<AuditFrontendType>;

const getInternalTools: GetInternalToolsType = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/internalTools/placeholder`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    const error: FetchErrorType = new Error('An error occurred while fetching the getInternalTools data');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  const response = await res.json();

  return response.result;
};

export default getInternalTools;
