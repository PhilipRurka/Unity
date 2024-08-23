'use client';

import { useState } from 'react';

import { Button, Modal } from '@unity/components';

import ActivateUser from '@/Components/ActivateUser';
import DisableUser from '@/Components/DisableUser';
import useUser from '@/Hooks/useUser';

type UserProps = {
  userId: string;
};

type ModalType = 'activate' | 'disable';

const User = ({ userId }: UserProps) => {
  const [modalType, setModalType] = useState<ModalType | null>(null);
  const { data: user } = useUser(userId);

  const handleModalToggle = (type: ModalType | null) => {
    setModalType(type);
  };

  return (
    <div data-component="User">
      {user?.status === 'active' && (
        <Modal
          handleCloseModal={() => handleModalToggle(null)}
          isModalOpen={modalType === 'disable'}
          title="Disable User"
        >
          <DisableUser userId={user?.id} email={user?.email} name={user?.name} />
        </Modal>
      )}
      {user?.status === 'disabled' && (
        <Modal
          handleCloseModal={() => handleModalToggle(null)}
          isModalOpen={modalType === 'activate'}
          title="Activate User"
        >
          <ActivateUser userId={user?.id} email={user?.email} name={user?.name} />
        </Modal>
      )}
      <p>{user?.name}</p>
      <p>{user?.email}</p>
      {user?.status === 'active' && (
        <Button color="black" isFull={false} size="small" onClick={() => handleModalToggle('disable')}>
          Disable
        </Button>
      )}
      {user?.status === 'disabled' && (
        <Button color="black" isFull={false} size="small" onClick={() => handleModalToggle('activate')}>
          Activate
        </Button>
      )}
    </div>
  );
};

export default User;
