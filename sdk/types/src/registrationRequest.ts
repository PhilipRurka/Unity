import mongoose from 'mongoose';

export type RegistrationRequestType = {
  name: string;
  email: string;
  message?: string;
};

export type RegistrationRequestFrontendType = {
  name: string;
  email: string;
  message: string;
};

export type RegistrationRequestDocument = mongoose.Document & RegistrationRequestType;
