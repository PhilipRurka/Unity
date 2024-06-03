import mongoose, { Schema, models } from 'mongoose';

import type { UserReqType } from '@unity/types';

const userSchema = new Schema<UserReqType>(
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
  },
  { timestamps: true }
);

const userModel = models.User || mongoose.model('User', userSchema);

export default userModel;
