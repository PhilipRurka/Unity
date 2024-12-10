import { TypeArticleWithoutUnresolvableLinksResponse } from './TypeArticle';
import { TypeCaptainsLogWithoutUnresolvableLinksResponse } from './TypeCaptainsLog';
import { TypeContentSectionWithoutUnresolvableLinksResponse } from './TypeContentSection';
import { TypeHierarchyLayoutWithoutUnresolvableLinksResponse } from './TypeHierarchyLayout';
import { TypeHierarchyLinkWithoutUnresolvableLinksResponse } from './TypeHierarchyLink';
import { TypeInfoboxWithoutUnresolvableLinksResponse } from './TypeInfobox';
import { TypeInfoboxBlockWithoutUnresolvableLinksResponse } from './TypeInfoboxBlock';
import { TypeInfoboxItemWithoutUnresolvableLinksResponse } from './TypeInfoboxItem';
import { TypeLinkWithoutUnresolvableLinksResponse } from './TypeLink';

export type AllContentModelTypes =
  | 'article'
  | 'captainsLog'
  | 'contentSection'
  | 'hierarchyLayout'
  | 'hierarchyLink'
  | 'infobox'
  | 'infoboxBlock'
  | 'infoboxItem'
  | 'link';

export type ArticleType = TypeArticleWithoutUnresolvableLinksResponse;
export type CaptainsLogType = TypeCaptainsLogWithoutUnresolvableLinksResponse;
export type ContentSectionType = TypeContentSectionWithoutUnresolvableLinksResponse;
export type HierarchyLayoutType = TypeHierarchyLayoutWithoutUnresolvableLinksResponse;
export type HierarchyLinkType = TypeHierarchyLinkWithoutUnresolvableLinksResponse;
export type InfoboxType = TypeInfoboxWithoutUnresolvableLinksResponse;
export type InfoboxBlockType = TypeInfoboxBlockWithoutUnresolvableLinksResponse;
export type InfoboxItemType = TypeInfoboxItemWithoutUnresolvableLinksResponse;
export type LinkType = TypeLinkWithoutUnresolvableLinksResponse;

export type ContentModelMapping = {
  article: ArticleType;
  captainsLog: CaptainsLogType;
  contentSection: ContentSectionType;
  hierarchyLayout: HierarchyLayoutType;
  hierarchyLink: HierarchyLinkType;
  infobox: InfoboxType;
  infoboxBlock: InfoboxBlockType;
  infoboxItem: InfoboxItemType;
  link: LinkType;
};

export type GetByContentModel = <T extends AllContentModelTypes>(model: T) => Promise<ContentModelMapping[T][]>;
