'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';

import { HierarchyIcon, SearchIcon } from '@/Components/Icons';
import { HierarchyNavContext } from '@/Providers/contexts/HierarchyNavContextProvider';

import SearchModal from '../SearchModal';

const Header = () => {
  const { isOpen: isHierarchyNavOpen, handleShouldBeOpen: hierarchyBeOpen } = useContext(HierarchyNavContext);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const openHierarchyNav = () => {
    hierarchyBeOpen(!isHierarchyNavOpen);
    setIsSearchModalOpen(false);
  };

  const openSearchModal = (shouldOpen: boolean) => {
    setIsSearchModalOpen(shouldOpen);
    hierarchyBeOpen(false);
  };

  return (
    <>
      {isSearchModalOpen && <SearchModal handleCloseSearchModal={openSearchModal} />}
      <nav className="cHeader shadow-black-500/10 absolute left-0 top-0 z-40 flex w-screen justify-between bg-white shadow-lg">
        <div className="p-4">
          <Link href="/">
            <Image src="/unity-logo.png" width={32} height={32} alt="Unity Logo" />
          </Link>
        </div>
        <div className="flex">
          <button className="p-4" onClick={() => openSearchModal(!isSearchModalOpen)}>
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
