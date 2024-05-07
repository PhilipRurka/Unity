'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useContext } from 'react';

import { HierarchyNavContext } from '@/Providers/contexts/HierarchyNavContextProvider';
import { HierarchyLayoutType } from '@/Types/contentful-codegen/SimplerContentfulTypes';

import RecursiveHierarchy from '../RecursiveHierarchy';

type HierarchyNavProps = {
  hierarchyLayout: HierarchyLayoutType;
};

const HierarchyNav = ({ hierarchyLayout }: HierarchyNavProps) => {
  const { isOpen, slugsList } = useContext(HierarchyNavContext);

  return (
    <>
      <div
        className={clsx(
          'absolute bottom-0 right-0 top-16 w-72 bg-white transition-transform',
          isOpen ? 'translate-x-0' : 'translate-x-72'
        )}
      >
        <div className="p-8">
          <Link className="mb-4" href={`/articles/${slugsList[0]}`}>
            Go To Random Page
          </Link>
          <RecursiveHierarchy data={hierarchyLayout} />
        </div>
      </div>
    </>
  );
};

export default HierarchyNav;
