import { Document } from 'mongodb';

import { UserModel } from '@unity/models';
import { ApiMethodResponseType, ErrorGetType, SuccessGetType } from '@unity/types';

import connectToDatabase from '@/Lib/connectToDatabase';

type GetUsersType = () => ApiMethodResponseType<unknown>;

type CatchError = {
  message: string;
};

const getUsers: GetUsersType = async () => {
  let response: SuccessGetType<Document[]> | ErrorGetType;

  try {
    await connectToDatabase();

    const users = await UserModel.find(
      {},
      {
        _id: 0,
        id: '$_id',
        name: 1,
        email: 1,
        createdAt: '$created_at',
        status: 1,
        lastActive: '$last_active',
      }
    ).exec();

    response = [{ result: users }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    console.error(error.message);

    response = [{ error: { message: error.message } }, { status: 503 }];
  }

  return response;
};

export default getUsers;
