type WaitForIndexDeletion = (collection: any, indexName: string, timeoutMs?: number) => Promise<void>;

const waitForIndexDeletion: WaitForIndexDeletion = async (collection, indexName, timeoutMs = 300000) => {
  const start = Date.now();

  const poll = async (): Promise<void> => {
    const indexes = await collection.listSearchIndexes().toArray();
    const exists = indexes.some((idx: any) => idx.name === indexName);

    console.log(`Checking for index "${indexName}"... Exists: ${exists}`);

    if (!exists) return;

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

export default waitForIndexDeletion;
