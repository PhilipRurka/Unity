import mongoose from 'mongoose';

import { ActivityAnalyticsModel } from '@unity/models';
import type { ActivityReqType, ApiMethodResponseType } from '@unity/types';

import connectToDatabase from '@/Lib/connectToDatabase';

type CatchError = {
  message: string;
};

type ActivityPut = (reqData: ActivityReqType) => ApiMethodResponseType<{ message: string }>;

const activityPut: ActivityPut = async ({ user_id, slug }) => {
  try {
    await connectToDatabase();
  } catch (error) {
    return [{ error: { message: 'Something went wrong with MongoConnection!' } }, { status: 500 }];
  }

  try {
    const userObjectId = new mongoose.Types.ObjectId(user_id);

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
      return [{ error: { message: 'Failed to update activities!' } }, { status: 503 }];
    }

    return [{ result: { message: 'Success!' } }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    return [{ error: { message: error.message } }, { status: 503 }];
  }
};

export default activityPut;
