import algoliasearch from 'algoliasearch/lite';
import { Hits, InstantSearch, SearchBox } from 'react-instantsearch';

import Modal from '../Modal';

type SearchModalProps = {
  handleCloseSearchModal: (shouldOpen: false) => void;
};

const Hit = ({ hit }: any) => {
  console.log(JSON.stringify(hit, null, 2));
  return <></>;
};

const SearchModal = ({ handleCloseSearchModal }: SearchModalProps) => {
  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_DASHBOARD || '',
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH || ''
  );

  return (
    <div data-component="cSearchModel">
      <Modal handleCloseModal={() => handleCloseSearchModal(false)} width="lg">
        <InstantSearch indexName="articles" searchClient={searchClient}>
          <SearchBox />
          <Hits hitComponent={Hit} />
        </InstantSearch>
      </Modal>
    </div>
  );
};

export default SearchModal;
