'use client';

import { usePathname } from 'next/navigation';
import { createContext, useEffect, useState } from 'react';

import getRandomElement from '../../utils/getRandomElement';

type Context = {
  isOpen: boolean;
  handleShouldBeOpen: (shouldBeOpen: boolean) => void;
  handleUpdateSlugsList: (slugsList: string[]) => void;
  randomSlug: string | undefined;
};

export const HierarchyNavContext = createContext<Context>({
  isOpen: false,
  handleShouldBeOpen: () => {},
  handleUpdateSlugsList: () => {},
  randomSlug: undefined,
});

type HierarchyNavContextProps = {
  children: React.ReactNode;
};

const HierarchyNavContextProvider = ({ children }: HierarchyNavContextProps) => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [slugsList, setSlugsList] = useState<string[]>([]);
  const [randomSlug, setRandomSlug] = useState<string>();

  const handleShouldBeOpen = (shouldBeOpen: boolean) => {
    setIsOpen(shouldBeOpen);
  };

  const handleUpdateSlugsList = (slugs: string[]) => {
    setSlugsList(slugs);
  };

  const handleRandomSlug = () => {
    const slug = getRandomElement(slugsList);
    setRandomSlug(slug);
  };

  useEffect(() => {
    handleRandomSlug();
    handleShouldBeOpen(false);
  }, [pathname, slugsList]);

  return (
    <HierarchyNavContext.Provider value={{ isOpen, handleShouldBeOpen, handleUpdateSlugsList, randomSlug }}>
      {children}
    </HierarchyNavContext.Provider>
  );
};

export default HierarchyNavContextProvider;
