import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

const createActivitiesAnalytics = async (userId: mongoose.Types.ObjectId) => {
  const { MONGODB_URI = '' } = (await import('../utils/envVariables.js')).default();

  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    const db = client.db('Production');
    const activitiesAnalytics = db.collection('activities_analytics');

    await activitiesAnalytics.insertOne({ user_id: userId, activities: [] });
  } catch (error) {
    if (error instanceof Error) {
      throw Error(`Activities Analytics not created: ${error.message}`);
    } else {
      throw Error('Activities Analytics not created');
    }
  } finally {
    await client.close();
  }
};

export default createActivitiesAnalytics;
