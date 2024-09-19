import mongoose, { Schema, models } from 'mongoose';

import type {
  ActiveSessionType,
  InviteSentType,
  StatusChangeType,
  UserLogsDocument,
  UserUpdatedType,
} from '@unity/types';

const LogBaseSchema = new Schema(
  {
    type: { type: String, required: true, enum: ['activeSession', 'statusChange', 'inviteSent', 'userUpdated'] },
  },
  { discriminatorKey: 'type', _id: false }
);

/* #region Logs Schema Options */

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

const UserUpdated = new Schema<UserUpdatedType>({
  updatedProperties: [{ type: String }],
  timestamp: { type: Date, required: true },
});

/* #endregion */

/* #region Logs Schema Set */

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

if (!LogModel.discriminators || !LogModel.discriminators.userUpdated) {
  LogModel.discriminator('userUpdated', UserUpdated);
}

/* #endregion */

const userLogsSchema = new Schema<UserLogsDocument>({
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  logs: { type: [LogBaseSchema], required: true },
});

const UserLogsModel = models.user_logs || mongoose.model<UserLogsDocument>('user_logs', userLogsSchema);

export default UserLogsModel;
