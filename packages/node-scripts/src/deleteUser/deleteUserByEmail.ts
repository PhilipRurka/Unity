/* eslint-disable no-console */
import { MongoClient } from 'mongodb';

const deleteUserByEmail = async (email: string) => {
  const { MONGODB_URI = '' } = (await import('../utils/envVariables.js')).default();

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
    if (error instanceof Error) {
      throw new Error(`User not deleted from the database: ${error.message}`);
    } else {
      throw new Error(`User not deleted from the database`);
    }
  } finally {
    await client.close();
  }
};

export default deleteUserByEmail;
