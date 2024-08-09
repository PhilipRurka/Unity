import useSWR from 'swr';

import { ArticleType } from '@unity/types';

import getBySlug from '@/Fetchers/contentful/getBySlug';

const useGetBySlug = (slug: string) => {
  const response = useSWR<ArticleType>(`getBySlug-${slug}`, () => getBySlug(slug));

  return response;
};

export default useGetBySlug;
