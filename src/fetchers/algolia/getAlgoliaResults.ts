import type { ArticleSearchType } from '@/Types/algolia-codegen/ArticleSearchType';
import { FetchError } from '@/Types/fetcher';

type GetAlgoliaResults = (query: string) => Promise<ArticleSearchType[]>;

const getAlgoliaResults: GetAlgoliaResults = async (query) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/algolia/${query}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    const error: FetchError = new Error('An error occurred while fetching the getAlgoliaResults data');
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  const data = await response.json();

  return data.results;
};

export default getAlgoliaResults;