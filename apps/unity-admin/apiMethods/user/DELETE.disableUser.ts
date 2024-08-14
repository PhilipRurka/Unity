import mongoose from 'mongoose';

import { UserLogsModel, UserModel } from '@unity/models';
import type { ApiMethodResponseType, DisableUserReq, ErrorGetType, SuccessGetType } from '@unity/types';

import connectToDatabase from '@/Lib/connectToDatabase';

type CatchError = {
  message: string;
};

type DisableUser = (userId: string, reqData: DisableUserReq) => ApiMethodResponseType<{ message: string }>;

const disableUser: DisableUser = async (userId, { reason }) => {
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

    if (user.status === 'disabled') {
      throw Error('User is already disabled.');
    }

    await UserModel.findOneAndUpdate(
      { _id: userObjectId },
      {
        status: 'disabled',
      }
    );

    const newUserLogs = await UserLogsModel.findOneAndUpdate(
      {
        user_id: userObjectId,
      },
      {
        $push: {
          logs: {
            type: 'statusChange',
            from: 'active',
            to: 'disabled',
            reason,
            timestamp: new Date(),
          },
        },
      },
      { new: true }
    );

    response = [{ result: { message: 'Success!' } }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    console.log(error.message);

    response = [{ error: { message: error.message } }, { status: 503 }];
  }

  mongoose.disconnect();

  return response;
};

export default disableUser;
