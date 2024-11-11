/* eslint-disable no-console */

/* eslint-disable import/no-extraneous-dependencies */
import { diff } from 'deep-object-diff';

import { TransformedToRichTextData, TypeArticleWithoutUnresolvableLinksResponse } from '@unity/types';

type UpdateArticleEntries = (
  items: TransformedToRichTextData[],
  articles: TypeArticleWithoutUnresolvableLinksResponse[]
) => TransformedToRichTextData[];

const compareArticleData: UpdateArticleEntries = (items, articles) => {
  const changedArticles: TransformedToRichTextData[] = [];

  try {
    items.forEach(({ id, transformedData }) => {
      try {
        const entry = articles.find((article) => id === article.sys.id);

        const differences = diff(entry?.fields.keywordsHelperCheck || {}, transformedData);
        const isNothingChanged = Object.keys(differences).length === 0;

        if (entry && !isNothingChanged) {
          changedArticles.push({ id, transformedData });
        }
      } catch (error) {
        console.error(`Error updating entry with id "${id}":`, error);
      }
    });
  } catch (error) {
    console.error('Error updating the entry:', error);
  }

  return changedArticles;
};

export default compareArticleData;
