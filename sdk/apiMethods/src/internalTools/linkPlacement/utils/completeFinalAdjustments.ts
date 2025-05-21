import {
  ArticlesKeywordsCheck,
  ListOfKeywordLinks,
  ReStructureForArticleLinkCheck,
  TrackedKeyword,
} from '@unity/types';

import getInvalidLinks from './getInvalidLinks';
import keywordRegexCheck from './keywordRegexCheck';
import patternKeywordsContent from './patternKeywordsContent';

const completeFinalAdjustments = (articles: ReStructureForArticleLinkCheck, listOfKeywordLinks: ListOfKeywordLinks) => {
  const articlesKeywordsCheck: ArticlesKeywordsCheck[] = [];
  const listOfSlugs = listOfKeywordLinks.map(({ slug }) => slug);
  const listOfArticleSlugs = articles.map(({ slug }) => slug);

  articles.forEach(({ id, slug: articleSlug, sections }) => {
    const finalListOfMissPlacedLinks: TrackedKeyword[] = [];
    const finalMissingLinks: TrackedKeyword[] = [];
    const finalInvalidLinks: TrackedKeyword[] = [];

    const listOfTrackedKeywords: string[] = [];

    const listOfKeywordsMap: Record<string, boolean> = {};

    listOfKeywordLinks.forEach(({ keywords }) => {
      keywords.forEach((keyword) => {
        listOfKeywordsMap[keyword] = true;
      });
    });

    sections.forEach(({ entryTitle, content }) => {
      const invalidLinks = getInvalidLinks({ content, listOfKeywordsMap, listOfArticleSlugs });

      invalidLinks.forEach(({ text }) => {
        finalInvalidLinks.push({
          entryTitle,
          keyword: text,
        });
      });

      listOfKeywordLinks.forEach(({ slug, keywords }) => {
        keywords.forEach((keyword) => {
          if (articleSlug === slug) return;

          const contentWithKeywordPattern = patternKeywordsContent(keyword, content);

          const keywordMatches = keywordRegexCheck(keyword, contentWithKeywordPattern);

          if (keywordMatches.length === 0) return;

          keywordMatches.forEach((match) => {
            if (match.href) {
              if (listOfSlugs.includes(match.href)) return;

              finalInvalidLinks.push({
                entryTitle,
                keyword,
                slug,
              });
            }
          });

          if (keywordMatches[0].href) {
            if (listOfTrackedKeywords.includes(keyword)) {
              finalListOfMissPlacedLinks.push({
                entryTitle,
                slug,
                keyword,
              });
            } else {
              listOfTrackedKeywords.push(keyword);
            }

            keywordMatches.shift();
          }

          if (keywordMatches.length > 0) {
            keywordMatches.forEach((match) => {
              if (!match.href) return;

              finalListOfMissPlacedLinks.push({
                entryTitle,
                slug,
                keyword,
              });
            });
          }

          if (!listOfTrackedKeywords.includes(keyword)) {
            listOfTrackedKeywords.push(keyword);

            finalMissingLinks.push({
              entryTitle,
              slug,
              keyword,
            });
          }
        });
      });
    });

    articlesKeywordsCheck.push({
      id,
      slug: articleSlug,
      listOfMissPlacedLinks: finalListOfMissPlacedLinks,
      missingLinks: finalMissingLinks,
      invalidLinks: finalInvalidLinks,
    });
  });

  return articlesKeywordsCheck;
};

export default completeFinalAdjustments;
