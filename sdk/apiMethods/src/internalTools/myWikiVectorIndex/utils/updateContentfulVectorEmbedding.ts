import { ContentfulVectorEmbeddingModel } from '@unity/models';
import { ContentfulVectorEmbeddingType } from '@unity/types';

import { connectToDatabase } from '../../../utils';
import waitForIndexCreate from './waitForIndexCreate';
import waitForIndexDeletion from './waitForIndexDeletion';

type UpdateContentfulVectorEmbedding = (vectorEmbeddings: ContentfulVectorEmbeddingType[]) => Promise<void>;

const updateContentfulVectorEmbedding: UpdateContentfulVectorEmbedding = async (vectorEmbeddings) => {
  await connectToDatabase();

  const { collection } = ContentfulVectorEmbeddingModel;

  console.log('Waiting for existing vector index to be deleted...');

  await collection.dropSearchIndex('vector_index');

  await waitForIndexDeletion(collection, 'vector_index');

  console.log('Existing vector index deleted. Updating ContentfulVectorEmbedding collection...');

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

    await waitForIndexCreate(collection, 'vector_index');
  } catch (err: any) {
    console.error('Error updating ContentfulVectorEmbedding:', err);
  }
};
export default updateContentfulVectorEmbedding;
