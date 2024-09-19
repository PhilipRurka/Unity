import mongoose from 'mongoose';

import { ActivityAnalyticsModel } from '@unity/models';

type Params = {
  userId: mongoose.Types.ObjectId;
};

const createActivitiesAnalytics = async ({ userId }: Params) => {
  try {
    const newAnalytics = new ActivityAnalyticsModel({ user_id: userId, activities: [] });
    await newAnalytics.save();
  } catch (error) {
    if (error instanceof Error) {
      throw Error(`Activities Analytics not created: ${error.message}`);
    } else {
      throw Error('Activities Analytics not created');
    }
  }
};

export default createActivitiesAnalytics;
