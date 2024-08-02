/* eslint-disable no-console */
import bcrypt from 'bcrypt';
import { MongoClient } from 'mongodb';

const createUserWithCredentials = async (email: string, password: string) => {
  const { MONGODB_URI = '' } = (await import('../utils/envVariables.js')).default();

  const client = new MongoClient(MONGODB_URI);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    throw Error('Not a valid email. According to Mr. Regex!');
  }

  try {
    await client.connect();
    const db = client.db('Production');
    const users = db.collection('users');

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await users.insertOne({ email: email.toLowerCase(), password: hashedPassword });

    return result.insertedId.toString();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`User not created in the database: ${error.message}`);
    } else {
      throw new Error('User not created in the database');
    }
  } finally {
    await client.close();
  }
};

export default createUserWithCredentials;
