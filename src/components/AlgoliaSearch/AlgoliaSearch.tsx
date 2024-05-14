import algoliasearch from 'algoliasearch/lite';
import { useContext } from 'react';
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
  const { lastUiState, handleUpdateLastUiState } = useContext(HeaderContext);

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

  return (
    <InstantSearch
      indexName="articles"
      searchClient={searchClient}
      onStateChange={onStateChange}
      initialUiState={lastUiState}
    >
      <Configure attributesToSnippet={['content:50']} />
      <SearchBox />
      <Hits hitComponent={AlgoliaHit} />
    </InstantSearch>
  );
};

export default AlgoliaSearch;
