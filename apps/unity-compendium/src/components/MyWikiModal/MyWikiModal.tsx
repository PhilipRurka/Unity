'use client';

import { useContext } from 'react';

import { Modal } from '@unity/components';

import { HeaderContext } from '@/Providers/contexts/HeaderContextProvider';

import MyWiki from '../MyWiki';

const MyWikiModal = () => {
  const { isMyWikiModalOpen, handleIsMyWikiModalOpen } = useContext(HeaderContext);

  return (
    <div className="relative z-50" data-component="cMyWikiModal">
      <Modal
        title="Ask My Wiki AI a question"
        backgroundStyle="bg-search-modal"
        isModalOpen={isMyWikiModalOpen}
        handleCloseModal={() => handleIsMyWikiModalOpen(false)}
      >
        <MyWiki />
      </Modal>
    </div>
  );
};

export default MyWikiModal;
