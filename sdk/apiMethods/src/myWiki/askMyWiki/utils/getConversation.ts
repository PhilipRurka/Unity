import mongoose from 'mongoose';

import { MyWikiChatMessagesModel } from '@unity/models';
import { CatchError, MyWikiChatConversationType } from '@unity/types';

type GetConversation = (userId: string) => Promise<string>;

const getConversation: GetConversation = async (userId: string) => {
  try {
    const userObjectId = new mongoose.Types.ObjectId(userId);

    const messagesData: MyWikiChatConversationType = (await MyWikiChatMessagesModel.findOne(
      { userId: userObjectId },
      {
        messages: { $slice: -4 },
      }
    ).lean()) || { userId, messages: [] };

    return messagesData.messages.map((message) => `${message.role}: ${message.content}`).join('\n');
  } catch (err) {
    const error = err as CatchError;

    throw new Error(error.message || 'Error getting conversation');
  }
};

export default getConversation;
