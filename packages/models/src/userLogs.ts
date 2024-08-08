import mongoose, { Schema, models } from 'mongoose';

import type { ActiveSessionType, InviteSentType, StatusChangeType, UserLogsDocument } from '@unity/types';

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

const LogModel = mongoose.models.Log || mongoose.model('Log', LogBaseSchema);
if (!LogModel.discriminators || !LogModel.discriminators.activeSession) {
  LogModel.discriminator('activeSession', ActiveSessionSchema);
}

if (!LogModel.discriminators || !LogModel.discriminators.statusChange) {
  LogModel.discriminator('statusChange', StatusChangeSchema);
}

if (!LogModel.discriminators || !LogModel.discriminators.inviteSent) {
  LogModel.discriminator('inviteSent', InviteSentSchema);
}

const userLogsSchema = new Schema<UserLogsDocument>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    logs: { type: [LogBaseSchema], required: true },
  },
  { timestamps: true }
);

const UserLogsModel = models.UserLogs || mongoose.model<UserLogsDocument>('UserLogs', userLogsSchema);

export default UserLogsModel;
