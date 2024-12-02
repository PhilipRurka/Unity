/* eslint-disable no-underscore-dangle */
import clsx from 'clsx';
import { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';

import { Input } from '@unity/components';
import { useDebounce } from '@unity/hooks';
import type { ArticleSearchType } from '@unity/types';

import AlgoliaHit from '@/Components/AlgoliaHit';
import getAlgoliaResults from '@/Fetchers/algolia/getAlgoliaResults';
import { HeaderContext } from '@/Providers/contexts/HeaderContextProvider';

const AlgoliaSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { isSearchModalOpen, lastQuery, handleUpdateLastQuery } = useContext(HeaderContext);
  const [hits, setHits] = useState<ArticleSearchType[]>([]);
  const [query, setQuery] = useState<string>(lastQuery);

  const debouncedQuery = useDebounce<string>(query, 100);

  useEffect(() => {
    const fetchResults = async () => {
      if (debouncedQuery && debouncedQuery.length >= 3) {
        const results = await getAlgoliaResults(debouncedQuery);
        handleUpdateLastQuery(debouncedQuery);

        return results;
      }

      handleUpdateLastQuery('');
      return [];
    };

    const run = async () => {
      if (debouncedQuery) {
        const results = await fetchResults();

        const matchedResults = results.filter((hit) => hit._highlightResult.content.matchLevel !== 'none');

        setHits(matchedResults);
      }
    };

    run();
  }, [debouncedQuery, handleUpdateLastQuery]);

  useEffect(() => {
    if (!isSearchModalOpen) return;
    inputRef.current?.focus();
  }, [isSearchModalOpen]);

  console.log(hits);

  return (
    <div data-component="cAlgoliaSearch" className={clsx(!isSearchModalOpen && 'hidden')}>
      <div className="flex items-center gap-4">
        <Input
          ref={inputRef}
          defaultValue={lastQuery}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)}
        />
        <span
          className={clsx('whitespace-nowrap pr-2 text-base', hits.length === 0 && 'pointer-events-none opacity-0')}
        >
          {hits.length} results
        </span>
      </div>
      {hits.map((hit) => (
        <AlgoliaHit key={`algoliaSearch-${hit.content}`} hit={hit} />
      ))}
    </div>
  );
};

export default AlgoliaSearch;
