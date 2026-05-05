import mongoose, { Schema, models } from 'mongoose';

import { MyWikiChatMessagesType } from '@unity/types';

const MyWikiChatMessagesSchema = new Schema<MyWikiChatMessagesType>(
  {
    userId: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    messages: [
      {
        role: {
          type: String,
          enum: ['user', 'assistant'],
          required: true,
        },
        content: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 60 * 60 * 24, // TTL: 24 hours in seconds
    },
  },
  { timestamps: false } // we use createdAt for TTL, no need for updatedAt
);

const MyWikiChatMessagesModel =
  models.my_wiki_chat_messages || mongoose.model('my_wiki_chat_messages', MyWikiChatMessagesSchema);

export default MyWikiChatMessagesModel;
