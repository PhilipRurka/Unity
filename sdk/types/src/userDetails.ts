import type { Document } from 'mongoose';

type UserStatus = 'active' | 'pending' | 'removed';

export type ActiveSessionType = {
  type: 'activeSession';
  timestamp: Date;
};

export type InviteSentType = {
  type: 'inviteSent';
  timestamp: Date;
};

export type StatusChangeType = {
  type: 'statusChange';
  from: UserStatus;
  to: UserStatus;
  reason?: string;
  timestamp: Date;
};

export type LogType = ActiveSessionType | StatusChangeType | InviteSentType;

export type UserDetailsType = {
  email: string;
  name: string;
  created_at: Date;
  last_active: Date | null;
  status: UserStatus;
  user_id: string;
  logs: LogType[];
};

export type UserDetailsDocumentType = Document & UserDetailsType;
