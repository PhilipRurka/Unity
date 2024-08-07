import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

const createUser = async (userId: mongoose.Types.ObjectId, email: string) => {
  const { MONGODB_URI = '' } = (await import('../utils/envVariables.js')).default();

  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    const db = client.db('Production');
    const activitiesAnalytics = db.collection('users');

    await activitiesAnalytics.insertOne({
      email,
      user_id: userId,
      last_active: null,
      status: 'pending',
      logs: [{ type: 'inviteSent', timestamp: new Date() }],
    });
  } catch (error) {
    if (error instanceof Error) {
      throw Error(`Activities Analytics not created: ${error.message}`);
    } else {
      throw Error('Activities Analytics not created');
    }
  } finally {
    await client.close();
  }
};

export default createUser;
