import { Db } from 'mongodb';
import mongoose from 'mongoose';

type Params = {
  db: Db;
  userId: mongoose.Types.ObjectId;
};

const createActivitiesAnalytics = async ({ db, userId }: Params) => {
  try {
    const activitiesAnalytics = db.collection('activities_analytics');

    await activitiesAnalytics.insertOne({ user_id: userId, activities: [] });
  } catch (error) {
    if (error instanceof Error) {
      throw Error(`Activities Analytics not created: ${error.message}`);
    } else {
      throw Error('Activities Analytics not created');
    }
  }
};

export default createActivitiesAnalytics;
