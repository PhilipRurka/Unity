import {
  green,
  red,
} from "../../packages/node-scripts/dist/utils/colorCodedLogs.js";

export const up = async (db) => {
  try {
    const usersCollection = db.collection("users");
    const activitiesAnalyticsCollection = db.collection("activities_analytics");

    await activitiesAnalyticsCollection.createIndex(
      { user_id: 1 },
      { unique: false }
    );

    activitiesAnalyticsCollection.dropIndex("email_1");

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
      console.log(green, `004-apply-user_id --> Migration successful`);
    }
  } catch (error) {
    console.error(red, "004-apply-user_id --> Migration failed:", error);
    throw error;
  }
};

export const down = async (db) => {};
