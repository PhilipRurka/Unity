import algoliasearch from 'algoliasearch/lite';
import type { Hit as HitType } from 'instantsearch.js';
import { Configure, Highlight, Hits, InstantSearch, SearchBox, Snippet } from 'react-instantsearch';

import type { ArticleSearchType } from '@/Types/algolia-codegen/ArticleSearchType';

import Modal from '../Modal';

type SearchModalProps = {
  handleCloseSearchModal: (shouldOpen: false) => void;
};

type OnStateChange = (props: {
  uiState: {
    articles: {
      query: string | undefined;
    };
  };
  setUiState: (uiState: any) => void;
}) => void;

type HitProps = {
  hit: HitType;
};

const Hit = ({ hit }: HitProps) => {
  const article = { ...hit } as ArticleSearchType;

  // if(article._highlightResult.content.matchLevel) return <></>

  const output = { ...article } as HitType;

  return (
    <article>
      <h1>
        <Highlight attribute="content" hit={output} />
        <Snippet hit={output} attribute="content" />
      </h1>
      <p>${hit.price}</p>
    </article>
  );
};

const SearchModal = ({ handleCloseSearchModal }: SearchModalProps) => {
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
    <div data-component="cSearchModel">
      <Modal handleCloseModal={() => handleCloseSearchModal(false)} width="lg">
        <InstantSearch indexName="articles" searchClient={searchClient} onStateChange={onStateChange}>
          <Configure attributesToSnippet={['content:30']} />
          <SearchBox />
          <Hits hitComponent={Hit} />
        </InstantSearch>
      </Modal>
    </div>
  );
};

export default SearchModal;
