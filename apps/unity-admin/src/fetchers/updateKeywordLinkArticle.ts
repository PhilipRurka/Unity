import type { FetchErrorType, TransformedToRichTextData } from '@unity/types';

type UpdateKeywordLinkArticleProps = {
  article: TransformedToRichTextData;
};

type UpdateKeywordLinkArticleType = (props: UpdateKeywordLinkArticleProps) => Promise<void>;

const updateKeywordLinkArticle: UpdateKeywordLinkArticleType = async ({ article }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/internalTools/updateArticleKeywordsHelperCheck`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
    },
    body: JSON.stringify({
      article,
    }),
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

export default updateKeywordLinkArticle;
