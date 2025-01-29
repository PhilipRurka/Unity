import mongoose, { Schema, models } from 'mongoose';

import type { RegistrationRequestDocument } from '@unity/types';

const RegistrationRequestSchema = new Schema<RegistrationRequestDocument>(
  {
    name: { type: String },
    email: { type: String },
    message: { type: String },
  },
  { timestamps: true }
);

const RegistrationRequestModel =
  models.registration_requests ||
  mongoose.model<RegistrationRequestDocument>('registration_requests', RegistrationRequestSchema);

export default RegistrationRequestModel;
