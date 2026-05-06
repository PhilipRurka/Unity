// /* eslint-disable no-console */

// /* eslint-disable no-await-in-loop */
// import { VectorIndexes } from '@unity/types';

// type WaitForIndexCreate = (collection: any, indexName: string, step: any) => Promise<void>;

// const waitForIndexCreate: WaitForIndexCreate = async (collection, indexName, step: any): Promise<void> => {
//   for (let attempt = 0; attempt < 20; attempt += 1) {
//     const indexes: VectorIndexes[] = await collection.listSearchIndexes().toArray();
//     const index = indexes.find((i: any) => i.name === indexName);
//     const status = index?.status;

//     console.log(`Index Create Attempt ${attempt}: Index "${indexName}" status check: ${status}`);

//     if (status === 'READY') {
//       // 3. Kill the Vercel function and wait 15s
//       console.log(`Index "${indexName}" successfully created.`);
//       return;
//     }

//     await step.sleep(`wait-for-create-${indexName}`, '15s');
//   }

//   throw new Error(`Timeout: Index "${indexName}" was not created after 5 minutes.`);
// };

// export default waitForIndexCreate;
