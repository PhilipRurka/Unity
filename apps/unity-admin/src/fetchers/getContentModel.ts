import type { FetchErrorType, GetContentModelType } from '@unity/types';

const getContentModel: GetContentModelType = async (type) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contentful/contentModel/${type}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    const error: FetchErrorType = new Error('An error occurred while fetching the getContentModel data');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  const response = await res.json();

  return response.result;
};

export default getContentModel;
