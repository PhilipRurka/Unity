import mongoose, { Schema, models } from 'mongoose';

import type { InternalToolsDocument } from '@unity/types';

const InternalToolsSchema = new Schema<InternalToolsDocument>(
  {
    last_algolia_update: { type: Date },
    last_incomplete_update: { type: Date },
    last_link_placement_update: { type: Date },
    incomplete_audit: { type: Schema.Types.Mixed },
    link_placement_audit: { type: Schema.Types.Mixed },
  },
  { timestamps: true }
);

const InternalToolsModel =
  models.internal_tools || mongoose.model<InternalToolsDocument>('internal_tools', InternalToolsSchema);

export default InternalToolsModel;
