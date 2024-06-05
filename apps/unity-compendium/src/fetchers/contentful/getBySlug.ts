import type { ArticleType, FetchErrorType } from '@unity/types';

type GetBySlug = (slug: string) => Promise<ArticleType>;

const getBySlug: GetBySlug = async (slug) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contentful/getBySlug/${slug}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!res.ok) {
    const error: FetchErrorType = new Error('An error occurred while fetching the getBySlug data');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  const response = await res.json();

  return response.result;
};

export default getBySlug;
