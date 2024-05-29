import type { ActivityReq } from '@unity/types';

import getUtcDateTime from '@/Lib/getUtcDateTime';
import mongoConnect from '@/Lib/mongoConnect';
import ActivityAnalyticsModel from '@/Models/activityAnalytics';

type CatchError = {
  message: string;
};

type ActivityPut = (reqData: ActivityReq) => Promise<[{ data: { message: string } }, { status: number }]>;

const activityPut: ActivityPut = async ({ email, slug }) => {
  try {
    await mongoConnect();
  } catch (error) {
    return [{ data: { message: 'Something went wrong with MongoConnection!' } }, { status: 500 }];
  }

  try {
    const result = await ActivityAnalyticsModel.findOneAndUpdate(
      { email },
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
      return [{ data: { message: 'Failed to update activities!' } }, { status: 503 }];
    }

    return [{ data: { message: 'Success!' } }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    return [{ data: { message: error.message } }, { status: 503 }];
  }
};

export default activityPut;
