import mongoose from 'mongoose';

import { activityAnalyticsModel } from '@unity/models';
import type { ActivityReqType, ApiMethodResponseType } from '@unity/types';

import getUtcDateTime from '@/Lib/getUtcDateTime';
import mongoConnect from '@/Lib/mongoConnect';

type CatchError = {
  message: string;
};

type ActivityPut = (reqData: ActivityReqType) => ApiMethodResponseType<{ message: string }>;

const activityPut: ActivityPut = async ({ user_id, slug }) => {
  try {
    await mongoConnect();
  } catch (error) {
    return [{ error: { message: 'Something went wrong with MongoConnection!' } }, { status: 500 }];
  }

  try {
    const result = await activityAnalyticsModel.findOneAndUpdate(
      { user_id: new mongoose.Types.ObjectId(user_id) },
      {
        $push: {
          activities: {
            slug,
            date: getUtcDateTime(),
          },
        },
      },
      { new: true, upsert: true }
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
