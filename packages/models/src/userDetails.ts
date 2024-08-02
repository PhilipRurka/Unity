import mongoose, { Schema, models } from 'mongoose';

import type { ActiveSessionType, InviteSentType, StatusChangeType, UserDetailsDocumentType } from '@unity/types';

const LogBaseSchema = new Schema(
  {
    type: { type: String, required: true, enum: ['activeSession', 'statusChange', 'inviteSent'] },
  },
  { discriminatorKey: 'type', _id: false }
);

const ActiveSessionSchema = new Schema<ActiveSessionType>({
  timestamp: { type: Date, required: true },
});

const InviteSentSchema = new Schema<InviteSentType>({
  timestamp: { type: Date, required: true },
});

const StatusChangeSchema = new Schema<StatusChangeType>({
  from: { type: String, enum: ['active', 'pending', 'removed'], required: true },
  to: { type: String, enum: ['active', 'pending', 'removed'], required: true },
  reason: { type: String },
  timestamp: { type: Date, required: true },
});

const LogModel = mongoose.model('Log', LogBaseSchema);
LogModel.discriminator('activeSession', ActiveSessionSchema);
LogModel.discriminator('statusChange', StatusChangeSchema);
LogModel.discriminator('inviteSent', InviteSentSchema);

const userDetailsSchema = new Schema<UserDetailsDocumentType>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
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
    user_id: {
      type: String,
      required: true,
      ref: 'User',
    },
    logs: { type: [LogBaseSchema], required: true },
  },
  { timestamps: true }
);

const userDetailsModel =
  models.user_details || mongoose.model<UserDetailsDocumentType>('user_details', userDetailsSchema);

export default userDetailsModel;
