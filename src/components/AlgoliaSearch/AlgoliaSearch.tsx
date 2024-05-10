import algoliasearch from 'algoliasearch/lite';
import { Configure, Hits, InstantSearch, SearchBox } from 'react-instantsearch';

import AlgoliaHit from '../AlgoliaHit';

type OnStateChange = (props: {
  uiState: {
    articles: {
      query: string | undefined;
    };
  };
  setUiState: (uiState: any) => void;
}) => void;

const AlgoliaSearch = () => {
  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_DASHBOARD || '',
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH || ''
  );

  const onStateChange: OnStateChange = ({ uiState, setUiState }) => {
    const queryLength = uiState.articles.query?.length;
    if (queryLength && queryLength >= 3) {
      setUiState(uiState);
    }
  };

  return (
    <InstantSearch indexName="articles" searchClient={searchClient} onStateChange={onStateChange}>
      <Configure attributesToSnippet={['content:50']} />
      <SearchBox />
      <Hits hitComponent={AlgoliaHit} />
    </InstantSearch>
  );
};

export default AlgoliaSearch;
