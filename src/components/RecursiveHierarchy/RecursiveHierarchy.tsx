import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useContext, useEffect, useRef } from 'react';

import { HierarchyNavContext } from '@/Providers/contexts/HierarchyNavContextProvider';
import { HierarchyLayoutType, HierarchyLinkType } from '@/Types/contentful-codegen/SimplerContentfulTypes';

type RecursiveHierarchyProps = {
  data: HierarchyLayoutType;
};

const RecursiveHierarchy = ({ data }: RecursiveHierarchyProps) => {
  const pathname = usePathname();
  const { handleSlugListRandomization } = useContext(HierarchyNavContext);
  const pagesOptionRef = useRef<string[]>([]);

  useEffect(() => {
    handleSlugListRandomization(pagesOptionRef.current);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderElement = (item: HierarchyLinkType) => {
    if (!item) return null;

    const { link, childrenLinks } = item.fields;

    if (!link) return null;

    pagesOptionRef.current.push(link.fields.slug);

    const linkPathname = `/articles/${link.fields.slug}`;

    return (
      <div className="pl-6" key={`RecursiveHierarchy-${link.fields.slug}-${link.fields.title}`}>
        <Link
          className={clsx(
            'relative text-blue-500 hover:text-blue-900',
            'before:[""] before:absolute before:-left-3 before:top-3 before:h-px before:w-2 before:bg-black',
            linkPathname === pathname ? 'text-blue-900' : 'text-blue-500'
          )}
          href={linkPathname}
        >
          {link.fields.title}
        </Link>
        {childrenLinks && childrenLinks.map((child: HierarchyLinkType | undefined) => child && renderElement(child))}
      </div>
    );
  };

  const runRecursion = () => {
    pagesOptionRef.current = [];
    return (
      <Fragment key="hecursiveHierarchy">
        {data.fields.links.map((item: any | undefined) => item && renderElement(item))}
      </Fragment>
    );
  };

  return (
    <div className="*:pl-0 *:before:content-none *:after:content-none" data-component="cRecursiveHierarchy">
      {runRecursion()}
    </div>
  );
};

export default RecursiveHierarchy;
