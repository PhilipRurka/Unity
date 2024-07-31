'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';

import { HierarchyIcon } from '@unity/components';

import { SidebarContext } from '@/Providers/contexts/SidebarProvider';

const Header = () => {
  const { isSidebarOpen, handleIsSidebarOpen } = useContext(SidebarContext);

  const openHierarchyNav = () => {
    handleIsSidebarOpen(!isSidebarOpen);
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
          <button className="p-4" onClick={openHierarchyNav}>
            <HierarchyIcon size="8" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
