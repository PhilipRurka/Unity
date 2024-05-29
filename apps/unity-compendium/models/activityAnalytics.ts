import mongoose, { Schema, models } from 'mongoose';

import type { ActivityAnalyticts } from '@unity/types';

const activityAnalyticsSchema = new Schema<ActivityAnalyticts>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    activities: [
      {
        date: Date,
        slug: String,
      },
    ],
  },
  { timestamps: true }
);

const ActivityAnalyticsModel =
  models.activities_analytics || mongoose.model('activities_analytics', activityAnalyticsSchema);

export default ActivityAnalyticsModel;
