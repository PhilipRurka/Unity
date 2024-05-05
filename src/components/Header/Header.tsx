'use client';

import Image from 'next/image';
import { useContext } from 'react';

import { HierarchyIcon, SearchIcon } from '@/Components/Icons';

import { HierarchyNavContext } from '../../providers/contexts/HierarchyNavContextProvider';

const Header = () => {
  const { isOpen: isHierarchyNavOpen, handleShouldBeOpen: shouldHierarchyBeOpen } = useContext(HierarchyNavContext);

  const shouldOpenHierarchyNav = () => {
    shouldHierarchyBeOpen(!isHierarchyNavOpen);
  };

  return (
    <nav className="cHeader shadow-black-500/10 flex justify-between bg-white shadow-lg">
      <div className="p-4">
        <Image src="/unity-logo.png" width={32} height={32} alt="Unity Logo" />
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
