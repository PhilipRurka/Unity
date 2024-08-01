import {
  green,
  red,
} from "../../packages/node-scripts/dist/utils/colorCodedLogs.js";

export const up = async (db) => {
  const User = db.collection("users");

  try {
    await User.createIndex({ email: 1 }, { unique: true });
    console.log(green, `001-index-user-by-email --> Migration successful`);
  } catch (error) {
    console.error(red, `001-index-user-by-email --> Migration failed`);
    throw error;
  }
};
