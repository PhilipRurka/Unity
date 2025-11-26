/* eslint-disable no-restricted-syntax */
import { MongoClient } from 'mongodb';

const {
  MONGODB_PASSWORD = '',
  MONGODB_USERNAME = '',
  MONGODB_CLUSTER_DOMAIN_ID = '',
} = (await import('../utils/envVariables.js')).default();

const uri = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@unitycluster.${MONGODB_CLUSTER_DOMAIN_ID}.mongodb.net`;

const client = new MongoClient(uri);
const database = client.db('sample_mflix');
const collection = database.collection('embedded_movies');

const cursor = collection.listSearchIndexes();
for await (const idx of cursor) {
  console.log(idx.name);
}

console.log('Finished listing all search indexes.');
await client.close();
