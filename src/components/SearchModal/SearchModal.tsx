import AlgoliaSearch from '../AlgoliaSearch';
import Modal from '../Modal';

type SearchModalProps = {
  handleCloseSearchModal: (shouldOpen: false) => void;
};

const SearchModal = ({ handleCloseSearchModal }: SearchModalProps) => (
  <div className="relative z-50" data-component="cSearchModel">
    <Modal handleCloseModal={() => handleCloseSearchModal(false)}>
      <AlgoliaSearch />
    </Modal>
  </div>
);

export default SearchModal;
