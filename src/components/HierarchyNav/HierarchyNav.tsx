'use client';

import clsx from 'clsx';
import { useContext } from 'react';

import { HierarchyNavContext } from '@/Providers/contexts/HierarchyNavContextProvider';
import { HierarchyLayoutType } from '@/Types/contentful-codegen/SimplerContentfulTypes';

type HierarchyNavProps = {
  hierarchyLayout: HierarchyLayoutType;
};

const HierarchyNav = ({ hierarchyLayout }: HierarchyNavProps) => {
  const { isOpen } = useContext(HierarchyNavContext);
  return (
    <>
      <div
        className={clsx(
          'absolute bottom-0 right-0 top-16 w-72 bg-white transition-transform',
          isOpen ? 'translate-x-0' : 'translate-x-72'
        )}
      >
        <div className="p-8">{hierarchyLayout.fields.entryTitle}</div>
      </div>
    </>
  );
};

export default HierarchyNav;
