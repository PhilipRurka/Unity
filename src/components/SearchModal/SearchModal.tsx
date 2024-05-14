import { useContext } from 'react';

import { HeaderContext } from '@/Providers/contexts/HeaderContextProvider';

import AlgoliaSearch from '../AlgoliaSearch';
import Modal from '../Modal';

const SearchModal = () => {
  const { handleIsSearchModalOpen } = useContext(HeaderContext);
  return (
    <Modal title="Search Through Articles" handleCloseModal={() => handleIsSearchModalOpen(false)}>
      <AlgoliaSearch />
    </Modal>
  );
};

export default SearchModal;
