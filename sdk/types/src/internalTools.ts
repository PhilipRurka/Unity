import mongoose from 'mongoose';

export type AuditOptions = 'all' | 'algolia' | 'incomplete' | 'link placement';

export type AuditOption = {
  option: AuditOptions;
};

export type AuditType = {
  last_algolia_update?: Date;
  last_incomplete_update?: Date;
  last_link_placement_update?: Date;
};

export type AuditFrontendType = {
  lastAlgoliaUpdate?: Date;
  lastIncompleteUpdate?: Date;
  lastLinkPlacementUpdate?: Date;
};

export type InternalToolsDocument = mongoose.Document & AuditType;
