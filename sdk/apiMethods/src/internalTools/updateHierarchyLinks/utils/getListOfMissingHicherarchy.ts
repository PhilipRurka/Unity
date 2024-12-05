import { Entry } from 'contentful';

import {
  HierarchyLink,
  TypeArticleWithoutUnresolvableLinksResponse,
  TypeHierarchyLayoutWithoutUnresolvableLinksResponse,
  TypeHierarchyLinkSkeleton,
} from '@unity/types';

type Links = (Entry<TypeHierarchyLinkSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string> | undefined)[];

type SlugsMap = Record<string, boolean>;

type CreateSlugMapAndCheckDuplicates = (slugs: string[]) => SlugsMap;

const getListOfMissingHicherarchy = (
  articles: TypeArticleWithoutUnresolvableLinksResponse[],
  hierarchyLayout: TypeHierarchyLayoutWithoutUnresolvableLinksResponse[]
) => {
  const createSlugMap: CreateSlugMapAndCheckDuplicates = (slugList: string[]) => {
    const slugsMap: Record<string, boolean> = {};

    slugList.forEach((slug) => {
      slugsMap[slug] = true;
    });

    return slugsMap;
  };

  const findDuplicates = (hierarchyLinks: HierarchyLink[]): HierarchyLink[] => {
    const duplicates: HierarchyLink[] = [];
    const hierarchyLinksMap: Record<string, boolean> = {};

    hierarchyLinks.forEach((hierarchy) => {
      if (hierarchyLinksMap[hierarchy.slug]) {
        duplicates.push(hierarchy);

        return;
      }

      hierarchyLinksMap[hierarchy.slug] = true;
    });

    return duplicates;
  };

  const getAllHierarchySlugs = (links: Links): HierarchyLink[] => {
    const formatedLinks: HierarchyLink[] = [];

    const traverse = (element: any) => {
      const link = element?.fields?.link?.fields;

      if (link?.slug && link?.title) {
        formatedLinks.push(link);
      }

      if (Array.isArray(element?.fields?.childrenLinks)) {
        element.fields.childrenLinks.forEach(traverse);
      }
    };

    links.forEach((dataElement) => {
      if (dataElement) traverse(dataElement);
    });

    return formatedLinks;
  };

  const getLinksCheck = (hierarchySlugs: HierarchyLink[], slugsMap: SlugsMap) => {
    const missingLinks: string[] = [];
    const invalidLinks: HierarchyLink[] = [];
    const map = { ...slugsMap };

    hierarchySlugs.forEach((hierarchy) => {
      if (typeof map[hierarchy.slug] === 'undefined') {
        invalidLinks.push(hierarchy);

        return;
      }

      if (map[hierarchy.slug]) {
        map[hierarchy.slug] = false;
      }
    });

    Object.keys(map).forEach((key) => {
      if (map[key]) {
        missingLinks.push(key);
      }
    });

    return { missingLinks, invalidLinks };
  };

  const hierarchySlugs = getAllHierarchySlugs(hierarchyLayout[0].fields.links);
  const slugList = articles.map(({ fields: item }) => item.slug);
  const slugsMap = createSlugMap(slugList);
  const { missingLinks, invalidLinks } = getLinksCheck(hierarchySlugs, slugsMap);
  const hierarchyDuplicates = findDuplicates(hierarchySlugs);

  return { missingLinks, hierarchyDuplicates, invalidLinks };
};

export default getListOfMissingHicherarchy;
