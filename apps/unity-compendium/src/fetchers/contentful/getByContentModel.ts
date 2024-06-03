import type { AllContentModelTypes, FetchErrorType } from '@unity/types';

type GetByContentModel = (contentModel: AllContentModelTypes, headers?: any, options?: any) => Promise<unknown>;

const getByContentModel: GetByContentModel = async (contentModel, headers = {}, options = {}) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contentful/getByContentModel/${contentModel}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      ...headers,
    },
    ...options,
  });

  if (!response.ok) {
    const error: FetchErrorType = new Error('An error occurred while fetching the getByContentModel data');
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  const result = await response.json();
  return result.entries;
};

export default getByContentModel;
