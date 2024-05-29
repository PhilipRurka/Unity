'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useContext, useEffect } from 'react';

import type { HierarchyLayoutType } from '@unity/types';

import RecursiveHierarchy from '@/Components/RecursiveHierarchy';
import { HierarchyNavContext } from '@/Providers/contexts/HierarchyNavContextProvider';

type HierarchyNavProps = {
  hierarchyLayout: HierarchyLayoutType;
};

const HierarchyNav = ({ hierarchyLayout }: HierarchyNavProps) => {
  const { isHierarchyNavOpen, slugsList, handleShouldBeOpen } = useContext(HierarchyNavContext);

  const handleTriggerClose = () => {
    handleShouldBeOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.code === 'Escape') {
        handleShouldBeOpen(false);
      }
    };

    if (isHierarchyNavOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (isHierarchyNavOpen) {
        document.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [isHierarchyNavOpen]);

  return (
    <>
      <div
        className={clsx(
          'absolute bottom-0 left-0 top-16 z-30 bg-black transition-all',
          isHierarchyNavOpen ? 'right-72 opacity-80' : 'pointer-events-none right-0 opacity-0'
        )}
        onClick={handleTriggerClose}
      />
      <div
        className={clsx(
          'absolute bottom-0 right-0 top-16 z-40 w-72 bg-white bg-opacity-95 transition-transform',
          isHierarchyNavOpen ? 'translate-x-0' : 'translate-x-72'
        )}
      >
        <div className="h-full overflow-y-scroll">
          <div className="p-8">
            <Link className="mb-4" href={`/articles/${slugsList[0]}`}>
              Go To Random Page
            </Link>
            <RecursiveHierarchy data={hierarchyLayout} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HierarchyNav;
