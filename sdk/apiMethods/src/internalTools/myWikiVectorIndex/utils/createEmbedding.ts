import OpenAI from 'openai';

import { ContentfulVectorEmbeddingType, ContentfulVectorWithoutEmbeddingType } from '@unity/types';

type CreateEmbedding = (data: ContentfulVectorWithoutEmbeddingType[]) => Promise<ContentfulVectorEmbeddingType[]>;

const createEmbedding: CreateEmbedding = async (data) => {
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const dataWithEmbedding = data.map(async (item) => {
    const embedding = await client.embeddings.create({
      model: 'text-embedding-3-large',
      input: item.content,
    });

    return { ...item, plot_embedding_text_embedding_3_large: embedding.data[0].embedding };
  });

  return Promise.all(dataWithEmbedding);
};

export default createEmbedding;
