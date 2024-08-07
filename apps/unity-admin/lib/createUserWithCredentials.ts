/* eslint-disable no-console */
import bcrypt from 'bcrypt';
import { Db } from 'mongodb';

// import getUtcDateTime from '@/Lib/getUtcDateTime';

type CreateUserWithCredentialsParams = {
  db: Db;
  email: string;
  password: string;
  name: string;
};

const createUserWithCredentials = async ({ db, email, password, name }: CreateUserWithCredentialsParams) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    throw Error('Not a valid email. According to Mr. Regex!');
  }

  try {
    const users = db.collection('users');

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await users.insertOne({
      created_at: new Date(),
      email: email.toLowerCase(),
      last_active: null,
      name,
      password: hashedPassword,
      status: 'pending',
    });

    return result.insertedId;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`User not created in the database: ${error.message}`);
    } else {
      throw new Error('User not created in the database');
    }
  }
};

export default createUserWithCredentials;
