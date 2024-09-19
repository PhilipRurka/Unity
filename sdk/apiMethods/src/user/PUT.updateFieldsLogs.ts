import mongoose from 'mongoose';

import { UserLogsModel, UserModel } from '@unity/models';
import type { ApiMethodResponseType, ErrorGetType, SuccessGetType, UpdatedFieldLogType } from '@unity/types';

import connectToDatabase from '../utils/connectToDatabase';

type CatchError = {
  message: string;
};

type UpdateEditUserLogs = (
  userId: string,
  reqData: UpdatedFieldLogType['fields']
) => ApiMethodResponseType<{ message: string }>;

const updateEditUserLogs: UpdateEditUserLogs = async (userId, fields) => {
  let response: SuccessGetType<{ message: string }> | ErrorGetType;

  try {
    await connectToDatabase();
  } catch (error) {
    return [{ error: { message: 'Something went wrong with MongoConnection!' } }, { status: 500 }];
  }

  try {
    const userObjectId = new mongoose.Types.ObjectId(userId);

    const user = await UserModel.findOne({ _id: userObjectId }).exec();

    if (!user) {
      throw new Error('User not found.');
    }

    await UserLogsModel.findOneAndUpdate(
      {
        user_id: userObjectId,
      },
      {
        $push: {
          logs: {
            type: 'updatedField',
            fields,
            test: 'hey',
            timestamp: new Date(),
          },
        },
      },
      { runValidators: true, strict: true }
    );

    response = [{ result: { message: 'Success!' } }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    console.log(error.message);

    response = [{ error: { message: error.message } }, { status: 503 }];
  }

  return response;
};

export default updateEditUserLogs;
