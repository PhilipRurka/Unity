import { MongoClient } from 'mongodb';

import { ApiMethodResponseType } from '@unity/types';

type GetUsersDetailsType = () => ApiMethodResponseType<unknown>;

type CatchError = {
  message: string;
};

const getUsersDetails: GetUsersDetailsType = async () => {
  const { MONGODB_URI = '' } = process.env;

  const client = new MongoClient(MONGODB_URI);
  let users;

  try {
    await client.connect();
    const db = client.db('Production');
    const usersCollection = db.collection('user_details');
    users = await usersCollection.find({}).toArray();
  } catch (err) {
    const error = err as CatchError;

    console.error(error.message);

    return [{ error: { message: error.message } }, { status: 503 }];
  } finally {
    await client.close();
  }

  return [{ result: users }, { status: 200 }];
};

export default getUsersDetails;
