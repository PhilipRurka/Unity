/* eslint-disable no-console */

/* eslint-disable import/no-extraneous-dependencies */
import { diff } from 'deep-object-diff';

import { TransformedToRichTextData, TypeArticleWithoutUnresolvableLinksResponse } from '@unity/types';

import getContentfulEnvironment from '../../../utils/getContentfulEnvironment';

type UpdateArticleEntries = (
  items: TransformedToRichTextData,
  articles: TypeArticleWithoutUnresolvableLinksResponse[]
) => Promise<void>;

const updateArticleEntries: UpdateArticleEntries = async (items, articles) => {
  try {
    const promises = items.map(async ({ id, transformedData }) => {
      try {
        const entry = articles.find((article) => id === article.sys.id);

        const differences = diff(entry?.fields.keywordsHelperCheck || {}, transformedData);
        const isNothingChanged = Object.keys(differences).length === 0;

        if (entry && !isNothingChanged) {
          const contentfulEnvironment = await getContentfulEnvironment();

          let environmentEntry = await contentfulEnvironment.getEntry(id);

          environmentEntry.fields.keywordsHelperCheck = {
            'en-US': transformedData,
          };

          console.log(entry?.fields.slug);

          await environmentEntry.update();
          environmentEntry = await contentfulEnvironment.getEntry(id);

          try {
            await environmentEntry.publish();
          } catch (publishError) {
            console.error(`Error publishing entry: ${publishError}`);
            throw new Error(`Publish failed for entry ${id}`);
          }
        }
      } catch (error) {
        console.error(`Error updating entry with id "${id}":`, error);
      }
    });

    await Promise.all(promises);
  } catch (error) {
    console.error('Error updating the entry:', error);
  }
};

export default updateArticleEntries;
