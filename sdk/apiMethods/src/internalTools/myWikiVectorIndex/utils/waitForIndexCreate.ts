import { VectorIndexes } from '@unity/types';

type WaitForIndexCreate = (collection: any, indexName: string, timeoutMs?: number) => Promise<void>;

const waitForIndexCreate: WaitForIndexCreate = async (collection, indexName, timeoutMs = 300000) => {
  const start = Date.now();

  const poll = async (): Promise<void> => {
    const [indexes]: VectorIndexes[] = await collection.listSearchIndexes().toArray();

    if (indexes.status === 'READY') {
      console.log(indexes);
      return;
    }

    if (Date.now() - start > timeoutMs) {
      throw new Error(`Timeout waiting for index "${indexName}" to be deleted`);
    }

    await new Promise<void>((resolve) => {
      setTimeout(resolve, 1000);
    });

    await poll();
  };

  return poll();
};

export default waitForIndexCreate;
