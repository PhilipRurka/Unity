'use client';

import { usePathname } from 'next/navigation';
import { createContext, useEffect, useState } from 'react';

type Context = {
  isSidebarOpen: boolean;
  handleIsSidebarOpen: (shouldBeOpen: boolean) => void;
};

export const SidebarContext = createContext<Context>({
  isSidebarOpen: false,
  handleIsSidebarOpen: () => {},
});

type SidebarProviderProps = {
  children: React.ReactNode;
};

const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const pathname = usePathname();

  const [isSidebarOpen, setIsOpen] = useState(false);

  const handleIsSidebarOpen = (shouldBeOpen: boolean) => {
    setIsOpen(shouldBeOpen);
  };

  useEffect(() => {
    handleIsSidebarOpen(false);
  }, [pathname]);

  useEffect(() => {
    const html = document.getElementsByTagName('html');
    const body = document.getElementsByTagName('body');
    if (
      isSidebarOpen &&
      !html[0].classList.contains('overflow-y-hidden') &&
      !body[0].classList.contains('overflow-y-hidden')
    ) {
      html[0].classList.add('overflow-y-hidden');
      body[0].classList.add('overflow-y-hidden');
    } else if (
      !isSidebarOpen &&
      html[0].classList.contains('overflow-y-hidden') &&
      body[0].classList.contains('overflow-y-hidden')
    ) {
      html[0].classList.remove('overflow-y-hidden');
      body[0].classList.remove('overflow-y-hidden');
    }
  }, [isSidebarOpen]);

  return <SidebarContext.Provider value={{ isSidebarOpen, handleIsSidebarOpen }}>{children}</SidebarContext.Provider>;
};

export default SidebarProvider;
