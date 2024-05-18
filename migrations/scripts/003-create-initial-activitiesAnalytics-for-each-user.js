import { green, red } from '../../node-scripts/utils/colorCodedLogs.js';

export const up = async (db) => {
  try {
    const usersCollection = db.collection('users');
    const activitiesAnalyticsCollection = db.collection('activities_analytics');

    const users = await usersCollection.find({}).toArray();

    const bulkOps = users.map((user) => ({
      updateOne: {
        filter: { email: user.email },
        update: { $set: { email: user.email, activities: [] } },
        upsert: true,
      },
    }));

    if (bulkOps.length > 0) {
      await activitiesAnalyticsCollection.bulkWrite(bulkOps);
      console.log(green, `003-create-initial-activitiesAnalytics-for-each-user --> Migration successful`);
    }
  } catch (error) {
    console.error(red, '003-create-initial-activitiesAnalytics-for-each-user --> Migration failed:', error);
    throw error;
  }
};
