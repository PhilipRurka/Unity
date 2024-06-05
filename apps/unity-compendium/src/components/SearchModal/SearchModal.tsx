'use client';

import { useContext } from 'react';

import { Modal } from '@unity/components';

import { HeaderContext } from '@/Providers/contexts/HeaderContextProvider';

import AlgoliaSearch from '../AlgoliaSearch';

const SearchModal = () => {
  const { isSearchModalOpen, handleIsSearchModalOpen } = useContext(HeaderContext);

  return (
    <div className="relative z-50" data-component="cSearchModel">
      <Modal
        title="Search Through Articles"
        backgroundStyle="bg-search-modal"
        isModalOpen={isSearchModalOpen}
        handleCloseModal={() => handleIsSearchModalOpen(false)}
      >
        <AlgoliaSearch />
      </Modal>
    </div>
  );
};

export default SearchModal;
