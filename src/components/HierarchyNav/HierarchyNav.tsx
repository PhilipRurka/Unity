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
  const { isHierarchyNavOpen, slugsList, handleShouldBeOpen } = useContext(HierarchyNavContext);

  const handleTriggerClose = () => {
    handleShouldBeOpen(false);
  };

  return (
    <>
      <div
        className={clsx(
          'absolute inset-0 z-30 bg-black transition-opacity',
          isHierarchyNavOpen ? 'opacity-80' : 'pointer-events-none opacity-0'
        )}
        onClick={handleTriggerClose}
      />
      <div
        className={clsx(
          'absolute bottom-0 right-0 top-16 z-40 w-72 bg-white transition-transform',
          isHierarchyNavOpen ? 'translate-x-0' : 'translate-x-72'
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
