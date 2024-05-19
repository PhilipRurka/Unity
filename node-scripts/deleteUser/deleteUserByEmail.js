/* eslint-disable no-console */
import { MongoClient } from 'mongodb';

const deleteUserByEmail = async (email) => {
  const { MONGODB_URI } = (await import('../utils/env-variables.js')).default();

  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    const db = client.db('Production');
    const users = db.collection('users');

    const result = await users.deleteOne({ email: email.toLowerCase() });

    if (result.deletedCount === 0) {
      throw new Error('User not found');
    }
  } catch (error) {
    throw Error('User not deleted from the database', error.message);
  } finally {
    await client.close();
  }
};

export default deleteUserByEmail;
