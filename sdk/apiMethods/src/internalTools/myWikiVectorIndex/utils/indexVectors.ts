import { ContentfulVectorEmbeddingModel } from '@unity/models';

import { InngestType } from '../../../inngest/inngest';

type IndexVectors = (inngest: InngestType) => Promise<void>;

const indexVectors: IndexVectors = async (inngest: InngestType) => {
  const { collection } = ContentfulVectorEmbeddingModel;

  await inngest.step.run('create-new-index', async () => {
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
      inngest.logger.error('Error creating new vector index:', err);
      // eslint-disable-next-line no-console
      console.error('Error creating vector index:', err);
      throw err;
    }
  });
};

export default indexVectors;
