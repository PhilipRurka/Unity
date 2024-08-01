import { MongoClient } from 'mongodb';

import playground from './playground.js';

const client = new MongoClient('mongodb://localhost:27017');

const { MONGODB_DATABASE = '' } = (await import('../utils/envVariables.js')).default();

try {
  await client.connect();
  const db = client.db(MONGODB_DATABASE);

  playground(db);
} catch (error) {
  console.log(error);
}
