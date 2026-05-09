import { ContentfulVectorEmbeddingModel } from '@unity/models';

import { InngestType } from '../../../inngest/inngest';
import { connectToDatabase } from '../../../utils';

type VectorWipe = (inngest: InngestType) => Promise<void>;

const vectorWipe: VectorWipe = async (inngest) => {
  await connectToDatabase();

  const { collection } = ContentfulVectorEmbeddingModel;

  await ContentfulVectorEmbeddingModel.deleteMany({});

  await inngest.step.sleep('sleep-between-deletion-and-index-drop', '1s');

  await inngest.step.run('drop-existing-index', async () => {
    try {
      await collection.dropSearchIndex('vector_index');
    } catch (err: any) {
      const codeName = err.codeName || err?.errorResponse?.codeName;
      const code = err.code || err?.errorResponse?.code;

      if (codeName === 'IndexNotFound' || code === 27) {
        // eslint-disable-next-line no-console
        console.log('Inngest ++++++++++ No existing vector index found, skipping drop.');
      } else {
        inngest.logger.error('Error dropping existing vector index:', err);

        throw err;
      }
    }
  });

  await inngest.step.sleep('sleep-after-index-drop', '1s');
};

export default vectorWipe;
