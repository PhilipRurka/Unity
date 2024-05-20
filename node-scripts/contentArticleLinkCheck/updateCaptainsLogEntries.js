/* eslint-disable no-console */

/* eslint-disable import/no-extraneous-dependencies */
import contentfulManagement from 'contentful-management';
import { diff } from 'deep-object-diff';

import getByContentModel from '../utils/getByContentModel.js';

const updateArticleEntries = async (newValue) => {
  const { CONTENTFUL_SPACE_ID = '', CONTENTFUL_CMA_TOKEN = '' } = (await import('../utils/env-variables.js')).default();

  const managementClient = contentfulManagement.createClient({
    accessToken: CONTENTFUL_CMA_TOKEN,
  });

  try {
    const space = await managementClient.getSpace(CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment('master');

    try {
      const [captainsLog] = await getByContentModel('captainsLog');

      const entry = await environment.getEntry(captainsLog.sys.id);

      const differences = diff(entry.fields.keywordLinksCheckOverview?.['en-US'], newValue);
      const isNothingChanged = Object.keys(differences).length === 0;

      if (!isNothingChanged) {
        entry.fields.keywordLinksCheckOverview = {
          'en-US': newValue,
        };

        await entry.update();
      }
    } catch (error) {
      console.error(`Error updating Captain's Log:`, error);
    }
  } catch (error) {
    console.error('Error updating the entry:', error);
  }
};

export default updateArticleEntries;
