import mongoose, { Schema, models } from 'mongoose';

import type { RegistrationRequestDocument } from '@unity/types';

const RegistrationRequestSchema = new Schema<RegistrationRequestDocument>(
  {
    name: { type: String },
    email: { type: String },
    message: { type: String },
    created_at: { type: Date },
    status: { type: String, enum: ['pending', 'accepted', 'declined'], default: 'pending' },
    reason_for_decline: { type: String, default: null, required: false },
  },
  { timestamps: true }
);

const RegistrationRequestModel =
  models.registration_requests ||
  mongoose.model<RegistrationRequestDocument>('registration_requests', RegistrationRequestSchema);

export default RegistrationRequestModel;
