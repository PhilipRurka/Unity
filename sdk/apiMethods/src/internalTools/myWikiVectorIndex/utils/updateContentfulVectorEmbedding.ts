// import { Logger } from 'inngest';

// import { ContentfulVectorEmbeddingModel } from '@unity/models';
// import { ContentfulVectorEmbeddingType } from '@unity/types';

// import { connectToDatabase } from '../../../utils';
// // import waitForIndexCreate from './waitForIndexCreate';
// import waitForIndexDeletion from './waitForIndexDeletion';

// type UpdateContentfulVectorEmbedding = (
//   vectorEmbeddings: ContentfulVectorEmbeddingType[],
//   step: any,
//   logger: Logger
// ) => Promise<void>;

// const updateContentfulVectorEmbedding: UpdateContentfulVectorEmbedding = async (vectorEmbeddings, step, logger) => {

//   try {
//     await waitForIndexDeletion(collection, 'vector_index', step, logger);
//   } catch (err: any) {
//     logger.error('Error waiting for index deletion:', err);
//     // eslint-disable-next-line no-console
//     console.error('Error waiting for index deletion:', err);

//     throw err;
//   }

//   await step.sleep('reset-timer-before-updating-vector-embeding-model', '1s');

//   await step.run('update-contentful-vector-embedding', async () => {
//     try {
//       await ContentfulVectorEmbeddingModel.deleteMany({});

//       await ContentfulVectorEmbeddingModel.insertMany(vectorEmbeddings, { ordered: false });
//     } catch (err: any) {
//       logger.error('Error updating ContentfulVectorEmbedding:', err);
//       // eslint-disable-next-line no-console
//       console.error('Error updating ContentfulVectorEmbedding:', err);

//       throw err;
//     }
//   });

//   await step.sleep('reset-timer-before-create-new-index', '1s');

//   await step.run('create-new-index', async () => {
//     try {
//       const index = {
//         name: 'vector_index',
//         type: 'vectorSearch',
//         definition: {
//           fields: [
//             {
//               type: 'vector',
//               numDimensions: 3072,
//               path: 'plot_embedding_text_embedding_3_large',
//               similarity: 'dotProduct',
//               quantization: 'scalar',
//             },
//           ],
//         },
//       };

//       await collection.createSearchIndex(index);
//     } catch (err: any) {
//       logger.error('Error creating new vector index:', err);
//       // eslint-disable-next-line no-console
//       console.error('Error creating vector index:', err);
//       throw err;
//     }
//   });

//   await step.sleep('reset-timer-before-finalize-update', '1s');

//   const result = await step.run('finalize-update', () => ({ last_my_wiki_update: new Date() }));

//   return result;
// };
// export default updateContentfulVectorEmbedding;
