/* eslint-disable no-underscore-dangle */
import clsx from 'clsx';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';

import { RightArrow, TextButton } from '@unity/components';
import type { ArticleSearchType } from '@unity/types';

import { HeaderContext } from '@/Providers/contexts/HeaderContextProvider';

type AlgoliaHitProps = {
  hit: ArticleSearchType;
  query: string;
};

const AlgoliaHit = ({ hit, query }: AlgoliaHitProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const [hitValue, setHitValue] = useState(hit._snippetResult?.content.value || '');
  const [isExpanded, setIsExpended] = useState(false);
  const [exactResults, setExactResults] = useState<number>();

  const { handleIsSearchModalOpen } = useContext(HeaderContext);

  const handleUpdateHitValue = (expandedToggleTriggered: boolean) => {
    const isCurrentExpanded = expandedToggleTriggered ? !isExpanded : isExpanded;
    const newValue = isCurrentExpanded ? hit._highlightResult?.content.value : hit._snippetResult?.content.value;

    setHitValue(newValue || '');
  };

  const toggleIsSelected = () => setIsSelected(!isSelected);

  const handleExpand = () => {
    handleUpdateHitValue(true);
    setIsExpended(!isExpanded);
  };

  useEffect(() => {
    const instanceCount = (content: string) => {
      const regex = new RegExp(`(?=${query})`, 'gi');
      return (content.match(regex) || []).length;
    };

    const count = instanceCount(hit._highlightResult?.content.value);

    setExactResults(count);
  }, [hit]);

  useEffect(() => {
    handleUpdateHitValue(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hit]);

  const hasMoreToExpand = hit._highlightResult?.content.value.length !== hit._snippetResult?.content.value.length;

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
            <RightArrow size="12" />
          </div>
        </Link>
      </div>
      {hit.contentTitle && <h2 className="mb-2 text-xl">{hit.contentTitle}</h2>}
      <div dangerouslySetInnerHTML={{ __html: hitValue }} />
      <div className="mt-3 flex gap-4">
        {typeof exactResults !== 'undefined' && (
          <span className={clsx(exactResults > 0 ? 'text-green-700' : 'text-amber-700')}>
            {exactResults} exact results
          </span>
        )}
        {hasMoreToExpand && (
          <TextButton color="blue" onClick={handleExpand}>
            {isExpanded ? 'Collapse' : 'Expand'}
          </TextButton>
        )}
      </div>
    </article>
  );
};

export default AlgoliaHit;
