import algoliasearch from 'algoliasearch/lite';
import { useContext, useEffect } from 'react';
import { Configure, Hits, InstantSearch, SearchBox } from 'react-instantsearch';

import { HeaderContext } from '@/Providers/contexts/HeaderContextProvider';

import AlgoliaHit from '../AlgoliaHit';

type UiState = {
  articles: {
    query: string | undefined;
  };
};

type OnStateChange = (props: { uiState: UiState; setUiState: (uiState: UiState) => void }) => void;

const AlgoliaSearch = () => {
  const { isSearchModalOpen, lastUiState, handleUpdateLastUiState } = useContext(HeaderContext);

  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_DASHBOARD || '',
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH || ''
  );

  const onStateChange: OnStateChange = ({ uiState, setUiState }) => {
    const queryLength = uiState.articles.query?.length;
    if (queryLength && queryLength >= 3) {
      setUiState(uiState);
      handleUpdateLastUiState(uiState);
      return;
    }

    if (queryLength && queryLength <= 2) {
      setUiState({
        articles: {
          query: '',
        },
      });
    }
  };

  useEffect(() => {
    const searchInputInterval: NodeJS.Timeout = setInterval(() => {
      const searchElement: HTMLInputElement | null = document.querySelector('.ais-SearchBox-input');
      if (searchElement) {
        searchElement.focus();
        clearInterval(searchInputInterval);
      }
    }, 50);

    return () => {
      clearInterval(searchInputInterval);
    };
  }, [isSearchModalOpen]);

  return (
    <>
      {isSearchModalOpen && (
        <InstantSearch
          indexName="articles"
          searchClient={searchClient}
          onStateChange={onStateChange}
          initialUiState={lastUiState}
          future={{
            preserveSharedStateOnUnmount: false,
          }}
        >
          <Configure attributesToSnippet={['content:50']} />
          <SearchBox />
          <Hits hitComponent={AlgoliaHit} />
        </InstantSearch>
      )}
    </>
  );
};

export default AlgoliaSearch;
