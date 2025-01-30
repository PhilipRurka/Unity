'use client';

import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';

import { Button, HierarchyIcon, SearchIcon } from '@unity/components';

import { HeaderContext } from '@/Providers/contexts/HeaderContextProvider';
import { HierarchyNavContext } from '@/Providers/contexts/HierarchyNavContextProvider';

const HeaderClient = () => {
  const { isHierarchyNavOpen, handleShouldBeOpen: hierarchyBeOpen } = useContext(HierarchyNavContext);
  const { handleIsSearchModalOpen } = useContext(HeaderContext);
  const { data: session, status: userSessionStatus } = useSession();
  const pathname = usePathname();

  const isSessionLoading = userSessionStatus === 'loading';
  const isAuthRoute = pathname === '/login' || pathname === '/reset-password' || pathname === '/registration-request';

  const openHierarchyNav = () => {
    hierarchyBeOpen(!isHierarchyNavOpen);
    handleIsSearchModalOpen(false);
  };

  const openSearchModal = () => {
    handleIsSearchModalOpen(true);
    hierarchyBeOpen(false);
  };

  return (
    <div className={clsx('flex transition-opacity', isSessionLoading ? 'opacity-0' : 'opacity-100')}>
      {!isSessionLoading && session && (
        <div>
          <button className="p-4" onClick={() => openSearchModal()}>
            <SearchIcon size="8" />
          </button>
          <button className="p-4" onClick={openHierarchyNav}>
            <HierarchyIcon size="8" />
          </button>
        </div>
      )}
      {!isSessionLoading && !session && !isAuthRoute && (
        <div className="mr-4 flex self-center">
          <Button color="green" size="small" link="/login" isFull>
            Login
          </Button>
        </div>
      )}
    </div>
  );
};

export default HeaderClient;
