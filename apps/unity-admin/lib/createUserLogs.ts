import mongoose from 'mongoose';

import { UserLogsModel } from '@unity/models';

type Params = {
  userId: mongoose.Types.ObjectId;
};

const createUserLogs = async ({ userId }: Params) => {
  try {
    const newUserLogs = new UserLogsModel({
      user_id: userId,
      logs: [
        {
          type: 'inviteSent',
          timestamp: new Date(),
        },
      ],
    });
    await newUserLogs.save();
  } catch (error) {
    if (error instanceof Error) {
      throw Error(`User Logs not created: ${error.message}`);
    } else {
      throw Error('User Logs not created');
    }
  }
};

export default createUserLogs;
