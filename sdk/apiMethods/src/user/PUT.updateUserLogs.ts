import mongoose from 'mongoose';

import { UserLogsModel } from '@unity/models';
import { ApiMethodResponseType, ErrorGetType, SuccessGetType } from '@unity/types';

import connectToDatabase from '../utils/connectToDatabase';

type PutUserLogsType = (userId: string) => ApiMethodResponseType<{ message: string }>;

type CatchError = {
  message: string;
};

const putUserLogs: PutUserLogsType = async (userId) => {
  let response: SuccessGetType<{ message: string }> | ErrorGetType;

  try {
    const userObjectId = new mongoose.Types.ObjectId(userId);

    await connectToDatabase();

    await UserLogsModel.findOneAndUpdate(
      {
        user_id: userObjectId,
      },
      {
        $push: {
          logs: {
            type: 'activeSession',
            timestamp: new Date(),
          },
        },
      },
      { new: true }
    );

    response = [{ result: { message: 'New User Log Added' } }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    console.error(error.message);

    response = [{ error: { message: error.message } }, { status: 503 }];
  }

  return response;
};

export default putUserLogs;
