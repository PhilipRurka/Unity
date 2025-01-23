import { TypeArticleWithoutUnresolvableLinksResponse } from './TypeArticle';
import { TypeCaptainsLogWithoutUnresolvableLinksResponse } from './TypeCaptainsLog';
import { TypeContentSectionWithoutUnresolvableLinksResponse } from './TypeContentSection';
import { TypeHierarchyLayoutWithoutUnresolvableLinksResponse } from './TypeHierarchyLayout';
import { TypeHierarchyLinkWithoutUnresolvableLinksResponse } from './TypeHierarchyLink';
import { TypeHomepageWithoutUnresolvableLinksResponse } from './TypeHomepage';
import { TypeInfoboxWithoutUnresolvableLinksResponse } from './TypeInfobox';
import { TypeInfoboxBlockWithoutUnresolvableLinksResponse } from './TypeInfoboxBlock';
import { TypeInfoboxItemWithoutUnresolvableLinksResponse } from './TypeInfoboxItem';
import { TypeLinkWithoutUnresolvableLinksResponse } from './TypeLink';
import { TypeTextWithoutUnresolvableLinksResponse } from './TypeText';

export type AllContentModelTypes =
  | 'article'
  | 'captainsLog'
  | 'contentSection'
  | 'hierarchyLayout'
  | 'hierarchyLink'
  | 'homepage'
  | 'infobox'
  | 'infoboxBlock'
  | 'infoboxItem'
  | 'link'
  | 'text';

export type ArticleType = TypeArticleWithoutUnresolvableLinksResponse;
export type CaptainsLogType = TypeCaptainsLogWithoutUnresolvableLinksResponse;
export type ContentSectionType = TypeContentSectionWithoutUnresolvableLinksResponse;
export type HierarchyLayoutType = TypeHierarchyLayoutWithoutUnresolvableLinksResponse;
export type HierarchyLinkType = TypeHierarchyLinkWithoutUnresolvableLinksResponse;
export type HomepageType = TypeHomepageWithoutUnresolvableLinksResponse;
export type InfoboxType = TypeInfoboxWithoutUnresolvableLinksResponse;
export type InfoboxBlockType = TypeInfoboxBlockWithoutUnresolvableLinksResponse;
export type InfoboxItemType = TypeInfoboxItemWithoutUnresolvableLinksResponse;
export type LinkType = TypeLinkWithoutUnresolvableLinksResponse;
export type TextType = TypeTextWithoutUnresolvableLinksResponse;

export type ContentModelMapping = {
  article: ArticleType;
  captainsLog: CaptainsLogType;
  contentSection: ContentSectionType;
  hierarchyLayout: HierarchyLayoutType;
  hierarchyLink: HierarchyLinkType;
  homepage: HomepageType;
  infobox: InfoboxType;
  infoboxBlock: InfoboxBlockType;
  infoboxItem: InfoboxItemType;
  link: LinkType;
  text: TextType;
};

export type GetByContentModel = <T extends AllContentModelTypes>(model: T) => Promise<ContentModelMapping[T][]>;
