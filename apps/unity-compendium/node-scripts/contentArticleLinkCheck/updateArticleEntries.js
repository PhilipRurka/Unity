/* eslint-disable no-console */

/* eslint-disable import/no-extraneous-dependencies */
import contentfulManagement from 'contentful-management';
import { diff } from 'deep-object-diff';

const updateArticleEntries = async (items) => {
  const { CONTENTFUL_SPACE_ID = '', CONTENTFUL_CMA_TOKEN = '' } = (await import('../utils/env-variables.js')).default();

  const managementClient = contentfulManagement.createClient({
    accessToken: CONTENTFUL_CMA_TOKEN,
  });

  try {
    const space = await managementClient.getSpace(CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment('master');

    const promises = items.map(async ({ id, transformedData }) => {
      try {
        const entry = await environment.getEntry(id);

        const differences = diff(entry.fields.keywordsHelperCheck?.['en-US'], transformedData);
        const isNothingChanged = Object.keys(differences).length === 0;

        if (entry && !isNothingChanged) {
          entry.fields.keywordsHelperCheck = {
            'en-US': transformedData,
          };

          await entry.update();
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
