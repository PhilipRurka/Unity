import { Modal } from '@unity/components';
import { UserBasicFrontendType } from '@unity/types';

import ActivateUser from '@/Components/ActivateUser';
import DisableUser from '@/Components/DisableUser';

export type ModalType = 'activate' | 'disable';

type UserModalsProps = {
  modalType: ModalType | null;
  handleModalToggle: (modelType: ModalType | null) => void;
  user: UserBasicFrontendType;
};

const UserModals = ({ modalType, handleModalToggle, user }: UserModalsProps) => (
  <>
    {user.status === 'active' && (
      <Modal
        handleCloseModal={() => handleModalToggle(null)}
        isModalOpen={modalType === 'disable'}
        title="Disable User"
      >
        <DisableUser userId={user.id} email={user.email} name={user.name} />
      </Modal>
    )}
    {user.status === 'disabled' && (
      <Modal
        handleCloseModal={() => handleModalToggle(null)}
        isModalOpen={modalType === 'activate'}
        title="Activate User"
      >
        <ActivateUser userId={user.id} email={user.email} name={user.name} />
      </Modal>
    )}
  </>
);

export default UserModals;
