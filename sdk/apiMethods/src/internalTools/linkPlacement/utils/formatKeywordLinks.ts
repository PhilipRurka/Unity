import { ArticleType } from '@unity/types';

const formatKeywordLinks = (articles: ArticleType[]) => {
  const extractedArrays = articles.map(({ fields: item }) => {
    const keywordLinks = item.keywordLinks || [];

    return {
      slug: item.slug,
      keywords: keywordLinks,
    };
  });

  return extractedArrays.flat();
};

export default formatKeywordLinks;
