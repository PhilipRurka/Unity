import { ContentfulVectorEmbeddingModel } from '@unity/models';

import { connectToDatabase } from '../../../utils';

const vectorSearch = async (queryEmbedding: number[]) => {
  await connectToDatabase();

  const { collection } = ContentfulVectorEmbeddingModel;

  const pipeline = [
    {
      $vectorSearch: {
        index: 'vector_index',
        path: 'plot_embedding_text_embedding_3_large',
        queryVector: queryEmbedding,
        numCandidates: 500,
        limit: 30,
      },
    },
    {
      $project: {
        _id: 1,
        title: 1,
        slug: 1,
        tags: 1,
        subSections: 1,
        content: 1,
        score: { $meta: 'vectorSearchScore' },
      },
    },
  ];

  const results = await collection.aggregate(pipeline).toArray();
  return results;
};

export default vectorSearch;
