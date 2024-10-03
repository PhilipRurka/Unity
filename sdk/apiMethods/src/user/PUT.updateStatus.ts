import mongoose from 'mongoose';

import { UserLogsModel, UserModel } from '@unity/models';
import type {
  ApiMethodResponsePromise,
  ErrorGetType,
  SuccessGetType,
  UserStatus,
  UserStatusChangeReq,
} from '@unity/types';

import connectToDatabase from '../utils/connectToDatabase';

type CatchError = {
  message: string;
};

type UpdateStatus = (userId: string, reqData: UserStatusChangeReq) => ApiMethodResponsePromise<{ message: string }>;

const updateStatus: UpdateStatus = async (userId, { reason, newStatus }) => {
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

    let fromStatus: UserStatus | null = null;

    if (newStatus === 'active') fromStatus = 'disabled';
    if (newStatus === 'pending') fromStatus = 'active';
    if (newStatus === 'disabled') fromStatus = 'active';

    await UserModel.findOneAndUpdate(
      { _id: userObjectId },
      {
        status: newStatus,
      }
    );

    await UserLogsModel.findOneAndUpdate(
      {
        user_id: userObjectId,
      },
      {
        $push: {
          logs: {
            type: 'statusChange',
            from: fromStatus,
            to: newStatus,
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

  return response;
};

export default updateStatus;
