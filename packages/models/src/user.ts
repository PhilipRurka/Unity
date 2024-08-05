import mongoose, { Schema, models } from 'mongoose';

import type { UserDocument } from '@unity/types';

const userSchema = new Schema<UserDocument>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    created_at: {
      type: Date,
      required: true,
    },
    last_active: {
      type: Date,
      required: true,
      default: null,
    },
    status: {
      type: String,
      enum: ['active', 'pending', 'removed'],
      required: true,
      default: 'pending',
    },
  },
  { timestamps: true }
);

const userModel = models.User || mongoose.model<UserDocument>('User', userSchema);

export default userModel;
