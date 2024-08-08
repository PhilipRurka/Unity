import { Document } from 'mongodb';
import mongoose from 'mongoose';

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
        user_id: '$_id',
        name: 1,
        email: 1,
        created_at: 1,
        status: 1,
        last_active: 1,
      }
    ).lean();

    response = [{ result: users }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    console.error(error.message);

    response = [{ error: { message: error.message } }, { status: 503 }];
  }

  mongoose.connection.close();

  return response;
};

export default getUsers;
