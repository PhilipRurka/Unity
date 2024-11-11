import type { FetchErrorType } from '@unity/types';

type UpdateKeywordLinkInternalTools = () => Promise<void>;

const updateKeywordLinkInternalTools: UpdateKeywordLinkInternalTools = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/internalTools/updateArticleKeywordsHelperCheck`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!res.ok) {
    const error: FetchErrorType = new Error('An error occurred while fetching the UpdateKeywordLinkArticle data');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  const response = await res.json();

  return response.result;
};

export default updateKeywordLinkInternalTools;
