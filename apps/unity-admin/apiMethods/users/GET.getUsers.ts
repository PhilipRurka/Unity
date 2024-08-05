import { MongoClient } from 'mongodb';

import { ApiMethodResponseType } from '@unity/types';

type GetUsersType = () => ApiMethodResponseType<unknown>;

type CatchError = {
  message: string;
};

const getUsers: GetUsersType = async () => {
  const { MONGODB_URI = '' } = process.env;

  const client = new MongoClient(MONGODB_URI);
  let users;

  try {
    await client.connect();
    const db = client.db('Production');
    const usersCollection = db.collection('users');
    users = await usersCollection
      .aggregate([
        {
          $project: {
            _id: 0,
            user_id: '$_id',
            name: 1,
            email: 1,
            created_at: 1,
            status: 1,
            last_active: 1,
          },
        },
      ])
      .toArray();
  } catch (err) {
    const error = err as CatchError;

    console.error(error.message);

    return [{ error: { message: error.message } }, { status: 503 }];
  } finally {
    await client.close();
  }

  return [{ result: users }, { status: 200 }];
};

export default getUsers;
