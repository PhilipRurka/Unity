import { Db } from 'mongodb';

import { green, red } from '../utils/colorCodedLogs.js';

const playground = async (db: Db) => {
  try {
    const usersCollection = db.collection('users');

    const users = await usersCollection.find({}).toArray();

    const userBulkOps = users
      .filter((user) => user.email)
      .map((user) => ({
        updateMany: {
          filter: { email: user.email },
          update: {
            $set: { name: 'XXXXXXXXXXXXXXXXX', status: 'active', last_active: null, created_at: new Date() },
          },
        },
      }));

    if (userBulkOps.length > 0) {
      await usersCollection.bulkWrite(userBulkOps);
      console.log(green, `004-apply-user_id --> Migration successful`);
    }
  } catch (error) {
    console.error(red, '004-apply-user_id --> Migration failed:', error);
    throw error;
  }
};

export default playground;
