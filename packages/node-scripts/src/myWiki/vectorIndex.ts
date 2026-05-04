import { MongoClient } from 'mongodb';

const {
  MONGODB_PASSWORD = '',
  MONGODB_USERNAME = '',
  MONGODB_CLUSTER_DOMAIN_ID = '',
} = (await import('../utils/envVariables.js')).default();

const uri = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@unitycluster.${MONGODB_CLUSTER_DOMAIN_ID}.mongodb.net`;
const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('sample_mflix');
    const collection = database.collection('embedded_movies');

    // 1. Drop the existing vector index (replace 'vector_index' if you used a different name)
    await collection.dropSearchIndex('vector_index');
    console.log('Existing vector_index has been dropped.');

    // 2. Create the new vector search index for text-embedding-3-large
    const index = {
      name: 'vector_index',
      type: 'vectorSearch',
      definition: {
        fields: [
          {
            type: 'vector',
            numDimensions: 3072, // Set the correct dimension for text-embedding-3-large
            path: 'plot_embedding_text_embedding_3_large', // Update to your new embedding field
            similarity: 'dotProduct',
            quantization: 'scalar',
          },
        ],
      },
    };

    const result = await collection.createSearchIndex(index);
    console.log(`New search index named ${result} is building.`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
