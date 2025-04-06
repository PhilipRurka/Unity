import mongoose from 'mongoose';

export type RegistrationRequestStatus = 'pending' | 'accepted' | 'declined';

export type RegistrationRequestReq = {
  name: string;
  email: string;
  message?: string;
};

export type RegistrationRequestType = {
  name: string;
  email: string;
  message?: string;
  created_at: Date;
  status: RegistrationRequestStatus;
  reason_for_decline?: string;
};

export type RegistrationRequestFrontendType = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
  status: RegistrationRequestStatus;
  reasonForDecline?: string;
};

export type RegistrationRequestDocument = mongoose.Document & RegistrationRequestType;

export type RegistrationRequestStatusChange = {
  id: string;
  status: RegistrationRequestStatus;
  reasonForDecline?: string;
};
