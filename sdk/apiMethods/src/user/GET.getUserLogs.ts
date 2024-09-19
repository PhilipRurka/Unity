import mongoose from 'mongoose';

import { UserLogsModel } from '@unity/models';
import { ApiMethodResponseType, ErrorGetType, LogType, SuccessGetType, UserLogs } from '@unity/types';

import connectToDatabase from '../utils/connectToDatabase';

type GetUserLogsType = (userId: string) => ApiMethodResponseType<LogType[]>;

type CatchError = {
  message: string;
};

const getUserLogs: GetUserLogsType = async (userId) => {
  let response: SuccessGetType<LogType[]> | ErrorGetType;

  try {
    const userObjectId = new mongoose.Types.ObjectId(userId);

    await connectToDatabase();

    const userLogs: UserLogs = await UserLogsModel.findOne({ user_id: userObjectId }).exec();

    response = [{ result: userLogs.logs }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    console.error(error.message);

    response = [{ error: { message: error.message } }, { status: 503 }];
  }

  return response;
};

export default getUserLogs;
