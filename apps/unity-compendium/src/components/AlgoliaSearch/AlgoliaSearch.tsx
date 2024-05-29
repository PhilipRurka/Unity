import { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';

import AlgoliaHit from '@/Components/AlgoliaHit';
import { Input } from '@/Components/Form';
import getAlgoliaResults from '@/Fetchers/algolia/getAlgoliaResults';
import useDebounce from '@/Hooks/debounce';
import { HeaderContext } from '@/Providers/contexts/HeaderContextProvider';
import { ArticleSearchType } from '@/Types/algolia-codegen/ArticleSearchType';

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
    <div data-component="AlgoliaSearch">
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
