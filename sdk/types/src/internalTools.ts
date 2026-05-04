import mongoose from 'mongoose';

export type AuditOptions = 'all' | 'myWiki' | 'algolia' | 'incomplete' | 'link placement' | 'hierarchy links';

export type AuditOption = {
  option: AuditOptions;
};

export type AuditType = {
  last_my_wiki_update?: Date;
  last_algolia_update?: Date;
  last_incomplete_update?: Date;
  last_link_placement_update?: Date;
  hierarchy_links?: Date;
};

export type AuditFrontendType = {
  lastMyWikiUpdate?: Date;
  lastAlgoliaUpdate?: Date;
  lastIncompleteUpdate?: Date;
  lastLinkPlacementUpdate?: Date;
  hierarchyLinks?: Date;
};

export type InternalToolsDocument = mongoose.Document & AuditType;
