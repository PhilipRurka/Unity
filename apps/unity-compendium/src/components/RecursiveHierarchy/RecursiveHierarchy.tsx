import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useContext, useEffect } from 'react';

import type { HierarchyLinkType } from '@unity/types';

import useContentModel from '@/Hooks/useContentModel';
import { HierarchyNavContext } from '@/Providers/contexts/HierarchyNavContextProvider';

const RecursiveHierarchy = () => {
  const pathname = usePathname();
  const { handleSlugListRandomization } = useContext(HierarchyNavContext);

  const { data: hierarchyDataArray } = useContentModel('hierarchyLayout');

  useEffect(() => {
    if (hierarchyDataArray) {
      const pageList: string[] = [];

      hierarchyDataArray[0].fields.links.map((item) => {
        const slug = item?.fields.link?.fields.slug;
        if (slug) {
          pageList.push(slug);
        }

        return undefined;
      });

      handleSlugListRandomization(pageList);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hierarchyDataArray]);

  if (!hierarchyDataArray) return <></>;

  const renderElement = (item: HierarchyLinkType) => {
    if (!item) return null;

    const { link, childrenLinks } = item.fields;

    if (!link) return null;

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

  const runRecursion = () => (
    <Fragment key="hecursiveHierarchy">
      {hierarchyDataArray[0].fields.links.map((item: any | undefined) => item && renderElement(item))}
    </Fragment>
  );

  return (
    <div className="*:pl-0 *:before:content-none *:after:content-none" data-component="cRecursiveHierarchy">
      {runRecursion()}
    </div>
  );
};

export default RecursiveHierarchy;
