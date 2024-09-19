import mongoose, { Schema, models } from 'mongoose';

import type {
  ActiveSessionType,
  InviteSentType,
  StatusChangeType,
  UpdatedFieldLogType,
  UpdatedPasswordLogType,
  UserLogsDocument,
} from '@unity/types';

const LogBaseSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ['activeSession', 'statusChange', 'inviteSent', 'updatedPassword', 'updatedField'],
    },
  },
  { discriminatorKey: 'type', _id: false, strict: true }
);

/* #region Logs Schema Options */

const ActiveSessionSchema = new Schema<ActiveSessionType>(
  {
    timestamp: { type: Date, required: true },
  },
  { strict: true }
);

const InviteSentSchema = new Schema<InviteSentType>(
  {
    timestamp: { type: Date, required: true },
  },
  { strict: true }
);

const StatusChangeSchema = new Schema<StatusChangeType>(
  {
    from: { type: String, enum: ['active', 'pending', 'removed'], required: true },
    to: { type: String, enum: ['active', 'pending', 'removed'], required: true },
    reason: { type: String },
    timestamp: { type: Date, required: true },
  },
  { strict: true }
);

const UpdatedPassword = new Schema<UpdatedPasswordLogType>(
  {
    timestamp: { type: Date, required: true },
  },
  { strict: true }
);

const UpdatedField = new Schema<UpdatedFieldLogType>(
  {
    fields: {
      type: [
        {
          property: { type: String, enum: ['name', 'notes'], required: true },
          from: { type: String, required: true },
          to: { type: String, required: true },
        },
      ],
      required: true,
    },
    timestamp: { type: Date, required: true },
  },
  { strict: true }
);

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

if (!LogModel.discriminators || !LogModel.discriminators.updatedPassword) {
  LogModel.discriminator('updatedPassword', UpdatedPassword);
}

if (!LogModel.discriminators || !LogModel.discriminators.updatedField) {
  LogModel.discriminator('updatedField', UpdatedField);
}

/* #endregion */

const userLogsSchema = new Schema<UserLogsDocument>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    logs: { type: [LogBaseSchema], required: true },
  },
  { strict: true }
);

const UserLogsModel = models.user_logs || mongoose.model<UserLogsDocument>('user_logs', userLogsSchema);

export default UserLogsModel;
