import clsx from 'clsx';
import type { Hit as HitType } from 'instantsearch.js';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { Snippet } from 'react-instantsearch';

import { RightArrow } from '@/Components/Icons';
import { HeaderContext } from '@/Providers/contexts/HeaderContextProvider';
import type { ArticleSearchType } from '@/Types/algolia-codegen/ArticleSearchType';

type AlgoliaHitProps = {
  hit: HitType;
};

const AlgoliaHit = ({ hit }: AlgoliaHitProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const { handleIsSearchModalOpen } = useContext(HeaderContext);

  const article = { ...hit } as ArticleSearchType;

  const toggleIsSelected = () => setIsSelected(!isSelected);

  // eslint-disable-next-line no-underscore-dangle
  if (article._highlightResult.content.matchLevel === 'none') return null;

  return (
    <article
      className={clsx(
        'relative mb-6 transform rounded-lg bg-red-300 bg-article-background p-6 transition last:mb-0',
        isSelected ? 'shadow-search-results' : 'shadow-none'
      )}
    >
      <div className="relative mb-2">
        <h1 className="text-3xl">{article.title}</h1>
        <Link href={`/articles/${article.slug}`} className="absolute right-0 top-1/2 -translate-y-1/2 transform">
          <div
            onClick={() => handleIsSearchModalOpen(false)}
            onMouseEnter={toggleIsSelected}
            onMouseLeave={toggleIsSelected}
          >
            <RightArrow className="" size="12" />
          </div>
        </Link>
      </div>
      {article.contentTitle && <h2 className="mb-2 text-xl">{article.contentTitle}</h2>}
      <Snippet hit={hit} attribute="content" />
    </article>
  );
};

export default AlgoliaHit;
