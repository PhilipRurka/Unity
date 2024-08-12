import mongoose from 'mongoose';

import { ActivityAnalyticsModel } from '@unity/models';
import type { ActivityReqType, ApiMethodResponseType, ErrorGetType, SuccessGetType } from '@unity/types';

import connectToDatabase from '@/Lib/connectToDatabase';

type CatchError = {
  message: string;
};

type ActivityPut = (reqData: ActivityReqType) => ApiMethodResponseType<{ message: string }>;

const activityPut: ActivityPut = async ({ userId, slug }) => {
  let response: SuccessGetType<{ message: string }> | ErrorGetType;

  try {
    await connectToDatabase();
  } catch (error) {
    return [{ error: { message: 'Something went wrong with MongoConnection!' } }, { status: 500 }];
  }

  try {
    const userObjectId = new mongoose.Types.ObjectId(userId);

    const result = await ActivityAnalyticsModel.findOneAndUpdate(
      { user_id: userObjectId },
      {
        $push: {
          activities: {
            slug,
            date: new Date(),
          },
        },
      }
    );

    if (!result) {
      response = [{ error: { message: 'Failed to update activities!' } }, { status: 503 }];
    }

    response = [{ result: { message: 'Success!' } }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    response = [{ error: { message: error.message } }, { status: 503 }];
  }

  mongoose.disconnect();

  return response;
};

export default activityPut;
