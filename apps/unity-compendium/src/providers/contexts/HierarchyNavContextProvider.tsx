'use client';

import { usePathname } from 'next/navigation';
import { createContext, useEffect, useRef, useState } from 'react';
import buildMap from 'src/utils/buildBreadcrumpMap';

import useContentModel from '@/Hooks/useContentModel';

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

  const { data: hierarchyDataArray } = useContentModel('hierarchyLayout');

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
    if (!hierarchyDataArray) return;
    const result = buildMap(hierarchyDataArray);
    console.log(result);

    /**
     * Loop through and create a map of keys to
     *  {
     *    parents: [{
     *      title: string,
     *      slug?: string,
     *    }],
     *    children: [{
     *      title: string,
     *      slug?: string,
     *    }]
     *  }
     */
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

  // const renderElement = (item: HierarchyLinkType) => {
  //   if (!item) return null;

  //   let linkPathname: string | undefined;
  //   let value: string;

  //   const { link, childrenLinks } = item.fields;

  //   if (!link) return null;

  //   if ('slug' in link.fields && 'title' in link.fields) {
  //     const linkData = link as LinkType;

  //     value = linkData.fields.title;
  //     linkPathname = `/articles/${linkData.fields.slug}`;
  //   } else {
  //     const linkData = link as TextType;

  //     value = linkData.fields.text;
  //   }

  //   return (
  //     <div key={`RecursiveHierarchy-${value}`} className="pl-6">
  //       {linkPathname ? (
  //         <Link
  //           className={clsx(
  //             'relative text-blue-500 hover:text-blue-900',
  //             'before:[""] before:absolute before:-left-3 before:top-3 before:h-px before:w-2 before:bg-black',
  //             linkPathname === pathname ? 'text-blue-900' : 'text-blue-500'
  //           )}
  //           href={linkPathname}
  //         >
  //           {value}
  //         </Link>
  //       ) : (
  //         <p
  //           className={clsx(
  //             'relative',
  //             'before:[""] before:absolute before:-left-3 before:top-3 before:h-px before:w-2 before:bg-black'
  //           )}
  //         >
  //           {value}
  //         </p>
  //       )}
  //       {childrenLinks && childrenLinks.map((child: HierarchyLinkType | undefined) => child && renderElement(child))}
  //     </div>
  //   );
  // };

  return (
    <HierarchyNavContext.Provider
      value={{ isHierarchyNavOpen, handleShouldBeOpen, handleSlugListRandomization, slugsList }}
    >
      {children}
    </HierarchyNavContext.Provider>
  );
};

export default HierarchyNavContextProvider;
