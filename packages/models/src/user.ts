import mongoose, { Schema, models } from 'mongoose';

import type { UserDocument } from '@unity/types';

const userSchema = new Schema<UserDocument>(
  {
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      unique: true,
    },
    created_at: {
      type: Date,
      default: new Date(),
    },
    last_active: {
      type: Date,
      default: null,
    },
    status: {
      type: String,
      enum: ['active', 'pending', 'removed'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

const UserModel = models.User || mongoose.model<UserDocument>('User', userSchema);

export default UserModel;
