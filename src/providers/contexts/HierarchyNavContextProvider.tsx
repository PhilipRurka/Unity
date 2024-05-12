'use client';

import { usePathname } from 'next/navigation';
import { createContext, useEffect, useRef, useState } from 'react';

import shuffleArray from '../../utils/shuffleArray';

type Context = {
  isHierarchyNavOpen: boolean;
  handleShouldBeOpen: (shouldBeOpen: boolean) => void;
  handleSlugListRandomization: (slugsList: string[]) => void;
  slugsList: string[];
};

export const HierarchyNavContext = createContext<Context>({
  isHierarchyNavOpen: false,
  handleShouldBeOpen: () => {},
  handleSlugListRandomization: () => {},
  slugsList: [],
});

type HierarchyNavContextProps = {
  children: React.ReactNode;
};

const HierarchyNavContextProvider = ({ children }: HierarchyNavContextProps) => {
  const pathname = usePathname();
  const slugsListRef = useRef<string[]>();

  const [isHierarchyNavOpen, setIsOpen] = useState(false);
  const [slugsList, setSlugsList] = useState<string[]>([]);

  const handleShouldBeOpen = (shouldBeOpen: boolean) => {
    setIsOpen(shouldBeOpen);
  };

  const handleSlugListRandomization = (slugs: string[]) => {
    const shuffledArray = shuffleArray(slugs);
    setSlugsList(shuffledArray);
    slugsListRef.current = shuffledArray;
  };

  useEffect(() => {
    const handleCurrentSlugRemoval = () => {
      const targetSlug = pathname.replace('/articles/', '');
      if (slugsList.includes(targetSlug)) {
        const newSlugsList = slugsList.filter((item) => item !== targetSlug);

        if (newSlugsList.length === 0) {
          handleSlugListRandomization(slugsListRef.current || []);
          return;
        }

        setSlugsList(newSlugsList);
      }
    };

    handleCurrentSlugRemoval();
  }, [pathname, slugsList]);

  useEffect(() => {
    handleShouldBeOpen(false);
  }, [pathname]);

  useEffect(() => {
    const body = document.getElementsByTagName('body');
    if (isHierarchyNavOpen && !body[0].classList.contains('overflow-y-hidden')) {
      body[0].classList.add('overflow-y-hidden');
    } else if (!isHierarchyNavOpen && body[0].classList.contains('overflow-y-hidden')) {
      body[0].classList.remove('overflow-y-hidden');
    }
  }, [isHierarchyNavOpen]);

  return (
    <HierarchyNavContext.Provider
      value={{ isHierarchyNavOpen, handleShouldBeOpen, handleSlugListRandomization, slugsList }}
    >
      {children}
    </HierarchyNavContext.Provider>
  );
};

export default HierarchyNavContextProvider;
