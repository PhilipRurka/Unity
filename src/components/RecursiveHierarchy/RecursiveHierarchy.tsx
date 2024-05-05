import Link from 'next/link';

import { HierarchyLayoutType, HierarchyLinkType } from '@/Types/contentful-codegen/SimplerContentfulTypes';

type RecursiveHierarchyProps = {
  data: HierarchyLayoutType;
};

const RecursiveHierarchy = ({ data }: RecursiveHierarchyProps) => {
  const renderElement = (item: HierarchyLinkType) => {
    if (!item) return null;

    const { link, childrenLinks } = item.fields;

    if (!link) return null;

    return (
      <div className="pl-6" key={`RecursiveHierarchy-${link.fields.slug}-${link.fields.title}`}>
        <Link href={`/articles/${link.fields.slug}`}>{link.fields.title}</Link>
        {childrenLinks && childrenLinks.map((child: HierarchyLinkType | undefined) => child && renderElement(child))}
      </div>
    );
  };

  return (
    <div className="cRecursiveHierarchy *:pl-0 *:before:content-none *:after:content-none">
      {data.fields.links.map((item: any | undefined) => item && renderElement(item))}
    </div>
  );
};

export default RecursiveHierarchy;
