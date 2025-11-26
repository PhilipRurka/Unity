import type { FetchErrorType, MyWikiResponseType } from '@unity/types';

type GetMyWiki = () => Promise<MyWikiResponseType>;

const getMyWiki: GetMyWiki = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/myWiki`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!res.ok) {
    const error: FetchErrorType = new Error('An error occurred while fetching the getMyWiki data');
    console.log(res);
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  const response = await res.json();

  return response.result;
};

export default getMyWiki;
