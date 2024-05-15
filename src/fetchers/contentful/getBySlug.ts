import { ArticleType } from '@/Types/contentful-codegen/SimplerContentfulTypes';
import { FetchError } from '@/Types/fetcher';

type GetBySlug = (slug: string) => Promise<ArticleType>;

const getBySlug: GetBySlug = async (slug) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contentful/getBySlug/${slug}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    const error: FetchError = new Error('An error occurred while fetching the getBySlug data');
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  const data = await response.json();
  return data.entry;
};

export default getBySlug;
