'use client';

import { useContext } from 'react';

import { HierarchyLayoutType } from '@/Types/contentful-codegen/SimplerContentfulTypes';

import { HierarchyNavContext } from '../providers/contexts/HierarchyNavContextProvider';

type HierarchyNavProps = {
  hierarchyLayout: HierarchyLayoutType;
};

const HierarchyNav = ({ hierarchyLayout }: HierarchyNavProps) => {
  const { isOpen } = useContext(HierarchyNavContext);
  return (
    <>
      <div>{isOpen && <p>Its open!</p>}</div>
      <div>{hierarchyLayout.fields.entryTitle}</div>
    </>
  );
};

export default HierarchyNav;
