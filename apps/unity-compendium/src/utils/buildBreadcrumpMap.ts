import { TypeHierarchyLayoutWithoutUnresolvableLinksResponse } from '@unity/types';

type Entry = {
  fields: {
    entryTitle: string;
    link: { fields: { slug?: string; text?: string } };
    childrenLinks?: Entry[];
  };
};

export type MapEntry = {
  parents: { text?: string; slug?: string; title: string }[];
  children: { text?: string; slug?: string; title: string }[];
};

const buildMap = (data: TypeHierarchyLayoutWithoutUnresolvableLinksResponse[]): Record<string, MapEntry> => {
  const { links } = data[0].fields;
  const map: Record<string, MapEntry> = {};

  const traverse = (node: Entry, parents: { slug?: string; text?: string; title: string }[] = []) => {
    const { entryTitle, link, childrenLinks = [] } = node.fields;
    if (!link) return;
    const { slug, text } = link.fields;

    if (!slug && !text) return;

    const currentParents = [...parents];
    const children = childrenLinks.map((child) => ({
      title: child.fields.entryTitle,
      slug: child.fields.link.fields.slug,
      text: child.fields.link.fields.text,
    }));

    const key = slug || text;
    if (!key) return;

    map[key] = { parents: currentParents, children };

    childrenLinks.forEach((child) => traverse(child, [...currentParents, { title: entryTitle, slug, text }]));
  };

  links.forEach((root: any) => traverse(root));

  return map;
};

export default buildMap;
