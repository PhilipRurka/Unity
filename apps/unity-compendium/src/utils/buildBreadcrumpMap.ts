import { TypeHierarchyLayoutWithoutUnresolvableLinksResponse } from '@unity/types';

type Entry = {
  fields: {
    entryTitle: string;
    link: { fields: { slug?: string; id?: string } };
    childrenLinks?: Entry[];
  };
};

type MapEntry = {
  parents: { title: string; slug?: string }[];
  children: { title: string; slug?: string }[];
};

const buildMap = (data: TypeHierarchyLayoutWithoutUnresolvableLinksResponse[]): Record<string, MapEntry> => {
  const { links } = data[0].fields;
  const map: Record<string, MapEntry> = {};

  const traverse = (node: Entry, parents: { title: string; slug?: string }[] = []) => {
    const { entryTitle, link, childrenLinks = [] } = node.fields;
    if (!link) return;
    const { slug } = link.fields;

    if (!slug) return;

    const currentParents = [...parents];
    const children = childrenLinks.map((child) => ({
      title: child.fields.entryTitle,
      slug: child.fields.link.fields.slug || child.fields.link.fields.id,
    }));

    // Add to the map
    map[slug] = { parents: currentParents, children };

    // Recurse into children
    childrenLinks.forEach((child) => traverse(child, [...currentParents, { title: entryTitle, slug }]));
  };

  links.forEach((root: any) => traverse(root));

  return map;
};

export default buildMap;
