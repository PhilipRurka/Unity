import { AllContentModelTypes } from '@/Types/contentful-codegen/SimplerContentfulTypes';
import { FetchError } from '@/Types/fetcher';

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
    const error: FetchError = new Error('An error occurred while fetching the getByContentModel data');
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  const data = await response.json();
  return data.entries;
};

export default getByContentModel;
