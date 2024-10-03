/* eslint-disable no-console */
import { Document } from '@contentful/rich-text-types';
import { Environment } from 'contentful-management';
import { diff } from 'deep-object-diff';

import { CaptainsLogType } from '@unity/types';

import { getByContentModel } from '../contentful';

const updateCaptainsLogEntry = async (environment: Environment, field: string, newValue: Document) => {
  try {
    try {
      const [data] = await getByContentModel('captainsLog');

      if (!('result' in data)) throw new Error('Getting captains log did not happen');

      const [captainsLog] = data.result as CaptainsLogType[];

      let entry = await environment.getEntry(captainsLog.sys.id);

      const differences = diff(entry.fields[field]?.['en-US'], newValue);
      const isNothingChanged = Object.keys(differences).length === 0;

      if (!isNothingChanged) {
        entry.fields[field] = {
          'en-US': newValue,
        };

        await entry.update();
        entry = await environment.getEntry(entry.sys.id);

        try {
          await entry.publish();
        } catch (publishError) {
          console.error(`Error publishing entry: ${publishError}`);
          throw new Error(`Publish failed for entry ${entry.sys.id}`);
        }
      }

      return { last_incomplete_update: new Date() };
    } catch (error) {
      throw new Error("Error updating Captain's Log:");
    }
  } catch (error) {
    throw new Error('Error connecting to Contentful');
  }
};

export default updateCaptainsLogEntry;
