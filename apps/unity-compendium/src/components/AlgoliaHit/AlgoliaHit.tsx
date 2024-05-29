/* eslint-disable no-underscore-dangle */
import clsx from 'clsx';
import Link from 'next/link';
import { useContext, useState } from 'react';

import type { ArticleSearchType } from '@unity/types';

import { RightArrow } from '@/Components/Icons';
import { HeaderContext } from '@/Providers/contexts/HeaderContextProvider';

type AlgoliaHitProps = {
  hit: ArticleSearchType;
};

const AlgoliaHit = ({ hit }: AlgoliaHitProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const { handleIsSearchModalOpen } = useContext(HeaderContext);

  const toggleIsSelected = () => setIsSelected(!isSelected);

  // eslint-disable-next-line no-underscore-dangle
  if (hit._highlightResult.content.matchLevel === 'none') return null;

  return (
    <article
      data-component="AlgoliaHit"
      className={clsx(
        'relative mt-6 transform rounded-lg bg-white bg-opacity-80 p-6 transition',
        isSelected ? 'shadow-search-results' : 'shadow-none'
      )}
    >
      <div className="relative mb-2">
        <h1 className="text-3xl">{hit.title}</h1>
        <Link href={`/articles/${hit.slug}`} className="absolute right-0 top-1/2 -translate-y-1/2 transform">
          <div
            onClick={() => handleIsSearchModalOpen(false)}
            onMouseEnter={toggleIsSelected}
            onMouseLeave={toggleIsSelected}
          >
            <RightArrow className="" size="12" />
          </div>
        </Link>
      </div>
      {hit.contentTitle && <h2 className="mb-2 text-xl">{hit.contentTitle}</h2>}
      <div dangerouslySetInnerHTML={{ __html: hit._snippetResult?.content.value || '' }} />
    </article>
  );
};

export default AlgoliaHit;
