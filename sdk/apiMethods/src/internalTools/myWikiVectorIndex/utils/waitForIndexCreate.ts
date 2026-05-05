import { VectorIndexes } from '@unity/types';

type WaitForIndexDeletion = (collection: any, indexName: string, step: any, attempt?: number) => Promise<void>;

const waitForIndexCreate: WaitForIndexDeletion = async (
  collection: any,
  indexName: string,
  step: any,
  attempt: number = 0
): Promise<void> => {
  // 1. Safety check to stop infinite recursion
  if (attempt >= 20) {
    throw new Error(`Timeout: Index "${indexName}" was not deleted after 5 minutes.`);
  }

  // 2. Check if index exists (Unique ID per attempt to force fresh DB call)
  const status: VectorIndexes['status'] = await step.run(
    `check-index-${indexName}-${attempt}`,
    async (): Promise<VectorIndexes['status']> => {
      const [indexes]: VectorIndexes[] = await collection.listSearchIndexes().toArray();
      return indexes.status;
    }
  );

  if (status !== 'READY') {
    // 3. Kill the Vercel function and wait 15s
    await step.sleep(`wait-${indexName}-${attempt}`, '5s');

    // 4. Recursive call (Increments attempt for the next "life")
    await waitForIndexCreate(collection, indexName, step, attempt + 1);
  }

  // If indexExists is false, the function resolves and the main execution continues
  // eslint-disable-next-line no-console
  console.log(`Index "${indexName}" successfully deleted.`);
};

export default waitForIndexCreate;
