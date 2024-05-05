'use client';

import { createContext, useState } from 'react';

type Context = {
  isOpen: boolean;
  handleShouldBeOpen: (shouldBeOpen: boolean) => void;
};

export const HierarchyNavContext = createContext<Context>({
  isOpen: false,
  handleShouldBeOpen: () => {},
});

type HierarchyNavContextProps = {
  children: React.ReactNode;
};

const HierarchyNavContextProvider = ({ children }: HierarchyNavContextProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShouldBeOpen = (shouldBeOpen: boolean) => {
    setIsOpen(shouldBeOpen);
  };

  return <HierarchyNavContext.Provider value={{ isOpen, handleShouldBeOpen }}>{children}</HierarchyNavContext.Provider>;
};

export default HierarchyNavContextProvider;
