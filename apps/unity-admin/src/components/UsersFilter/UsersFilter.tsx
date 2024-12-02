import { useState } from 'react';

import { Button, Modal } from '@unity/components';

import AddUser from '../AddUser';

type UsersFilterProps = {
  usersLength: number;
};

const UsersFilter = ({ usersLength }: UsersFilterProps) => {
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

  const handleModalToggle = (shouldOpen: boolean) => {
    setIsAddUserModalOpen(shouldOpen);
  };

  return (
    <div data-component="UsersFilter">
      <Modal handleCloseModal={() => handleModalToggle(false)} isModalOpen={isAddUserModalOpen} title="Add User">
        <AddUser />
      </Modal>
      <div className="mb-8 flex justify-between">
        <div className="flex gap-2 text-2xl">
          <p>Users</p>
          <span>{usersLength}</span>
        </div>
        <div className="flex gap-2">
          {/* <SearchInput /> */}
          {/* <Button size="small" color="black" isFull={false} icon="filter" iconPosition="left" onClick={() => {}}>
            Filter
          </Button> */}
          <Button
            size="small"
            color="black"
            isFull
            iconPosition="left"
            icon="plus"
            onClick={() => handleModalToggle(true)}
          >
            Add User
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UsersFilter;
