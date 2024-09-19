import mongoose from 'mongoose';

import { UserModel } from '@unity/models';
import type { ApiMethodResponseType, EditUserReq, ErrorGetType, SuccessGetType, UserType } from '@unity/types';

import connectToDatabase from '@/Lib/connectToDatabase';

import updateEditUserLogs from './PUT.updateEditUserLogs';

type CatchError = {
  message: string;
};

type EditUser = (userId: string, reqData: EditUserReq) => ApiMethodResponseType<{ message: string }>;

const editUser: EditUser = async (userId, { name }) => {
  let response: SuccessGetType<{ message: string }> | ErrorGetType;

  try {
    await connectToDatabase();
  } catch (error) {
    return [{ error: { message: 'Something went wrong with MongoConnection!' } }, { status: 500 }];
  }

  try {
    const userObjectId = new mongoose.Types.ObjectId(userId);

    const preUpdatedUser: UserType | null = await UserModel.findOneAndUpdate(
      { _id: userObjectId },
      {
        name,
      },
      { returnDocument: 'before' }
    );

    if (!preUpdatedUser) throw Error('User Not Found in editUser apiMethods');

    await updateEditUserLogs(userId, { previousValue: preUpdatedUser.name, name });

    response = [{ result: { message: 'Success!' } }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    console.log(error.message);

    response = [{ error: { message: error.message } }, { status: 503 }];
  }

  return response;
};

export default editUser;
