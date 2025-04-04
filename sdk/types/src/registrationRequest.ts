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
};

export type RegistrationRequestFrontendType = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
};

export type RegistrationRequestDocument = mongoose.Document & RegistrationRequestType;
