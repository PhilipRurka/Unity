'use client';

import { useState } from 'react';

import { Button, Modal } from '@unity/components';

import DisableUser from '@/Components/DisableUser';
import useUser from '@/Hooks/useUser';

type UserProps = {
  userId: string;
};

const User = ({ userId }: UserProps) => {
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const { data: user } = useUser(userId);

  const handleModalToggle = (shouldOpen: boolean) => {
    setIsAddUserModalOpen(shouldOpen);
  };

  return (
    <div data-component="User">
      {user?.status === 'active' && (
        <Modal handleCloseModal={() => handleModalToggle(false)} isModalOpen={isAddUserModalOpen} title="Add User">
          <DisableUser userId={user?.id} email={user?.email} name={user?.name} />
        </Modal>
      )}
      <p>{user?.name}</p>
      <p>{user?.email}</p>
      {user?.status === 'active' && (
        <Button color="black" isFull={false} size="small" onClick={() => setIsAddUserModalOpen(true)}>
          Disable
        </Button>
      )}
    </div>
  );
};

export default User;
