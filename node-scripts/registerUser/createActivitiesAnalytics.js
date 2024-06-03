import { MongoClient } from "mongodb";

const createActivitiesAnalytics = async (email) => {
  const { MONGODB_URI } = (await import("../utils/envVariables.js")).default();

  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    const db = client.db("Production");
    const activitiesAnalytics = db.collection("activities_analytics");

    await activitiesAnalytics.insertOne({ email: email.toLowerCase(), activities: [] });
  } catch (error) {
    throw Error("Activities Analytics not created", error.message);
  } finally {
    await client.close();
  }
};

export default createActivitiesAnalytics;
