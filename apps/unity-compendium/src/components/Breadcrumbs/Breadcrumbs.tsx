import { useContext } from 'react';

import { HierarchyNavContext } from '@/Providers/contexts/HierarchyNavContextProvider';

type BreadcrumbsProps = {
  currentSlug: string;
};

const Breadcrumbs = ({ currentSlug }: BreadcrumbsProps) => {
  const { breadcrumpMap } = useContext(HierarchyNavContext);

  return (
    <div data-component="Breadcrumbs">
      {breadcrumpMap[currentSlug] && breadcrumpMap[currentSlug].parents.length > 0 && (
        <nav className="mb-8 border-b pb-4 text-sm" aria-label="Breadcrumb">
          {breadcrumpMap[currentSlug].parents.map((parent, index) => (
            <div key={`breadcrumb-${parent.slug || parent.text}`} className="inline-block">
              {parent.slug ? (
                <a href={`/articles/${parent.slug}`} className="inline-block text-blue-600 hover:underline">
                  {parent.title}
                </a>
              ) : (
                <span className="inline-block">{parent.title}</span>
              )}
              {index < breadcrumpMap[currentSlug].parents.length - 1 && <span className="mx-2 inline-block">/</span>}
            </div>
          ))}
        </nav>
      )}
    </div>
  );
};

export default Breadcrumbs;
