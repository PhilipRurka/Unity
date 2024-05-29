import mongoose, { Schema, models } from 'mongoose';

import { UserReq } from '@/Types/user';

const userSchema = new Schema<UserReq>(
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

const UserModel = models.User || mongoose.model('User', userSchema);

export default UserModel;
