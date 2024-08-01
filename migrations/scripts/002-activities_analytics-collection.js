import {
  green,
  red,
} from "../../packages/node-scripts/dist/utils/colorCodedLogs.js";

export const up = async (db) => {
  try {
    const collections = await db
      .listCollections({ name: "activities_analytics" })
      .toArray();

    if (collections.length === 0) {
      await db.createCollection("activities_analytics");
    }

    const ActivitiesAnalytics = db.collection("activities_analytics");

    await ActivitiesAnalytics.createIndex({ email: 1 }, { unique: true });

    console.log(
      green,
      `002-activities_analytics-collection --> Migration successful`
    );
  } catch (error) {
    console.error(
      red,
      `002-activities_analytics-collection --> Migration failed`
    );
    throw error;
  }
};
