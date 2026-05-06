/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
type WaitForIndexDeletion = (collection: any, indexName: string, step: any) => Promise<void>;

const waitForIndexDeletion: WaitForIndexDeletion = async (collection, indexName, step): Promise<void> => {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    const indexes = await collection.listSearchIndexes().toArray();
    const indexExists = indexes.some((idx: any) => idx.name === indexName);

    if (!indexExists) {
      console.log(`Inngest ++++++++++ Index "${indexName}" successfully deleted.`);
      return;
    }

    await step.sleep(`wait-for-deletion-${indexName}`, '15s');
  }

  throw new Error(`Timeout: Index "${indexName}" was not deleted after 5 minutes.`);
};

export default waitForIndexDeletion;
