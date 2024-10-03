import {
  ArticlesKeywordsCheck,
  ListOfKeywordLinks,
  ReStructureForArticleLinkCheck,
  TrackedKeyword,
} from '@unity/types';

const completeFinalAdjustments = (articles: ReStructureForArticleLinkCheck, listOfKeywordLinks: ListOfKeywordLinks) => {
  const articlesKeywordsCheck: ArticlesKeywordsCheck[] = [];

  articles.forEach(({ id, slug: articleSlug, sections }) => {
    const listOfTrackedKeywords: string[] = [];
    const listOfMissPlacedLinks: TrackedKeyword[] = [];
    const missingLinks: TrackedKeyword[] = [];

    for (let i = 0; i < sections.length; i += 1) {
      const { entryTitle, content } = sections[i];

      listOfKeywordLinks.forEach(({ slug, keywords }) => {
        keywords.forEach((keyword) => {
          if (articleSlug === slug) return;

          const isMultiWord = keyword.includes(' ');

          const wrappedRegex = new RegExp(`<>${keyword}`, 'g');
          const keywordRegex = isMultiWord
            ? new RegExp(`${keyword}(s|es)?`, 'g')
            : new RegExp(`\\b${keyword}(s|es)?\\b`, 'g');

          const wrappedMatches = Array.from(content.matchAll(wrappedRegex));
          const keywordMatches = Array.from(content.matchAll(keywordRegex));

          if (keywordMatches.length > 0) {
            const firstKeywordMatches = keywordMatches[0];

            if (wrappedMatches.length > 0) {
              const firstWrappedMatches = wrappedMatches[0];

              const isWrappedKeywordFirst = firstKeywordMatches.index - 2 === firstWrappedMatches.index;

              if (isWrappedKeywordFirst) {
                if (!listOfTrackedKeywords.includes(keyword)) {
                  listOfTrackedKeywords.push(keyword);
                } else {
                  listOfMissPlacedLinks.push({
                    entryTitle,
                    slug,
                    keyword,
                  });
                }

                wrappedMatches.shift();
              }

              if (wrappedMatches.length > 0) {
                wrappedMatches.forEach(() => {
                  listOfMissPlacedLinks.push({
                    entryTitle,
                    slug,
                    keyword,
                  });
                });
              }
            }

            if (!listOfTrackedKeywords.includes(keyword)) {
              listOfTrackedKeywords.push(keyword);

              missingLinks.push({
                entryTitle,
                slug,
                keyword,
              });
            }
          }
        });
      });
    }

    articlesKeywordsCheck.push({
      id,
      slug: articleSlug,
      listOfTrackedKeywords,
      listOfMissPlacedLinks,
      missingLinks,
    });
  });

  return articlesKeywordsCheck;
};

export default completeFinalAdjustments;
