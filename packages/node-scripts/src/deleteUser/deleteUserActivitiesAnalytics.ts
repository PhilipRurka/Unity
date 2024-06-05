/* eslint-disable no-console */
import { MongoClient } from 'mongodb';

const deleteUserActivitiesAnalytics = async (email: string) => {
  const { MONGODB_URI = '' } = (await import('../utils/envVariables.js')).default();

  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    const db = client.db('Production');
    const activitiesAnalytics = db.collection('activities_analytics');

    const result = await activitiesAnalytics.deleteOne({ email: email.toLowerCase() });

    if (result.deletedCount === 0) {
      throw new Error('Activities Analytics not found');
    }
  } catch (error) {
    if (error instanceof Error) {
      if (error instanceof Error) {
        throw new Error(`Activities Analytics not deleted from the database: ${error.message}`);
      } else {
        throw new Error(`Activities Analytics not deleted from the database`);
      }
    }
  } finally {
    await client.close();
  }
};

export default deleteUserActivitiesAnalytics;
