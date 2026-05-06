import { ContentfulVectorEmbeddingModel } from '@unity/models';
import { ContentfulVectorEmbeddingType } from '@unity/types';

import { connectToDatabase } from '../../../utils';
// import waitForIndexCreate from './waitForIndexCreate';
import waitForIndexDeletion from './waitForIndexDeletion';

type UpdateContentfulVectorEmbedding = (vectorEmbeddings: ContentfulVectorEmbeddingType[], step: any) => Promise<void>;

const updateContentfulVectorEmbedding: UpdateContentfulVectorEmbedding = async (vectorEmbeddings, step) => {
  await connectToDatabase();

  const { collection } = ContentfulVectorEmbeddingModel;

  await step.run('drop-existing-index', async () => {
    try {
      await collection.dropSearchIndex('vector_index');
    } catch (err: any) {
      const codeName = err.codeName || err?.errorResponse?.codeName;
      const code = err.code || err?.errorResponse?.code;

      if (codeName === 'IndexNotFound' || code === 27) {
        // eslint-disable-next-line no-console
        console.log('Inngest ++++++++++ No existing vector index found, skipping drop.');
      } else {
        throw err;
      }
    }
  });

  await waitForIndexDeletion(collection, 'vector_index', step);

  await step.run('update-contentful-vector-embedding', async () => {
    try {
      await ContentfulVectorEmbeddingModel.deleteMany({});

      await ContentfulVectorEmbeddingModel.insertMany(vectorEmbeddings, { ordered: false });
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.error('Error updating ContentfulVectorEmbedding:', err);
    }
  });

  await step.run('create-new-index', async () => {
    try {
      const index = {
        name: 'vector_index',
        type: 'vectorSearch',
        definition: {
          fields: [
            {
              type: 'vector',
              numDimensions: 3072,
              path: 'plot_embedding_text_embedding_3_large',
              similarity: 'dotProduct',
              quantization: 'scalar',
            },
          ],
        },
      };

      await collection.createSearchIndex(index);
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.error('Error creating vector index:', err);
    }
  });
};
export default updateContentfulVectorEmbedding;
