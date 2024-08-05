import {
  green,
  red,
} from "../../packages/node-scripts/dist/utils/colorCodedLogs.js";

export const up = async (db) => {
  try {
    const usersCollection = db.collection("users");

    const users = await usersCollection.find({}).toArray();

    const userBulkOps = users
      .filter((user) => user.email)
      .map((user) => ({
        updateMany: {
          filter: { email: user.email },
          update: {
            $set: {
              name: "XXXXXXXXXXXXXXXXX",
              status: "active",
              last_active: null,
              created_at: new Date(),
            },
          },
        },
      }));

    if (userBulkOps.length > 0) {
      await usersCollection.bulkWrite(userBulkOps);
      console.log(
        green,
        `005-add-new-properties-to-user --> Migration successful`
      );
    }
  } catch (error) {
    console.error(
      red,
      "005-add-new-properties-to-user --> Migration failed:",
      error
    );
    throw error;
  }
};
