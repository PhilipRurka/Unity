'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useContext, useEffect } from 'react';

import { SidebarContext } from '@/Providers/contexts/SidebarProvider';

const listOfPages = [
  {
    title: 'Users',
    pathname: '/users',
  },
  {
    title: 'Internal Tools',
    pathname: '/internal-tools',
  },
];

const Sidebar = () => {
  const { isSidebarOpen, handleIsSidebarOpen } = useContext(SidebarContext);

  const handleTriggerClose = () => {
    handleIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.code === 'Escape') {
        handleIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (isSidebarOpen) {
        document.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [isSidebarOpen, handleIsSidebarOpen]);

  return (
    <>
      <div
        className={clsx(
          'absolute bottom-0 left-0 top-16 z-30 bg-black transition-all',
          isSidebarOpen ? 'right-72 opacity-80' : 'pointer-events-none right-0 opacity-0'
        )}
        onClick={handleTriggerClose}
      />
      <div
        className={clsx(
          'absolute bottom-0 right-0 top-16 z-40 w-72 bg-white bg-opacity-95 transition-transform',
          isSidebarOpen ? 'translate-x-0' : 'translate-x-72'
        )}
      >
        <div className="sidebar-height hide-scrollbar overflow-y-scroll">
          <div className="p-8">
            {listOfPages.map(({ title, pathname }) => (
              <Link key={`Sidebar-listOfPages-${title}`} href={{ pathname }}>
                {title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
