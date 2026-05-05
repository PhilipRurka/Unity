import OpenAI from 'openai';

const createEmbedding = async (query: string) => {
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const embed = await client.embeddings.create({
    model: 'text-embedding-3-large',
    input: query,
  });

  return embed.data[0].embedding;
};

export default createEmbedding;
