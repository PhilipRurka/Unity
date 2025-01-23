import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useContext, useEffect } from 'react';

import type { HierarchyLinkType, LinkType, TextType } from '@unity/types';

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
        const linkData = item?.fields.link as LinkType;
        const slug = 'slug' in linkData.fields && linkData.fields.slug;

        if (slug) {
          pageList.push(slug);
        }

        item?.fields.childrenLinks?.map((subItem) => {
          const subData = subItem?.fields.link as LinkType | TextType;
          const subSlug = 'slug' in subData.fields && subData.fields.slug;

          if (subSlug) {
            pageList.push(subSlug);
          }

          return undefined;
        });

        return undefined;
      });

      handleSlugListRandomization(pageList);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hierarchyDataArray]);

  if (!hierarchyDataArray) return <></>;

  const renderElement = (item: HierarchyLinkType) => {
    if (!item) return null;

    let linkPathname: string | undefined;
    let value: string;

    const { link, childrenLinks } = item.fields;

    if (!link) return null;

    if ('slug' in link.fields && 'title' in link.fields) {
      const linkData = link as LinkType;

      value = linkData.fields.title;
      linkPathname = `/articles/${linkData.fields.slug}`;
    } else {
      const linkData = link as TextType;

      value = linkData.fields.text;
    }

    return (
      <div key={`RecursiveHierarchy-${value}`} className="pl-6">
        {linkPathname ? (
          <Link
            className={clsx(
              'relative text-blue-500 hover:text-blue-900',
              'before:[""] before:absolute before:-left-3 before:top-3 before:h-px before:w-2 before:bg-black',
              linkPathname === pathname ? 'text-blue-900' : 'text-blue-500'
            )}
            href={linkPathname}
          >
            {value}
          </Link>
        ) : (
          <p
            className={clsx(
              'relative',
              'before:[""] before:absolute before:-left-3 before:top-3 before:h-px before:w-2 before:bg-black'
            )}
          >
            {value}
          </p>
        )}
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
