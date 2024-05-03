import { FetchError } from '@/Types/fetcher';

type GetByContentModel = (contentModel: string) => Promise<unknown>;

const getByContentModel: GetByContentModel = async (contentModel) => {
  const response = await fetch(`/api/contentful/getByContentModel/${contentModel}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    const error: FetchError = new Error('An error occurred while fetching the getTodos data');
    error.info = await response.json;
    error.status = response.status;
    throw error;
  }

  const data = await response.json();
  return data;
};

export default getByContentModel;
