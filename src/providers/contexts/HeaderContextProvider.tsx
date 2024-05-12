'use client';

import { usePathname } from 'next/navigation';
import { createContext, useEffect, useState } from 'react';

type UiState = {
  articles: {
    query: string | undefined;
  };
};

type Context = {
  isSearchModalOpen: boolean;
  handleIsSearchModalOpen: (shouldBeOpen: boolean) => void;
  lastUiState: UiState;
  handleUpdateLastUiState: (uiState: UiState) => void;
};

export const HeaderContext = createContext<Context>({
  isSearchModalOpen: false,
  handleIsSearchModalOpen: () => {},
  lastUiState: {
    articles: {
      query: '',
    },
  },
  handleUpdateLastUiState: () => {},
});

type HeaderContextProps = {
  children: React.ReactNode;
};

const HeaderContextProvider = ({ children }: HeaderContextProps) => {
  const pathname = usePathname();

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [lastUiState, setLastUiState] = useState<UiState>({
    articles: {
      query: '',
    },
  });

  const handleUpdateLastUiState = (uiState: UiState) => {
    setLastUiState(uiState);
  };

  const handleIsSearchModalOpen = (shouldBeOpen: boolean) => {
    setIsSearchModalOpen(shouldBeOpen);
  };

  useEffect(() => {
    handleIsSearchModalOpen(false);
  }, [pathname]);

  useEffect(() => {
    const body = document.getElementsByTagName('body');
    if (isSearchModalOpen && !body[0].classList.contains('overflow-y-hidden')) {
      body[0].classList.add('overflow-y-hidden');
    } else if (!isSearchModalOpen && body[0].classList.contains('overflow-y-hidden')) {
      body[0].classList.remove('overflow-y-hidden');
    }
  }, [isSearchModalOpen]);

  return (
    <HeaderContext.Provider
      value={{ isSearchModalOpen, handleIsSearchModalOpen, lastUiState, handleUpdateLastUiState }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderContextProvider;
