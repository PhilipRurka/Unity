'use client';

import { HierarchyIcon, SearchIcon } from '@/Components/Icons';
import { HierarchyLayoutType } from '@/Types/contentful-codegen/SimplerContentfulTypes';

type HeaderProps = {
  hierarchyLayout: HierarchyLayoutType;
};

const Header = ({ hierarchyLayout }: HeaderProps) => {
  const shouldOpenHierarchyNav = () => {
    console.log(hierarchyLayout);
  };

  return (
    <nav className="cHeader shadow-black-500/10 flex justify-between bg-white shadow-lg">
      <div>
        <span>logo</span>
      </div>
      <div className="flex">
        <button className="p-4">
          <SearchIcon size="8" />
        </button>
        <button className="p-4" onClick={shouldOpenHierarchyNav}>
          <HierarchyIcon size="8" />
        </button>
      </div>
    </nav>
  );
};

export default Header;
