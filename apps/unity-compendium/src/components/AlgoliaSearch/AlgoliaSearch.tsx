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
        setHits(results);
        handleUpdateLastQuery(debouncedQuery);

        return;
      }

      setHits([]);
      handleUpdateLastQuery('');
    };

    if (debouncedQuery) {
      fetchResults();
    }
  }, [debouncedQuery, handleUpdateLastQuery]);

  useEffect(() => {
    if (!isSearchModalOpen) return;
    inputRef.current?.focus();
  }, [isSearchModalOpen]);

  return (
    <div data-component="cAlgoliaSearch" className={clsx(!isSearchModalOpen && 'hidden')}>
      <Input
        ref={inputRef}
        defaultValue={lastQuery}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)}
      />
      {hits.map((hit) => (
        <AlgoliaHit key={`algoliaSearch-${hit.content}`} hit={hit} />
      ))}
    </div>
  );
};

export default AlgoliaSearch;
