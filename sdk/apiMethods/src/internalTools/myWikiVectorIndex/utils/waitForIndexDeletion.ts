/* eslint-disable no-console */
import { Logger } from 'inngest';

/* eslint-disable no-await-in-loop */
type WaitForIndexDeletion = (collection: any, indexName: string, step: any, logger: Logger) => Promise<void>;

const waitForIndexDeletion: WaitForIndexDeletion = async (collection, indexName, step, logger): Promise<void> => {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    const indexes = await collection.listSearchIndexes().toArray();
    const indexExists = indexes.some((idx: any) => idx.name === indexName);

    if (!indexExists) {
      console.log(`Inngest ++++++++++ Index "${indexName}" successfully deleted.`);
      return;
    }

    await step.sleep(`wait-for-deletion-${indexName}`, '15s');
  }

  logger.error(`Timeout: Index "${indexName}" was not deleted after 5 minutes.`);

  throw new Error(`Timeout: Index "${indexName}" was not deleted after 5 minutes.`);
};

export default waitForIndexDeletion;
