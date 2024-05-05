import { TypeArticleWithoutUnresolvableLinksResponse } from "./TypeArticle";
import { TypeContentSectionWithoutUnresolvableLinksResponse } from "./TypeContentSection";
import { TypeHierarchyLayoutWithoutUnresolvableLinksResponse } from "./TypeHierarchyLayout";
import { TypeHierarchyLinkWithoutUnresolvableLinksResponse } from "./TypeHierarchyLink";
import { TypeInfoboxWithoutUnresolvableLinksResponse } from "./TypeInfobox";
import { TypeInfoboxBlockWithoutUnresolvableLinksResponse } from "./TypeInfoboxBlock";
import { TypeInfoboxItemWithoutUnresolvableLinksResponse } from "./TypeInfoboxItem";
import { TypeLinkWithoutUnresolvableLinksResponse } from "./TypeLink";

export type AllContentModelTypes = 'article' | 'contentSection' | 'hierarchyLayout' | 'hierarchyLink' | 'infobox' | 'infoboxBlock' | 'infoboxItem' | 'link';

export type ArticleType = TypeArticleWithoutUnresolvableLinksResponse
export type ContentSectionType = TypeContentSectionWithoutUnresolvableLinksResponse
export type HierarchyLayoutType = TypeHierarchyLayoutWithoutUnresolvableLinksResponse
export type HierarchyLinkType = TypeHierarchyLinkWithoutUnresolvableLinksResponse
export type InfoboxType = TypeInfoboxWithoutUnresolvableLinksResponse
export type InfoboxBlockType = TypeInfoboxBlockWithoutUnresolvableLinksResponse
export type InfoboxItemType = TypeInfoboxItemWithoutUnresolvableLinksResponse
export type LinkType = TypeLinkWithoutUnresolvableLinksResponse