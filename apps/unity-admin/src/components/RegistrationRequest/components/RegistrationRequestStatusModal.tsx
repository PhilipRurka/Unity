import { Modal } from '@unity/components';
import { RegistrationRequestFrontendType } from '@unity/types';

import DeclineRegistrationRequest from './DeclineRegistrationRequest';

export type ModalType = 'decline';

type RegistrationRequestStatusModalProps = {
  modalType: ModalType | null;
  handleModalToggle: (modelType: ModalType | null) => void;
  requestData: RegistrationRequestFrontendType;
};

const RegistrationRequestStatusModal = ({
  modalType,
  handleModalToggle,
  requestData,
}: RegistrationRequestStatusModalProps) => (
  <>
    {requestData.status === 'pending' && (
      <Modal
        handleCloseModal={() => handleModalToggle(null)}
        isModalOpen={modalType === 'decline'}
        title="Decline Registration Request"
      >
        <DeclineRegistrationRequest requestId={requestData.id} email={requestData.email} name={requestData.name} />
      </Modal>
    )}
  </>
);

export default RegistrationRequestStatusModal;
