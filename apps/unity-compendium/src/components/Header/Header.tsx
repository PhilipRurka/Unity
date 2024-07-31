'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';

import { HierarchyIcon, SearchIcon } from '@unity/components';

import { HeaderContext } from '@/Providers/contexts/HeaderContextProvider';
import { HierarchyNavContext } from '@/Providers/contexts/HierarchyNavContextProvider';

const Header = () => {
  const { isHierarchyNavOpen, handleShouldBeOpen: hierarchyBeOpen } = useContext(HierarchyNavContext);
  const { handleIsSearchModalOpen } = useContext(HeaderContext);

  const openHierarchyNav = () => {
    hierarchyBeOpen(!isHierarchyNavOpen);
    handleIsSearchModalOpen(false);
  };

  const openSearchModal = () => {
    handleIsSearchModalOpen(true);
    hierarchyBeOpen(false);
  };

  return (
    <>
      <nav className="cHeader shadow-black-500/10 absolute left-0 top-0 z-40 flex h-16 w-screen justify-between bg-white bg-opacity-90 shadow-lg">
        <div className="p-4">
          <Link href="/">
            <Image src="/unity-logo.png" width={32} height={32} alt="Unity Logo" />
          </Link>
        </div>
        <div className="flex">
          <button className="p-4" onClick={() => openSearchModal()}>
            <SearchIcon size="8" />
          </button>
          <button className="p-4" onClick={openHierarchyNav}>
            <HierarchyIcon size="8" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
