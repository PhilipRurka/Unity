import { useContext } from 'react';

import { HierarchyNavContext } from '@/Providers/contexts/HierarchyNavContextProvider';

type ChildrenCrumbsProps = {
  currentSlug: string;
};

const ChildrenCrumbs = ({ currentSlug }: ChildrenCrumbsProps) => {
  const { breadcrumpMap } = useContext(HierarchyNavContext);

  return (
    <div data-component="ChildrenCrumbs">
      {breadcrumpMap[currentSlug] && breadcrumpMap[currentSlug].children.length > 0 && (
        <div className="mt-8 border-t pt-4 text-sm">
          {breadcrumpMap[currentSlug].children.map((child, index) => (
            <div key={`childrencrumb-${child.slug || child.text}`} className="inline-block">
              {child.slug ? (
                <a href={`/articles/${child.slug}`} className="inline-block text-blue-600 hover:underline">
                  {child.title}
                </a>
              ) : (
                <span className="inline-block">{child.text}</span>
              )}
              {index < breadcrumpMap[currentSlug].children.length - 1 && <span className="mx-2 inline-block">/</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChildrenCrumbs;
