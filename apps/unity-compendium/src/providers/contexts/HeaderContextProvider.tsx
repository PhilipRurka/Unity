'use client';

import { usePathname } from 'next/navigation';
import { createContext, useEffect, useState } from 'react';

type Context = {
  isSearchModalOpen: boolean;
  handleIsSearchModalOpen: (shouldBeOpen: boolean) => void;
  isMyWikiModalOpen: boolean;
  handleIsMyWikiModalOpen: (shouldBeOpen: boolean) => void;
  lastQuery: string;
  handleUpdateLastQuery: (query: string) => void;
};

export const HeaderContext = createContext<Context>({
  isSearchModalOpen: false,
  handleIsSearchModalOpen: () => {},
  isMyWikiModalOpen: false,
  handleIsMyWikiModalOpen: () => {},
  lastQuery: '',
  handleUpdateLastQuery: () => {},
});

type HeaderContextProps = {
  children: React.ReactNode;
};

const HeaderContextProvider = ({ children }: HeaderContextProps) => {
  const pathname = usePathname();

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isMyWikiModalOpen, setIsMyWikiModalOpen] = useState(false);
  const [lastQuery, setLastQuery] = useState<string>('');

  const handleUpdateLastQuery = (query: string) => {
    setLastQuery(query);
  };

  const handleIsSearchModalOpen = (shouldBeOpen: boolean) => {
    setIsSearchModalOpen(shouldBeOpen);
  };

  const handleIsMyWikiModalOpen = (shouldBeOpen: boolean) => {
    setIsMyWikiModalOpen(shouldBeOpen);
  };

  useEffect(() => {
    handleIsSearchModalOpen(false);
  }, [pathname]);

  useEffect(() => {
    const html = document.getElementsByTagName('html');
    const body = document.getElementsByTagName('body');
    if (
      (isSearchModalOpen || isMyWikiModalOpen) &&
      !html[0].classList.contains('overflow-y-hidden') &&
      !body[0].classList.contains('overflow-y-hidden')
    ) {
      html[0].classList.add('overflow-y-hidden');
      body[0].classList.add('overflow-y-hidden');
    } else if (
      !isSearchModalOpen &&
      !isMyWikiModalOpen &&
      html[0].classList.contains('overflow-y-hidden') &&
      body[0].classList.contains('overflow-y-hidden')
    ) {
      html[0].classList.remove('overflow-y-hidden');
      body[0].classList.remove('overflow-y-hidden');
    }
  }, [isSearchModalOpen, isMyWikiModalOpen]);

  return (
    <HeaderContext.Provider
      value={{
        isSearchModalOpen,
        handleIsSearchModalOpen,
        isMyWikiModalOpen,
        handleIsMyWikiModalOpen,
        lastQuery,
        handleUpdateLastQuery,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderContextProvider;
