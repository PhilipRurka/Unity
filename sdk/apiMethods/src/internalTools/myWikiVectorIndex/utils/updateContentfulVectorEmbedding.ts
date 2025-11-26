import { ContentfulVectorEmbeddingModel } from '@unity/models';
import { ContentfulVectorEmbeddingType } from '@unity/types';

import { connectToDatabase } from '../../../utils';

type UpdateContentfulVectorEmbedding = (vectorEmbeddings: ContentfulVectorEmbeddingType[]) => Promise<void>;

const updateContentfulVectorEmbedding: UpdateContentfulVectorEmbedding = async (vectorEmbeddings) => {
  await connectToDatabase();

  const { collection } = ContentfulVectorEmbeddingModel;

  try {
    await collection.dropSearchIndex('vector_index');
  } catch (err: any) {
    if (err.codeName === 'IndexNotFound') {
      console.log('No existing vector index found, skipping drop.');
    } else {
      throw err;
    }
  }

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

    const indexes = await collection.listSearchIndexes().toArray();
    console.log(indexes);
  } catch (err: any) {
    console.error('Error updating ContentfulVectorEmbedding:', err);
  }
};
export default updateContentfulVectorEmbedding;
