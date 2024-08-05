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

    const indexes = await activitiesAnalyticsCollection.indexes();
    const emailIndexExists = indexes.some((index) => index.name === "email_1");

    if (emailIndexExists) {
      await activitiesAnalyticsCollection.dropIndex("email_1");
    }

    const users = await usersCollection.find({}).toArray();

    const activitiesBulkOps = users
      .filter((user) => user.email) // Exclude users with null emails
      .map((user) => ({
        updateMany: {
          filter: { email: user.email },
          // eslint-disable-next-line no-underscore-dangle
          update: {
            $set: { user_id: user._id.toString() },
            $unset: { email: 1 },
          },
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

export const down = async (db) => {
  try {
    const usersCollection = db.collection("users");
    const activitiesAnalyticsCollection = db.collection("activities_analytics");

    // Re-create the email index
    await activitiesAnalyticsCollection.createIndex(
      { email: 1 },
      { unique: false }
    );

    const users = await usersCollection.find({}).toArray();

    const activitiesBulkOps = users
      .filter((user) => user.email) // Exclude users with null emails
      .map((user) => ({
        updateMany: {
          filter: { user_id: user._id.toString() },
          // eslint-disable-next-line no-underscore-dangle
          update: { $set: { email: user.email }, $unset: { user_id: 1 } },
        },
      }));

    if (activitiesBulkOps.length > 0) {
      await activitiesAnalyticsCollection.bulkWrite(activitiesBulkOps);
      console.log(green, `004-rollback-user_id --> Rollback successful`);
    }
  } catch (error) {
    console.error(red, "004-rollback-user_id --> Rollback failed:", error);
    throw error;
  }
};
