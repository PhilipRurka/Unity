import useSWR from 'swr';

import askMyWiki from '@/Fetchers/myWiki/askMyWiki';

const useMyWiki = (query: string) => {
  const response = useSWR<any>(`askMyWiki-${query}`, () => askMyWiki(query));

  return response;
};

export default useMyWiki;
