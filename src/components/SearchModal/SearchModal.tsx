import algoliasearch from 'algoliasearch/lite';
import clsx from 'clsx';
import type { Hit as HitType } from 'instantsearch.js';
import Link from 'next/link';
import { useState } from 'react';
import { Configure, Hits, InstantSearch, SearchBox, Snippet } from 'react-instantsearch';

import { RightArrow } from '@/Components/Icons';
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
  const [isSelected, setIsSelected] = useState(false);

  const article = { ...hit } as ArticleSearchType;

  const toggleIsSelected = () => setIsSelected(!isSelected);

  // eslint-disable-next-line no-underscore-dangle
  if (article._highlightResult.content.matchLevel === 'none') return <></>;

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
          <div onMouseEnter={toggleIsSelected} onMouseLeave={toggleIsSelected}>
            <RightArrow className="" size="12" />
          </div>
        </Link>
      </div>
      {article.contentTitle && <h2 className="mb-2 text-xl">{article.contentTitle}</h2>}
      <Snippet hit={hit} attribute="content" />
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
    <div className="relative z-50" data-component="cSearchModel">
      <Modal handleCloseModal={() => handleCloseSearchModal(false)}>
        <InstantSearch indexName="articles" searchClient={searchClient} onStateChange={onStateChange}>
          <Configure attributesToSnippet={['content:50']} />
          <SearchBox />
          <Hits hitComponent={Hit} />
        </InstantSearch>
      </Modal>
    </div>
  );
};

export default SearchModal;
