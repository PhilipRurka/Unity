import { ContentfulVectorEmbeddingModel } from '@unity/models';
import { ContentfulVectorEmbeddingType } from '@unity/types';

import { connectToDatabase } from '../../../utils';
import waitForIndexCreate from './waitForIndexCreate';
import waitForIndexDeletion from './waitForIndexDeletion';

type UpdateContentfulVectorEmbedding = (vectorEmbeddings: ContentfulVectorEmbeddingType[], step: any) => Promise<void>;

const updateContentfulVectorEmbedding: UpdateContentfulVectorEmbedding = async (vectorEmbeddings, step) => {
  await connectToDatabase();

  const { collection } = ContentfulVectorEmbeddingModel;

  await collection.dropSearchIndex('vector_index');

  await waitForIndexDeletion(collection, 'vector_index', step);

  try {
    await ContentfulVectorEmbeddingModel.deleteMany({});

    await ContentfulVectorEmbeddingModel.insertMany(vectorEmbeddings, { ordered: false });

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

    await waitForIndexCreate(collection, 'vector_index', step);
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error('Error updating ContentfulVectorEmbedding:', err);
  }
};
export default updateContentfulVectorEmbedding;
