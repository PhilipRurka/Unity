'use client';

import { useContext } from 'react';

import { HierarchyIcon, SearchIcon } from '@unity/components';

import { HeaderContext } from '@/Providers/contexts/HeaderContextProvider';
import { HierarchyNavContext } from '@/Providers/contexts/HierarchyNavContextProvider';

const HeaderClient = () => {
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
    <div className="flex">
      <button className="p-4" onClick={() => openSearchModal()}>
        <SearchIcon size="8" />
      </button>
      <button className="p-4" onClick={openHierarchyNav}>
        <HierarchyIcon size="8" />
      </button>
    </div>
  );
};

export default HeaderClient;
