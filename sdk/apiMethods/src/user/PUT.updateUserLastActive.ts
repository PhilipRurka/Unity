import mongoose from 'mongoose';

import { UserModel } from '@unity/models';
import type { ApiMethodResponsePromise, ErrorGetType, SuccessGetType, UpdateActiveLastReq } from '@unity/types';

import connectToDatabase from '../utils/connectToDatabase';

type CatchError = {
  message: string;
};

type EditUser = (userId: string, reqData: UpdateActiveLastReq) => ApiMethodResponsePromise<{ message: string }>;

const updateUserLastActive: EditUser = async (userId, { lastActive }) => {
  let response: SuccessGetType<{ message: string }> | ErrorGetType;

  try {
    await connectToDatabase();
  } catch (error) {
    return [{ error: { message: 'Something went wrong with MongoConnection!' } }, { status: 500 }];
  }

  try {
    const userObjectId = new mongoose.Types.ObjectId(userId);

    await UserModel.findOneAndUpdate({ _id: userObjectId }, { last_active: lastActive });

    response = [{ result: { message: 'Success!' } }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    console.log(error.message);

    response = [{ error: { message: error.message } }, { status: 503 }];
  }

  return response;
};

export default updateUserLastActive;
