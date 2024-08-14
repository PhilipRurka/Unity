import {
  green,
  red,
} from "../../packages/node-scripts/dist/utils/colorCodedLogs.js";

export const up = async (db) => {
  try {
    const usersCollection = db.collection("users");
    const userLogsCollection = db.collection("user_logs");

    const users = await usersCollection.find({}).toArray();

    const logBulkOps = await Promise.all(
      users.map(async (user) => {
        const existingLog = await userLogsCollection.findOne({
          user_id: user._id,
        });

        if (!existingLog) {
          return {
            insertOne: {
              document: {
                user_id: user._id,
                logs: [
                  {
                    type: "inviteSent",
                    timestamp: new Date(),
                  },
                  {
                    type: "statusChange",
                    from: "pending",
                    to: "active",
                    timestamp: new Date(),
                  },
                ],
              },
            },
          };
        }

        return null;
      })
    );

    const validOps = logBulkOps.filter((op) => op !== null);

    if (validOps.length > 0) {
      await userLogsCollection.bulkWrite(validOps);
      console.log(
        green,
        `006-create-initial-userLogs --> Migration successful`
      );
    } else {
      console.log(
        green,
        `006-create-initial-userLogs --> No new log entries needed`
      );
    }
  } catch (error) {
    console.error(
      red,
      "006-create-initial-userLogs --> Migration failed:",
      error
    );
    throw error;
  }
};

export const down = async (db) => {
  try {
    const userLogsCollection = db.collection("user_logs");

    const result = await userLogsCollection.deleteMany({
      logs: {
        $all: [
          { $elemMatch: { type: "inviteSent" } },
          {
            $elemMatch: { type: "statusChange", from: "pending", to: "active" },
          },
        ],
      },
    });

    if (result.deletedCount > 0) {
      console.log(
        green,
        `006-create-initial-userLogs --> Removed ${result.deletedCount} log entries successfully`
      );
    } else {
      console.log(
        green,
        `006-create-initial-userLogs --> No log entries found to remove`
      );
    }
  } catch (error) {
    console.error(
      red,
      "006-create-initial-userLogs --> Down migration failed:",
      error
    );
    throw error;
  }
};
