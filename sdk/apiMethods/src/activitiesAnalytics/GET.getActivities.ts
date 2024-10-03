import mongoose from 'mongoose';

import { ActivityAnalyticsModel } from '@unity/models';
import type {
  ActivityAnalytictsType,
  ActivityType,
  ApiMethodResponsePromise,
  ErrorGetType,
  SuccessGetType,
} from '@unity/types';

import connectToDatabase from '../utils/connectToDatabase';

type CatchError = {
  message: string;
};

type GetActivities = (userId: string) => ApiMethodResponsePromise<ActivityType[]>;

const getActivities: GetActivities = async (userId) => {
  let response: SuccessGetType<ActivityType[]> | ErrorGetType;

  try {
    const userObjectId = new mongoose.Types.ObjectId(userId);
    await connectToDatabase();

    const result: ActivityAnalytictsType | null = await ActivityAnalyticsModel.findOne({ user_id: userObjectId });

    if (!result) {
      throw Error('Failed to get activities!');
    }

    response = [{ result: result.activities }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    response = [{ error: { message: error.message } }, { status: 503 }];
  }

  return response;
};

export default getActivities;
