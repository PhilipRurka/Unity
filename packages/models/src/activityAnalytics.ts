import mongoose, { Schema, models } from 'mongoose';

import type { ActivityAnalytictsType } from '@unity/types';

const activityAnalyticsSchema = new Schema<ActivityAnalytictsType>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: 'User',
    },
    activities: [
      {
        // TODO: Date should be Timestamp
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
