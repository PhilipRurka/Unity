'use client';

import { usePathname } from 'next/navigation';
import { createContext, useEffect, useRef, useState } from 'react';
import buildMap, { MapEntry } from 'src/utils/buildBreadcrumpMap';

import useContentModel from '@/Hooks/useContentModel';

import shuffleArray from '../../utils/shuffleArray';

type Context = {
  isHierarchyNavOpen: boolean;
  handleShouldBeOpen: (shouldBeOpen: boolean) => void;
  handleSlugListRandomization: (slugsList: string[]) => void;
  slugsList: string[];
  breadcrumpMap: Record<string, MapEntry>;
};

export const HierarchyNavContext = createContext<Context>({
  isHierarchyNavOpen: false,
  handleShouldBeOpen: () => {},
  handleSlugListRandomization: () => {},
  slugsList: [],
  breadcrumpMap: {},
});

type HierarchyNavContextProps = {
  children: React.ReactNode;
};

const HierarchyNavContextProvider = ({ children }: HierarchyNavContextProps) => {
  const pathname = usePathname();
  const slugsListRef = useRef<string[]>();

  const { data: hierarchyDataArray } = useContentModel('hierarchyLayout');

  const [isHierarchyNavOpen, setIsOpen] = useState(false);
  const [slugsList, setSlugsList] = useState<string[]>([]);
  const [breadcrumpMap, setBreadcrumpMap] = useState<Record<string, MapEntry>>({});

  const handleShouldBeOpen = (shouldBeOpen: boolean) => {
    setIsOpen(shouldBeOpen);
  };

  const handleSlugListRandomization = (slugs: string[]) => {
    const shuffledArray = shuffleArray(slugs);
    setSlugsList(shuffledArray);
    slugsListRef.current = shuffledArray;
  };

  useEffect(() => {
    if (!hierarchyDataArray) return;
    const result = buildMap(hierarchyDataArray);
    setBreadcrumpMap(result);
  }, [hierarchyDataArray]);

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
    const html = document.getElementsByTagName('html');
    const body = document.getElementsByTagName('body');
    if (
      isHierarchyNavOpen &&
      !html[0].classList.contains('overflow-y-hidden') &&
      !body[0].classList.contains('overflow-y-hidden')
    ) {
      html[0].classList.add('overflow-y-hidden');
      body[0].classList.add('overflow-y-hidden');
    } else if (
      !isHierarchyNavOpen &&
      html[0].classList.contains('overflow-y-hidden') &&
      body[0].classList.contains('overflow-y-hidden')
    ) {
      html[0].classList.remove('overflow-y-hidden');
      body[0].classList.remove('overflow-y-hidden');
    }
  }, [isHierarchyNavOpen]);

  return (
    <HierarchyNavContext.Provider
      value={{ isHierarchyNavOpen, handleShouldBeOpen, handleSlugListRandomization, slugsList, breadcrumpMap }}
    >
      {children}
    </HierarchyNavContext.Provider>
  );
};

export default HierarchyNavContextProvider;
