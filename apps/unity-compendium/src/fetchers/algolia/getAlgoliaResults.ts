import type { ArticleSearchType, FetchErrorType } from '@unity/types';

type GetAlgoliaResults = (query: string) => Promise<ArticleSearchType[]>;

const getAlgoliaResults: GetAlgoliaResults = async (query) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/algolia/${query}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!res.ok) {
    const error: FetchErrorType = new Error('An error occurred while fetching the getAlgoliaResults data');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  const response = await res.json();

  return response.result;
};

export default getAlgoliaResults;
