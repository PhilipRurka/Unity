import { Db } from 'mongodb';

import { green, red } from '../utils/colorCodedLogs.js';

const playground = async (db: Db) => {
  try {
    const usersCollection = db.collection('users');
    const activitiesAnalyticsCollection = db.collection('activities_analytics');

    await activitiesAnalyticsCollection.createIndex({ user_id: 1 }, { unique: false });

    activitiesAnalyticsCollection.dropIndex('email_1');

    const users = await usersCollection.find({}).toArray();

    const activitiesBulkOps = users
      .filter((user) => user.email) // Exclude users with null emails
      .map((user) => ({
        updateMany: {
          filter: { email: user.email },
          // eslint-disable-next-line no-underscore-dangle
          update: { $set: { user_id: user._id }, $unset: { email: 1 } },
        },
      }));

    if (activitiesBulkOps.length > 0) {
      await activitiesAnalyticsCollection.bulkWrite(activitiesBulkOps);
      console.log(green, `Migration: Updated activities_analytics with user_id and removed email.`);
    }
  } catch (error) {
    console.error(red, 'Migration failed:', error);
    throw error;
  }
};

export default playground;
