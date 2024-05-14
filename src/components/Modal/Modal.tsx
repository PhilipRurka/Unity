import clsx from 'clsx';
import { ReactNode, useContext } from 'react';

import { CloseIcon } from '@/Components/Icons';
import { HeaderContext } from '@/Providers/contexts/HeaderContextProvider';

type ModalProps = {
  children: ReactNode;
  title: string;
  handleCloseModal: () => void;
};

const Modal = ({ children, title, handleCloseModal }: ModalProps) => {
  const { isSearchModalOpen } = useContext(HeaderContext);

  const handleTriggerClose = () => {
    handleCloseModal();
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <div
        className={clsx(
          'absolute inset-0 z-40 bg-black opacity-80 transition-opacity',
          isSearchModalOpen ? 'pointer-events-auto opacity-80' : 'pointer-events-none opacity-0'
        )}
        onClick={handleTriggerClose}
      />
      <div
        className={clsx(
          'absolute left-1/2 top-16 z-50 -translate-x-1/2 transform',
          'h-full max-h-modal w-full max-w-modal rounded-xl bg-white py-8 transition-opacity',
          isSearchModalOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
      >
        <div className="relative mb-3">
          <span className="ml-8 text-3xl">{title}</span>
          <button className="absolute right-8 top-0" onClick={handleTriggerClose}>
            <CloseIcon size="10" />
          </button>
        </div>
        <div className="relative h-search-results overflow-y-hidden">
          <div className="h-full overflow-y-scroll px-8">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
