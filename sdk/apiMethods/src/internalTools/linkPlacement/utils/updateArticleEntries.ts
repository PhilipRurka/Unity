/* eslint-disable no-console */

/* eslint-disable import/no-extraneous-dependencies */
import { diff } from 'deep-object-diff';

import { TransformedToRichTextData } from '@unity/types';

import getContentfulEnvironment from '../../../utils/getContentfulEnvironment';

const updateArticleEntries = async (items: TransformedToRichTextData) => {
  try {
    const promises = items.map(async ({ id, transformedData }) => {
      try {
        const contentfulEnvironment = await getContentfulEnvironment();

        let entry = await contentfulEnvironment.getEntry(id);

        const differences = diff(entry.fields.keywordsHelperCheck?.['en-US'], transformedData);
        const isNothingChanged = Object.keys(differences).length === 0;

        if (entry && !isNothingChanged) {
          entry.fields.keywordsHelperCheck = {
            'en-US': transformedData,
          };

          await entry.update();
          entry = await contentfulEnvironment.getEntry(id);

          try {
            await entry.publish();
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
