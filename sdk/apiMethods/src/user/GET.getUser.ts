import mongoose from 'mongoose';

import { UserLogsModel } from '@unity/models';
import { ApiMethodResponseType, ErrorGetType, SuccessGetType, UserFrontendType } from '@unity/types';

import connectToDatabase from '../utils/connectToDatabase';

type GetUserType = (userId: string) => ApiMethodResponseType<UserFrontendType>;

type CatchError = {
  message: string;
};

const getUser: GetUserType = async (userId) => {
  let response: SuccessGetType<UserFrontendType> | ErrorGetType;

  try {
    const userObjectId = new mongoose.Types.ObjectId(userId);

    await connectToDatabase();

    const rawUser = await UserLogsModel.findOne({ user_id: userObjectId })
      .populate({ path: 'user_id', select: 'name email created_at status last_active' })
      .exec();

    const {
      user_id: { created_at: createdAt, email, last_active: lastActive, name, status },
      logs,
    } = rawUser;

    const user: UserFrontendType = {
      createdAt,
      email,
      lastActive,
      logs,
      name,
      status,
      id: userId,
    };

    response = [{ result: user }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    console.error(error.message);

    response = [{ error: { message: error.message } }, { status: 503 }];
  }

  return response;
};

export default getUser;
