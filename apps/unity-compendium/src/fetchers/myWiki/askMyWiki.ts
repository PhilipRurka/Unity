import { FetchErrorType } from '@unity/types';

type AskMyWiki = (query: string) => Promise<any>;

const askMyWiki: AskMyWiki = async (query) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/myWiki`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) {
    const error: FetchErrorType = new Error('An error occurred while asking myWiki');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  const response = await res.json();

  return response.result;
};

export default askMyWiki;
