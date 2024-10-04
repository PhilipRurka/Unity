import type { FetchErrorType, GetContentModelType } from '@unity/types';

const getByContentModel: GetContentModelType = async (contentModel, headers = {}, options = {}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contentful/getByContentModel/${contentModel}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      ...headers,
    },
    ...options,
  });

  if (!res.ok) {
    const error: FetchErrorType = new Error('An error occurred while fetching the getByContentModel data');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  const response = await res.json();
  return response.result;
};

export default getByContentModel;
